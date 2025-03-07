import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock job listings
const jobListings = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for an experienced frontend developer to help build and improve our web application.",
    requirements: [
      "5+ years of experience with React and TypeScript",
      "Experience with Next.js and modern frontend tooling",
      "Strong understanding of web performance optimization",
      "Experience with responsive design and accessibility",
    ],
  },
  {
    id: "2",
    title: "Blockchain Data Analyst",
    department: "Research",
    location: "Remote",
    type: "Full-time",
    description: "Join our research team to analyze blockchain data and identify promising airdrop opportunities.",
    requirements: [
      "3+ years of experience in data analysis",
      "Strong understanding of blockchain technology and tokenomics",
      "Experience with data visualization tools",
      "Ability to communicate complex findings clearly",
    ],
  },
  {
    id: "3",
    title: "Content Writer",
    department: "Marketing",
    location: "Remote",
    type: "Part-time",
    description:
      "Create engaging content about Web3, airdrops, and blockchain technology for our blog and social media.",
    requirements: [
      "Proven experience writing about blockchain and cryptocurrency",
      "Strong research skills and attention to detail",
      "Ability to explain complex topics in simple terms",
      "Understanding of SEO best practices",
    ],
  },
  {
    id: "4",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Lead the development of new features and improvements to our airdrop tracking platform.",
    requirements: [
      "3+ years of experience in product management",
      "Experience with Web3 products or services",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
    ],
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Careers" description="Join our team and help shape the future of Web3 discovery." />

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Work With Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Flexible Work</h3>
                <p className="text-muted-foreground">
                  We're a fully remote team with flexible hours. Work from anywhere in the world on your own schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">
                  We're growing rapidly, which means plenty of opportunities to take on new challenges and advance your
                  career.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Competitive Compensation</h3>
                <p className="text-muted-foreground">
                  We offer competitive salaries, equity options, and a comprehensive benefits package.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Open Positions</h2>

          <div className="space-y-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <p className="text-primary">{job.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock size={14} />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>

                  <h4 className="font-medium text-foreground mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-muted-foreground mb-4">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>

                  <Link href={`/careers/${job.id}`} className="inline-flex items-center text-primary hover:underline">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Don't See a Position That Fits?</h2>
            <p className="text-muted-foreground mb-6">
              We're always on the lookout for talented individuals who are passionate about Web3. Send us your resume
              and tell us how you can contribute to our mission.
            </p>
            <Link
              href="/contact"
              className="inline-block py-3 px-6 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

