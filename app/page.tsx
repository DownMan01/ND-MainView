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
      <main className="min-h-screen py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:text-3xl md:text-4xl">
              Web3 Airdrop Database
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg">
              Discover and track the latest blockchain projects, airdrops, and protocols.
            </p>
          </div>

          <ErrorFallback
            message="Supabase configuration is missing. Please check your environment variables."
            retry={false}
          />
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
      <main className="min-h-screen py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 space-y-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
              Web3 Airdrop Database
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl">
              Discover and track the latest blockchain projects, airdrops, and protocols. Stay updated with
              comprehensive information about Web3 innovations.
            </p>
          </div>

          <Suspense fallback={
            <div className="text-center py-6 text-sm sm:text-base">Loading airdrops...</div>
          }>
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
      </main>
    )
  } catch (error: any) {
    console.error("Error in Home component:", error)
    const isRateLimit = error?.message?.includes("Too Many Requests") || error?.status === 429

    return (
      <main className="min-h-screen py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 space-y-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
              Web3 Airdrop Database
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg">
              Discover and track the latest blockchain projects, airdrops, and protocols.
            </p>
          </div>

          <ErrorFallback
            message={
              isRateLimit
                ? "We're experiencing high traffic. Please try again in a moment."
                : "There was an error loading the data. Please try again later."
            }
          />
        </div>
      </main>
    )
  }
}
