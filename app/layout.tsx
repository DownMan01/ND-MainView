import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/context/theme-context"
import ThemeToggle from "@/components/ui/theme-toggle"
import { Github, Twitter } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NoteDrop - Web3 Airdrop Database",
  description: "Discover and track the latest blockchain projects, airdrops, and protocols.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <header className="border-b border-border py-4 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 p-2 flex items-center justify-center">
                  <div className="w-full h-full rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                </div>
                <span className="font-bold text-lg text-foreground">NoteDrop</span>
              </Link>

              <ThemeToggle />
            </div>
          </header>

          {children}

          <footer className="border-t border-border py-12 px-4 md:px-8 mt-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="col-span-1">
                  <Link href="/" className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 p-2 flex items-center justify-center">
                      <div className="w-full h-full rounded-lg bg-primary flex items-center justify-center">
                        <span className="text-white font-bold">N</span>
                      </div>
                    </div>
                    <span className="font-bold text-lg text-foreground">NoteDrop</span>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4">
                    Your gateway to Web3 opportunities. Track and discover the latest blockchain airdrops.
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="https://twitter.com/notedrop"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Follow us on Twitter"
                    >
                      <Twitter size={20} />
                    </Link>
                    <Link
                      href="https://github.com/notedrop"
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View our GitHub"
                    >
                      <Github size={20} />
                    </Link>
                  </div>
                </div>

                <div className="col-span-1">
                  <h3 className="font-semibold text-foreground mb-4">Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-1">
                  <h3 className="font-semibold text-foreground mb-4">Company</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-span-1">
                  <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                        Cookie Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 border-t border-border text-center">
                <p className="text-muted-foreground text-sm">
                  © {new Date().getFullYear()} NoteDrop. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'