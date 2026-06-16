import Image from 'next/image'
import { Heart, MessageCircle, Send, CalendarCheck, Play } from 'lucide-react'

const campaigns = [
  'New client facial offer',
  'Skincare consultation campaign',
  'Massage package promotion',
  'Body treatment special',
  'Weekday appointment fill',
  'Seasonal spa promotion',
  'Anti-aging facial campaign',
  'Acne treatment consultation',
  'Relaxation & wellness package',
]

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[2.2rem] border-[6px] border-foreground/90 bg-foreground/90 p-1 shadow-2xl">
      <div className="overflow-hidden rounded-[1.7rem] bg-card">{children}</div>
    </div>
  )
}

export function CampaignPreviews() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Campaign previews
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            See what your ad-to-booking journey looks like
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            From a scroll-stopping ad to a finished booking request — here&apos;s
            the experience we build for your clients.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-8 md:grid-cols-3">
          {/* Video ad preview */}
          <div className="flex flex-col items-center gap-4">
            <PhoneFrame>
              <div className="relative">
                <Image
                  src="/massage-spa.png"
                  alt="Video ad preview for a massage and wellness package"
                  width={260}
                  height={340}
                  className="h-[340px] w-full object-cover"
                  style={{ width: '100%', height: '340px' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/85 text-primary shadow-lg">
                    <Play className="h-6 w-6 fill-primary" aria-hidden="true" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                  <p className="text-sm font-semibold text-background">
                    Relax &amp; Renew Package
                  </p>
                  <p className="text-xs text-background/80">
                    60-min signature massage · Book this week
                  </p>
                </div>
              </div>
            </PhoneFrame>
            <p className="text-center text-sm font-medium text-foreground">
              Short-form video ad
            </p>
          </div>

          {/* Carousel / offer preview */}
          <div className="flex flex-col items-center gap-4 md:mt-8">
            <PhoneFrame>
              <div className="p-3">
                <Image
                  src="/skincare-flatlay.png"
                  alt="Carousel ad preview showing a new client facial offer"
                  width={240}
                  height={220}
                  className="h-[200px] w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-sm font-semibold text-foreground">
                  New Client Glow Facial
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Limited spots for first-time guests this month.
                </p>
                <div className="mt-3 flex items-center gap-4 text-muted-foreground">
                  <Heart className="h-4 w-4" aria-hidden="true" />
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <Send className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="mt-3 rounded-lg bg-primary py-2 text-center text-xs font-semibold text-primary-foreground">
                  Book my facial
                </div>
              </div>
            </PhoneFrame>
            <p className="text-center text-sm font-medium text-foreground">
              Carousel &amp; offer creative
            </p>
          </div>

          {/* Lead form preview */}
          <div className="flex flex-col items-center gap-4">
            <PhoneFrame>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">
                  Request your consultation
                </p>
                <div className="mt-3 space-y-2">
                  {['Full name', 'Phone number', 'Treatment of interest'].map(
                    (label) => (
                      <div
                        key={label}
                        className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-xs text-muted-foreground"
                      >
                        {label}
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-3 rounded-lg bg-primary py-2 text-center text-xs font-semibold text-primary-foreground">
                  Request booking
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-primary/5 p-2.5">
                  <CalendarCheck
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] font-medium text-foreground">
                    Lead captured &amp; sent to your inbox
                  </p>
                </div>
              </div>
            </PhoneFrame>
            <p className="text-center text-sm font-medium text-foreground">
              Spa landing page &amp; lead form
            </p>
          </div>
        </div>

        {/* Campaign examples */}
        <div className="mt-14">
          <p className="text-center text-sm font-medium text-muted-foreground">
            Campaign concepts we build for spas:
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {campaigns.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
