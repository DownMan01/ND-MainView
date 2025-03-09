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
  // Check if Supabase is configured
  if (!isSupabaseConfigured()) {
    return (
      <main className="min-h-screen py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Web3 Airdrop Database</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
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
    // Check if we have any filters
    const hasFilters = searchParams.search || searchParams.chain || searchParams.cost || searchParams.stage

    let airdrops = []
    let count = 0

    if (hasFilters) {
      // Use filtered query if we have filters
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
      // Use simple pagination if no filters
      const result = await getPaginatedAirdropCollections(page, pageSize)
      airdrops = result.data
      count = result.count
    }

    const totalPages = Math.max(1, Math.ceil(count / pageSize))

    return (
      <main className="min-h-screen py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Web3 Airdrop Database</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
              Discover and track the latest blockchain projects, airdrops, and protocols. Stay updated with
              comprehensive information about Web3 innovations.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-10">Loading airdrops...</div>}>
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

    // Check if it's a rate limit error
    const isRateLimit = error?.message?.includes("Too Many Requests") || error?.status === 429

    // Fallback UI in case of error
    return (
      <main className="min-h-screen py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Web3 Airdrop Database</h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
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
