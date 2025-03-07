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
  const [loading, setLoading] = useState(false) // Loading state
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const page = Number(searchParams.get("page")) || initialPage

    if (page !== currentPage) {
      setLoading(true) // Start loading effect
      setTimeout(() => {
        setCurrentPage(page)
        setLoading(false) // Stop loading after 2 seconds
      }, 2000) // 2-second delay
    }
  }, [searchParams, initialPage, currentPage])

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())

    setLoading(true) // Show loading before navigating
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <svg className="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        </div>
      ) : (
        <>
          <AirdropTable airdrops={initialAirdrops} />
          {initialTotalPages > 1 && (
            <PaginationComponent currentPage={currentPage} totalPages={initialTotalPages} onPageChange={handlePageChange} />
          )}
        </>
      )}
    </div>
  )
}
