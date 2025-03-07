import { PageHeader } from "@/components/ui/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Code, BookOpen, Terminal } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <PageHeader title="Documentation" description="Learn how to use NoteDrop and integrate with our API." />

        <Tabs defaultValue="getting-started" className="mb-12">
          <TabsList className="mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="api-reference">API Reference</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="sdk">SDK</TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen size={18} className="text-primary" />
                    Introduction
                  </CardTitle>
                  <CardDescription>Learn the basics of NoteDrop</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    NoteDrop is a comprehensive database for Web3 airdrops. This guide will help you understand how to
                    use our platform effectively.
                  </p>
                  <Link href="/docs/introduction" className="text-primary hover:underline">
                    Read more →
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText size={18} className="text-primary" />
                    Quick Start
                  </CardTitle>
                  <CardDescription>Get up and running in minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Follow our step-by-step guide to quickly set up your account and start tracking airdrops that matter
                    to you.
                  </p>
                  <Link href="/docs/quick-start" className="text-primary hover:underline">
                    Read more →
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal size={18} className="text-primary" />
                    CLI Tool
                  </CardTitle>
                  <CardDescription>Command-line interface for NoteDrop</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our CLI tool allows you to interact with NoteDrop directly from your terminal, perfect for
                    developers.
                  </p>
                  <Link href="/docs/cli" className="text-primary hover:underline">
                    Read more →
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code size={18} className="text-primary" />
                    Integration
                  </CardTitle>
                  <CardDescription>Integrate NoteDrop into your applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn how to integrate NoteDrop's data and functionality into your own applications and services.
                  </p>
                  <Link href="/docs/integration" className="text-primary hover:underline">
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="api-reference">
            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>Complete reference documentation for the NoteDrop API</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b border-border pb-4">
                    <h3 className="text-lg font-medium text-foreground mb-2">Authentication</h3>
                    <p className="text-muted-foreground">Learn how to authenticate with the NoteDrop API</p>
                    <pre className="mt-4 p-4 bg-secondary rounded-lg overflow-x-auto">
                      <code className="text-sm text-muted-foreground">
                        {`curl -X POST https://api.notedrop.xyz/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{"apiKey": "your-api-key"}'`}
                      </code>
                    </pre>
                  </div>

                  <div className="border-b border-border pb-4">
                    <h3 className="text-lg font-medium text-foreground mb-2">Endpoints</h3>
                    <p className="text-muted-foreground">Overview of available API endpoints</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex justify-between">
                        <span className="text-primary font-mono">/api/airdrops</span>
                        <span className="text-muted-foreground">Get all airdrops</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-primary font-mono">/api/airdrops/{"{id}"}</span>
                        <span className="text-muted-foreground">Get airdrop by ID</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-primary font-mono">/api/chains</span>
                        <span className="text-muted-foreground">Get all chains</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Rate Limits</h3>
                    <p className="text-muted-foreground">Information about API rate limits</p>
                    <div className="mt-4 p-4 bg-secondary rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Free tier: 100 requests/hour
                        <br />
                        Pro tier: 1,000 requests/hour
                        <br />
                        Enterprise tier: Custom limits
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples">
            <Card>
              <CardHeader>
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>Example code snippets for common use cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">JavaScript</h3>
                    <pre className="p-4 bg-secondary rounded-lg overflow-x-auto">
                      <code className="text-sm text-muted-foreground">
                        {`// Fetch all airdrops
async function getAirdrops() {
  const response = await fetch('https://api.notedrop.xyz/airdrops', {
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN'
    }
  });
  
  const data = await response.json();
  return data;
}`}
                      </code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Python</h3>
                    <pre className="p-4 bg-secondary rounded-lg overflow-x-auto">
                      <code className="text-sm text-muted-foreground">
                        {`import requests

def get_airdrops():
    headers = {
        'Authorization': 'Bearer YOUR_API_TOKEN'
    }
    
    response = requests.get('https://api.notedrop.xyz/airdrops', headers=headers)
    return response.json()`}
                      </code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sdk">
            <Card>
              <CardHeader>
                <CardTitle>NoteDrop SDK</CardTitle>
                <CardDescription>Official SDK for integrating with NoteDrop</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Installation</h3>
                    <pre className="p-4 bg-secondary rounded-lg overflow-x-auto">
                      <code className="text-sm text-muted-foreground">npm install @notedrop/sdk</code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">Usage</h3>
                    <pre className="p-4 bg-secondary rounded-lg overflow-x-auto">
                      <code className="text-sm text-muted-foreground">
                        {`import { NoteDrop } from '@notedrop/sdk';

const client = new NoteDrop({
  apiKey: 'YOUR_API_KEY'
});

// Get all airdrops
const airdrops = await client.airdrops.list();

// Get a specific airdrop
const airdrop = await client.airdrops.get('airdrop-id');`}
                      </code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

