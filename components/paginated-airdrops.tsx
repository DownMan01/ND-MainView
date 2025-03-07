"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
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
  const [currentPage, setCurrentPage] = useState(initialPage)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const page = Number(searchParams.get("page")) || initialPage
    if (page !== currentPage) {
      setCurrentPage(page)
    }
  }, [searchParams, initialPage, currentPage])

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set("page", page.toString())

    // Update URL with new page number and preserve existing filters
    router.push(`${pathname}?${params.toString()}`)
    setCurrentPage(page)
  }

  return (
    <div>
      <AirdropTable airdrops={initialAirdrops} />
      {initialTotalPages > 1 && (
        <PaginationComponent currentPage={currentPage} totalPages={initialTotalPages} onPageChange={handlePageChange} />
      )}
    </div>
  )
}
