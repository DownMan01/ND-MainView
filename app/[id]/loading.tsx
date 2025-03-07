import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Banner skeleton */}
      <div className="h-80 sm:h-96 bg-gradient-to-r from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#121212]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#121212] to-transparent" />
      </div>

      {/* Profile content skeleton */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative -mt-40 sm:-mt-48 z-20 flex flex-col items-center">
          <Skeleton className="w-28 h-28 rounded-full mb-6 bg-purple-900/20" />

          <div className="text-center w-full">
            <Skeleton className="h-12 w-72 mx-auto mb-4 bg-gray-800" />
            <Skeleton className="h-6 w-96 max-w-full mx-auto mb-8 bg-gray-800" />

            <div className="flex justify-center gap-3 mb-8">
              <Skeleton className="h-8 w-20 rounded-full bg-purple-900/20" />
              <Skeleton className="h-8 w-20 rounded-full bg-blue-900/20" />
              <Skeleton className="h-8 w-20 rounded-full bg-green-900/20" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-16">
        <Skeleton className="mb-12 h-32 w-full bg-[#3d2b1f]/50 rounded-lg" />

        {/* Requirements skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-40 mb-4 bg-gray-800" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-full bg-gray-800/50" />
            <Skeleton className="h-6 w-full bg-gray-800/50" />
            <Skeleton className="h-6 w-3/4 bg-gray-800/50" />
          </div>
        </div>

        {/* How to steps skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-40 mb-4 bg-gray-800" />
          <div className="space-y-6">
            <Skeleton className="h-12 w-full bg-gray-800/50" />
            <Skeleton className="h-12 w-full bg-gray-800/50" />
            <Skeleton className="h-12 w-full bg-gray-800/50" />
          </div>
        </div>

        {/* Backers skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-40 mb-4 bg-gray-800" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-14 w-full bg-gray-800/50 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

