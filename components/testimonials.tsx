import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'We stopped boosting random posts and finally had a clear funnel. For the first time it actually felt like our ad spend had a plan behind it.',
    name: 'Linda T.',
    role: 'Owner, Nail Studio',
    initials: 'LT',
  },
  {
    quote:
      'The landing page made our gel manicure offer so much easier for clients to understand. People show up already knowing what they want.',
    name: 'Maya R.',
    role: 'Gel Nail Bar',
    initials: 'MR',
  },
  {
    quote:
      'We started getting more serious appointment requests instead of random price-check messages that go nowhere. The quality of leads changed completely.',
    name: 'Hannah P.',
    role: 'Nail & Beauty Clinic',
    initials: 'HP',
  },
  {
    quote:
      'The campaign helped us fill more weekday manicure and pedicure slots, which used to be our slowest time. That alone paid for itself.',
    name: 'Vivian L.',
    role: 'Manicure Lounge',
    initials: 'VL',
  },
]

const stats = [
  { value: '+50%', label: 'more booking inquiries in month one' },
  { value: '24/7', label: 'campaigns working while you treat clients' },
  { value: 'Done-for-you', label: 'creative, ads, page & lead form' },
]

export function Testimonials() {
  return (
    <section id="results" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Proof &amp; results
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Nail salon owners who switched to a real system
          </h2>
        </div>

        <div className="mt-10 grid gap-6 rounded-3xl border border-border bg-card p-6 sm:grid-cols-3 sm:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Illustrative examples. Results vary by salon, offer, location, and ad
          budget.
        </p>
      </div>
    </section>
  )
}
