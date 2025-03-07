import { PageHeader } from "@/components/ui/page-header"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag } from "lucide-react"

// Mock blog posts data
const blogPosts = [
  {
    id: "1",
    title: "The Future of Airdrops in Web3",
    excerpt: "Exploring how airdrops are evolving and what to expect in the coming years.",
    coverImage: "/placeholder.svg?height=400&width=800",
    date: "May 15, 2023",
    author: "Alex Johnson",
    category: "Trends",
    tags: ["Airdrops", "Web3", "Future"],
  },
  {
    id: "2",
    title: "How to Maximize Your Airdrop Rewards",
    excerpt: "Strategies and tips for getting the most out of blockchain airdrops.",
    coverImage: "/placeholder.svg?height=400&width=800",
    date: "April 28, 2023",
    author: "Samantha Lee",
    category: "Guides",
    tags: ["Strategy", "Rewards", "Tips"],
  },
  {
    id: "3",
    title: "Top 10 Airdrops to Watch in 2023",
    excerpt: "Our curated list of the most promising airdrops coming this year.",
    coverImage: "/placeholder.svg?height=400&width=800",
    date: "April 10, 2023",
    author: "Michael Chen",
    category: "Lists",
    tags: ["Top10", "Recommendations", "2023"],
  },
  {
    id: "4",
    title: "Understanding Tokenomics: A Beginner's Guide",
    excerpt: "Learn the basics of tokenomics and why it matters for airdrop evaluation.",
    coverImage: "/placeholder.svg?height=400&width=800",
    date: "March 22, 2023",
    author: "Emma Wilson",
    category: "Education",
    tags: ["Tokenomics", "Beginners", "Education"],
  },
  {
    id: "5",
    title: "The Rise of Layer 2 Airdrops",
    excerpt: "How Layer 2 solutions are changing the airdrop landscape.",
    coverImage: "/placeholder.svg?height=400&width=800",
    date: "March 5, 2023",
    author: "David Park",
    category: "Technology",
    tags: ["Layer2", "Scaling", "Technology"],
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Blog"
          description="Insights, guides, and news about Web3 airdrops and blockchain projects."
        />

        {/* Featured Post */}
        <div className="mb-16">
          <div className="rounded-xl overflow-hidden mb-6 aspect-[2/1] relative">
            <Image
              src={featuredPost.coverImage || "/placeholder.svg"}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{featuredPost.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{featuredPost.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag size={14} />
              <span>{featuredPost.category}</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            <Link href={`/blog/${featuredPost.id}`} className="hover:text-primary transition-colors">
              {featuredPost.title}
            </Link>
          </h2>

          <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>

          <Link href={`/blog/${featuredPost.id}`} className="text-primary hover:underline">
            Read more →
          </Link>
        </div>

        {/* Recent Posts */}
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex flex-col h-full">
              <div className="rounded-xl overflow-hidden mb-4 aspect-[3/2] relative">
                <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>

              <div className="flex items-center gap-3 mb-2 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>

              <Link href={`/blog/${post.id}`} className="text-primary hover:underline text-sm mt-auto">
                Read more →
              </Link>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-16 p-6 bg-card rounded-xl border border-border">
          <h2 className="text-xl font-bold text-foreground mb-4">Categories</h2>

          <div className="flex flex-wrap gap-2">
            {["All", "Trends", "Guides", "Lists", "Education", "Technology", "News", "Interviews"].map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase()}`}
                className={`px-4 py-2 rounded-lg text-sm ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                } transition-colors`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

