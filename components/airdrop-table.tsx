"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import type { AirdropCollection } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

interface AirdropTableProps {
  airdrops: AirdropCollection[]
}

export default function AirdropTable({ airdrops }: AirdropTableProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get filter values from URL
  const initialSearchTerm = searchParams.get("search") || ""
  const initialChainFilter = searchParams.get("chain") || ""
  const initialCostFilter = searchParams.get("cost") || ""
  const initialStageFilter = searchParams.get("stage") || ""

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [chainFilter, setChainFilter] = useState(initialChainFilter)
  const [costFilter, setCostFilter] = useState(initialCostFilter)
  const [stageFilter, setStageFilter] = useState(initialStageFilter)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(initialSearchTerm)

  // Get unique chains, costs, and stages for filters
  const chains = [...new Set(airdrops.map((airdrop) => airdrop.chain))]
  const stages = [...new Set(airdrops.map((airdrop) => airdrop.stage))]

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm])

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()

    if (debouncedSearchTerm) params.set("search", debouncedSearchTerm)
    if (chainFilter) params.set("chain", chainFilter)
    if (costFilter) params.set("cost", costFilter)
    if (stageFilter) params.set("stage", stageFilter)

    // Keep the current page if it exists
    const currentPage = searchParams.get("page")
    if (currentPage) params.set("page", currentPage)

    const queryString = params.toString()
    router.push(`${pathname}${queryString ? `?${queryString}` : ""}`)
  }, [debouncedSearchTerm, chainFilter, costFilter, stageFilter, router, pathname, searchParams])

  // Filter airdrops based on search term and filters
  const filteredAirdrops = airdrops.filter((airdrop) => {
    const matchesSearch =
      airdrop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airdrop.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesChain = chainFilter ? airdrop.chain === chainFilter : true
    const matchesCost = costFilter ? (costFilter === "FREE" ? airdrop.cost === 0 : airdrop.cost > 0) : true
    const matchesStage = stageFilter ? airdrop.stage === stageFilter : true

    return matchesSearch && matchesChain && matchesCost && matchesStage
  })

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-auto flex-grow">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <select
            className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            value={chainFilter}
            onChange={(e) => setChainFilter(e.target.value)}
          >
            <option value="">Chain (All)</option>
            {chains.map((chain) => (
              <option key={chain} value={chain}>
                {chain}
              </option>
            ))}
          </select>
          <select
            className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            value={costFilter}
            onChange={(e) => setCostFilter(e.target.value)}
          >
            <option value="">Cost (All)</option>
            <option value="FREE">FREE</option>
            <option value="PAID">PAID</option>
          </select>
          <select
            className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
          >
            <option value="">Stage (All)</option>
            {stages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent">
          <thead>
            <tr className="text-left text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
              <th className="px-4 py-3 font-medium">Project</th>
              <th className="px-4 py-3 font-medium">About</th>
              <th className="px-4 py-3 font-medium">Chain</th>
              <th className="px-4 py-3 font-medium">Cost</th>
              <th className="px-4 py-3 font-medium">Backers</th>
              <th className="px-4 py-3 font-medium">Stage</th>
            </tr>
          </thead>
          <tbody>
            {filteredAirdrops.map((airdrop) => (
              <tr
                key={airdrop.id}
                className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
              >
                <td className="px-4 py-4">
                  <Link href={`/${airdrop.id}`} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      {airdrop.image_url ? (
                        <Image
                          src={airdrop.image_url || "/placeholder.svg"}
                          alt={airdrop.name}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-xs font-bold">{airdrop.name.charAt(0)}</span>
                      )}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{airdrop.name}</span>
                  </Link>
                </td>
                <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{airdrop.subtitle}</td>
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      airdrop.chain === ""
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : airdrop.chain === ""
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : airdrop.chain === ""
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                            : airdrop.chain === ""
                              ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {airdrop.chain}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      airdrop.cost === 0
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                    }`}
                  >
                    {airdrop.cost === 0 ? "FREE" : `$${airdrop.cost}`}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-600 dark:text-gray-300">{airdrop.backers.join(", ")}</td>
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      airdrop.stage === "Mainnet"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : airdrop.stage === "Testnet"
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {airdrop.stage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredAirdrops.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 dark:text-gray-400">No airdrops found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}

