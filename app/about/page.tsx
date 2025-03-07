import { PageHeader } from "@/components/ui/page-header"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

// Mock team members data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former blockchain developer with a passion for democratizing access to Web3 opportunities.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Experienced engineer specializing in blockchain infrastructure and data systems.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Alex Rodriguez",
    role: "Head of Research",
    bio: "Crypto analyst with 5+ years experience evaluating blockchain projects and tokenomics.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    name: "Emily Zhang",
    role: "Lead Designer",
    bio: "UI/UX specialist focused on creating intuitive experiences for Web3 applications.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="About NoteDrop"
          description="Our mission is to make Web3 opportunities accessible to everyone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                NoteDrop was founded in 2022 with a simple mission: to help people discover and track Web3 opportunities
                without getting lost in the noise.
              </p>
              <p>
                As blockchain enthusiasts ourselves, we noticed how difficult it was to keep track of promising airdrops
                and new projects. Information was scattered across Twitter, Discord, and various forums, making it hard
                for newcomers to find opportunities and easy to miss out.
              </p>
              <p>
                We built NoteDrop to solve this problem by creating a centralized database of verified airdrops with all
                the information you need to participate successfully.
              </p>
              <p>
                Today, NoteDrop is used by thousands of Web3 enthusiasts, from beginners to experienced users, who rely
                on our platform to discover new opportunities and stay informed about the latest developments in the
                space.
              </p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <Image src="/placeholder.svg?height=600&width=800" alt="NoteDrop Team" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe Web3 opportunities should be accessible to everyone, not just those with insider
                  connections.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We provide verified information and clear requirements so you can make informed decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community where knowledge is shared and everyone can learn together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
                  <div className="flex gap-2">
                    <Link
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter size={16} />
                    </Link>
                    <Link
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin size={16} />
                    </Link>
                    <Link
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals who are passionate about Web3 and want to make a difference.
          </p>
          <Link
            href="/careers"
            className="inline-block py-3 px-6 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </main>
  )
}

