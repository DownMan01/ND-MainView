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
      <main className="min-h-screen py-8 px-4 md:px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Web3 Airdrop Database</h1>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Discover and track the latest blockchain projects, airdrops, and protocols. Stay updated with Web3 innovations.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-6">
            <Suspense fallback={<div className="text-center">Loading filters...</div>}>
              <PaginatedAirdrops
                initialAirdrops={airdrops}
                initialPage={page}
                initialTotalPages={totalPages}
                initialFilters={{
                  search: searchParams.search || "",
                  chain: searchParams.chain || "",
                  cost: searchParams.cost || "",
                  stage: searchParams.stage || "",
                }}
              />
            </Suspense>
          </div>

          {/* Mobile View: Crypto-Themed Cards */}
          <div className="block md:hidden space-y-4">
            {airdrops.map((airdrop) => (
              <div
                key={airdrop.id}
                className="bg-gray-800/60 backdrop-blur-md shadow-lg border border-gray-700 rounded-xl p-5 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-50"></div>
                <div className="relative">
                  <h2 className="text-xl font-bold text-white">{airdrop.name}</h2>
                  <p className="text-sm text-gray-400 mt-2">{airdrop.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-blue-400">{airdrop.chain}</span>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        airdrop.stage === "Active"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-gray-900"
                      }`}
                    >
                      {airdrop.stage}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        airdrop.cost === 0 ? "bg-blue-600 text-white" : "bg-red-500 text-white"
                      }`}
                    >
                      {airdrop.cost === 0 ? "FREE" : "PAID"}
                    </span>
                    <button className="text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-4 py-1.5 rounded-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Table Layout */}
          <div className="hidden md:block">
            <PaginatedAirdrops
              initialAirdrops={airdrops}
              initialPage={page}
              initialTotalPages={totalPages}
              initialFilters={{
                search: searchParams.search || "",
                chain: searchParams.chain || "",
                cost: searchParams.cost || "",
                stage: searchParams.stage || "",
              }}
            />
          </div>
        </div>
      </main>
    )
  } catch (error: any) {
    console.error("Error in Home component:", error)

    const isRateLimit = error?.message?.includes("Too Many Requests") || error?.status === 429

    return (
      <main className="min-h-screen py-8 px-4 md:px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Web3 Airdrop Database</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
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
