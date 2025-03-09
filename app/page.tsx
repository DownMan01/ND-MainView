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

          {/* Separator Line */}
          <div className="border-t border-gray-300 dark:border-gray-600 my-16"></div>

          {/* Learn More About NoteDrop Section */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">Learn More About NoteDrop</h2>
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What is NoteDrop?</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  NoteDrop is a comprehensive Web3 airdrop database that helps you track, discover, and stay updated on
                  the latest cryptocurrency airdrops. Our platform provides real-time information, analytics, and
                  notifications to ensure you never miss an opportunity in the crypto space.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How does it work?</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Our platform aggregates data from multiple blockchain networks to provide you with accurate and timely
                  information about upcoming, ongoing, and past airdrops. You can filter by blockchain, token type,
                  project category, and more to find exactly what you're looking for. Set up personalized alerts to be
                  notified when new opportunities matching your criteria become available.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Why choose NoteDrop?</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  NoteDrop stands out with its user-friendly interface, comprehensive database, and powerful filtering
                  tools. We verify all listed airdrops to minimize scam risks, provide detailed project information to
                  help you make informed decisions, and offer portfolio tracking to monitor your airdrop earnings. Our
                  community features also allow you to connect with other crypto enthusiasts and share insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  } catch (error: any) {
    console.error("Error in Home component:", error)

    const isRateLimit = error?.message?.includes("Too Many Requests") || error?.status === 429

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
