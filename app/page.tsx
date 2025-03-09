import { getPaginatedAirdropCollections, getFilteredAirdropCollections } from "@/lib/supabase-queries"
import { isSupabaseConfigured } from "@/lib/supabase"
import { Suspense } from "react"
import PaginatedAirdrops from "@/components/paginated-airdrops"
import ErrorFallback from "@/components/error-fallback"

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page?: string
    search?: string
    chain?: string
    cost?: string
    stage?: string
  }
}) {
  if (!isSupabaseConfigured()) {
    return (
      <main className="min-h-screen py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Web3 Airdrop Database</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Discover and track the latest blockchain projects, airdrops, and protocols.
          </p>
          <ErrorFallback message="Supabase configuration is missing. Please check your environment variables." retry={false} />
        </div>
      </main>
    )
  }

  const page = searchParams.page ? Number.parseInt(searchParams.page) : 1
  const pageSize = 10

  try {
    const hasFilters = searchParams.search || searchParams.chain || searchParams.cost || searchParams.stage
    let airdrops = []
    let count = 0

    if (hasFilters) {
      const result = await getFilteredAirdropCollections(
        {
          search: searchParams.search,
          chain: searchParams.chain,
          cost: searchParams.cost === "FREE" ? 0 : searchParams.cost === "PAID" ? 1 : undefined,
          stage: searchParams.stage,
        },
        page,
        pageSize,
      )

      airdrops = result.data
      count = result.count
    } else {
      const result = await getPaginatedAirdropCollections(page, pageSize)
      airdrops = result.data
      count = result.count
    }

    const totalPages = Math.max(1, Math.ceil(count / pageSize))

    return (
      <main className="min-h-screen py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Web3 Airdrop Database</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              Discover and track the latest blockchain projects, airdrops, and protocols. Stay updated with Web3 innovations.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-10">Loading airdrops...</div>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {airdrops.map((airdrop) => (
                <div key={airdrop.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">{airdrop.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{airdrop.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{airdrop.chain}</span>
                    <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                      {airdrop.stage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Suspense>
        </div>
      </main>
    )
  } catch (error: any) {
    console.error("Error in Home component:", error)

    const isRateLimit = error?.message?.includes("Too Many Requests") || error?.status === 429

    return (
      <main className="min-h-screen py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Web3 Airdrop Database</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Discover and track the latest blockchain projects, airdrops, and protocols.
          </p>
          <ErrorFallback
            message={isRateLimit ? "We're experiencing high traffic. Please try again in a moment." : "There was an error loading the data. Please try again later."}
          />
        </div>
      </main>
    )
  }
}
