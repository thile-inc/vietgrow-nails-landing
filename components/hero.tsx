import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Star, Phone, CalendarCheck, ShieldCheck } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:pb-24 lg:pt-20">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            For nail salons, manicure bars, beauty studios &amp; mobile nail artists
          </div>

          <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Get More Local Nail Clients With Ads That Actually Convert
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Vietgrow builds your complete paid-ad growth system — service
            offers, scroll-stopping nail creatives, targeted local campaigns,
            and a polished landing page with a lead form designed to turn clicks
            into real manicure, pedicure, and nail art booking requests.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="rounded-full px-7 text-base">
              <a href="#lead-form">Get Free Nail Salon Growth Plan</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 text-base"
            >
              <a href="#system">See how it works</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span>Trusted by local nail &amp; beauty owners</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>No long-term lock-in</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <Image
              src="/nail-salon-hero.png"
              alt="A polished nail salon station with manicure tools and fresh nail colors"
              width={720}
              height={820}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Floating lead notification */}
          <div className="absolute -left-3 top-8 w-56 rounded-2xl border border-border bg-card p-3.5 shadow-lg sm:-left-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CalendarCheck className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  New consultation request
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Gel manicure · 2 min ago
                </p>
              </div>
            </div>
          </div>

          {/* Floating call card */}
          <div className="absolute -right-3 bottom-8 w-52 rounded-2xl border border-border bg-card p-3.5 shadow-lg sm:-right-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/30 text-accent-foreground">
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  +12 leads this week
                </p>
                <p className="text-[11px] text-muted-foreground">
                  from your local ad campaign
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
