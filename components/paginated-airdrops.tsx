"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import type { AirdropCollection } from "@/lib/types"
import AirdropTable from "./airdrop-table"
import PaginationComponent from "./ui/pagination"

interface PaginatedAirdropsProps {
  initialAirdrops: AirdropCollection[]
  initialPage: number
  initialTotalPages: number
  initialFilters: {
    search: string
    chain: string
    cost: string
    stage: string
  }
}

export default function PaginatedAirdrops({
  initialAirdrops,
  initialPage,
  initialTotalPages,
  initialFilters,
}: PaginatedAirdropsProps) {
  const [airdrops] = useState(initialAirdrops)
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [totalPages] = useState(initialTotalPages)

  const router = useRouter()
  const pathname = usePathname()

  const handlePageChange = (page: number) => {
    // Create a new URLSearchParams object
    const params = new URLSearchParams()

    // Add the page parameter
    params.set("page", page.toString())

    // Add any existing filters
    if (initialFilters.search) params.set("search", initialFilters.search)
    if (initialFilters.chain) params.set("chain", initialFilters.chain)
    if (initialFilters.cost) params.set("cost", initialFilters.cost)
    if (initialFilters.stage) params.set("stage", initialFilters.stage)

    // Update URL with new page number and existing filters
    router.push(`${pathname}?${params.toString()}`)
    setCurrentPage(page)
  }

  return (
    <div>
      <AirdropTable airdrops={airdrops} />
      {totalPages > 1 && (
        <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  )
}

