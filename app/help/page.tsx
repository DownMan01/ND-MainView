import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Help Center" description="Find answers to your questions about NoteDrop.">
          <div className="mt-6 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
            </div>
          </div>
        </PageHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>What is NoteDrop?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    NoteDrop is a comprehensive database for Web3 airdrops. We track and provide information about the
                    latest blockchain projects, airdrops, and protocols to help you discover new opportunities in the
                    Web3 space.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How do I track an airdrop?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To track an airdrop, simply create an account and add the airdrop to your watchlist. You'll receive
                    notifications when there are updates or when the airdrop is about to launch.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Is NoteDrop free to use?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, NoteDrop offers a free tier that allows you to browse and track airdrops. We also offer premium
                    plans with additional features such as early access to new airdrops, detailed analytics, and API
                    access.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How do I submit a new airdrop?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You can submit a new airdrop by clicking on the "Submit Airdrop" button in your dashboard. Fill out
                    the required information and our team will review your submission within 24-48 hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How accurate is the information on NoteDrop?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We strive to provide the most accurate and up-to-date information about airdrops. Our team verifies
                    all submissions and regularly updates the database. However, we recommend always doing your own
                    research before participating in any airdrop.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-foreground mb-6">Help Categories</h2>

            <div className="space-y-4">
              <Link href="/help/getting-started" className="block">
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground">Getting Started</h3>
                    <p className="text-sm text-muted-foreground">New to NoteDrop? Start here</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/help/account" className="block">
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground">Account Management</h3>
                    <p className="text-sm text-muted-foreground">Manage your NoteDrop account</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/help/airdrops" className="block">
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground">Airdrops</h3>
                    <p className="text-sm text-muted-foreground">Learn about tracking airdrops</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/help/api" className="block">
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground">API & Developers</h3>
                    <p className="text-sm text-muted-foreground">Using the NoteDrop API</p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/help/billing" className="block">
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground">Billing & Subscriptions</h3>
                    <p className="text-sm text-muted-foreground">Manage your subscription</p>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg border border-border">
              <h3 className="font-medium text-foreground mb-2">Need more help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Can't find what you're looking for? Contact our support team.
              </p>
              <Link
                href="/contact"
                className="block w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg text-center hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

