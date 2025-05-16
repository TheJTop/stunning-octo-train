"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Twitter, Instagram, Github } from "lucide-react"
import Link from "next/link"
import { WaitlistDialog } from "@/components/waitlist-dialog"

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-dot-pattern">
      <header className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Sol Trader</span>
        </Link>
        <Button size="sm" onClick={() => setIsDialogOpen(true)}>
          Join Waitlist
        </Button>
      </header>
      <main className="flex-1">
        {/* Dot pattern background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>

        {/* Purple to Yellow gradient background */}
        <div className="fixed -z-5 top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Purple to Yellow gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-fuchsia-500/10 to-yellow-400/15 blur-[100px]"></div>
        </div>

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Automated Solana Trading
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Instantly buy tokens when they're mentioned by influential accounts. Get the first-mover advantage.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1.5" onClick={() => setIsDialogOpen(true)}>
                Join Waitlist <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Automated Sniping</h2>
                <p className="text-muted-foreground">
                  Our AI monitors selected Twitter accounts and automatically buys tokens the moment they're mentioned.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Instant Analysis</h2>
                <p className="text-muted-foreground">
                  Get detailed reports on your purchases, including AI-generated summaries of each token.
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">First-Mover Advantage</h2>
                <p className="text-muted-foreground">
                  Be among the first to buy promising tokens before they gain widespread attention.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[600px] w-[300px] overflow-hidden rounded-[40px] border-4 border-foreground bg-background p-2 shadow-xl">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Sol Trader</div>
                      <div className="text-sm">9:41</div>
                    </div>
                    <div className="rounded-lg bg-card p-4 shadow-sm">
                      <div className="mb-2 text-sm font-semibold">New Trade Alert</div>
                      <div className="mb-2 text-xs text-muted-foreground">
                        Purchased $SOL token mentioned by @influencer
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Amount: 2.5 SOL</span>
                        <span className="text-green-500">+12%</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-card p-4 shadow-sm">
                      <div className="mb-2 text-sm font-semibold">AI Analysis</div>
                      <div className="text-xs text-muted-foreground">
                        This new DeFi token shows promising early metrics with strong community support.
                      </div>
                    </div>
                    <div className="rounded-lg bg-card p-4 shadow-sm">
                      <div className="mb-2 text-sm font-semibold">Account Monitoring</div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                        <span>@crypto_whale</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <div className="h-6 w-6 rounded-full bg-purple-500"></div>
                        <span>@token_finder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-24 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Join the Waitlist</h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Be the first to access Sol Trader when we launch.
            </p>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                <Button type="button" onClick={() => setIsDialogOpen(true)}>
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Sol Trader. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </footer>

      <WaitlistDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}
