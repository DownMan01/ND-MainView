import type { AirdropCollection } from "./types"

export const mockAirdropCollections: AirdropCollection[] = [
  {
    id: "1",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    name: "Grass Protocol",
    subtitle: "The Data Layer of AI",
    image_url: "/placeholder.svg?height=200&width=200",
    description:
      "Grass Protocol is a decentralized data layer for AI applications, enabling secure and private data sharing.",
    backers: ["Polychain", "Tribe Capital"],
    chain: "Solana",
    cost: 0,
    stage: "Mainnet",
    requirements: {
      Wallet: "Must have a Solana wallet",
      Activity: "Must have used Solana DeFi at least once",
    },
    how_to_steps: {
      "Connect Wallet": "Connect your Solana wallet",
      "Complete Tasks": "Complete the required tasks",
      "Claim Tokens": "Claim your GRASS tokens",
    },
    user_id: "user-1",
  },
  {
    id: "2",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    name: "Rabby Wallet",
    subtitle: "Crypto Wallet",
    image_url: "/placeholder.svg?height=200&width=200",
    description: "Rabby Wallet is a secure and user-friendly crypto wallet for Ethereum and EVM-compatible chains.",
    backers: ["n/a"],
    chain: "Ethereum/EVM",
    cost: 0,
    stage: "Mainnet",
    requirements: {
      Wallet: "Must have an Ethereum wallet",
      Activity: "Must have used Ethereum DeFi at least once",
    },
    how_to_steps: {
      "Install Wallet": "Install Rabby Wallet extension",
      "Complete Tasks": "Complete the required tasks",
      "Claim Tokens": "Claim your RABBY tokens",
    },
    user_id: "user-2",
  },
  {
    id: "3",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    name: "Rainbow Wallet",
    subtitle: "Crypto Wallet",
    image_url: "/placeholder.svg?height=200&width=200",
    description: "Rainbow Wallet is a fun, simple, and secure Ethereum wallet that makes managing your assets a joy.",
    backers: ["Seven Seven Six", "Polygon"],
    chain: "Ethereum/EVM",
    cost: 0,
    stage: "Mainnet",
    requirements: {
      Wallet: "Must have an Ethereum wallet",
      Activity: "Must have used Ethereum DeFi at least once",
    },
    how_to_steps: {
      "Install Wallet": "Install Rainbow Wallet app",
      "Complete Tasks": "Complete the required tasks",
      "Claim Tokens": "Claim your RAINBOW tokens",
    },
    user_id: "user-3",
  },
]

// Function to get mock paginated data
export function getMockPaginatedData(page = 1, pageSize = 10) {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedData = mockAirdropCollections.slice(startIndex, endIndex)

  return {
    data: paginatedData,
    count: mockAirdropCollections.length,
  }
}

// Function to get mock filtered data
export function getMockFilteredData(
  filters: {
    search?: string
    chain?: string
    cost?: number
    stage?: string
  },
  page = 1,
  pageSize = 10,
) {
  let filteredData = [...mockAirdropCollections]

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase()
    filteredData = filteredData.filter(
      (item) => item.name.toLowerCase().includes(searchTerm) || item.subtitle.toLowerCase().includes(searchTerm),
    )
  }

  if (filters.chain) {
    filteredData = filteredData.filter((item) => item.chain === filters.chain)
  }

  if (filters.cost !== undefined) {
    filteredData = filteredData.filter((item) => item.cost === filters.cost)
  }

  if (filters.stage) {
    filteredData = filteredData.filter((item) => item.stage === filters.stage)
  }

  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedData = filteredData.slice(startIndex, endIndex)

  return {
    data: paginatedData,
    count: filteredData.length,
  }
}

