import { X } from 'lucide-react'

const pains = [
  'Running ads but getting low-quality leads',
  'People ask about prices or availability but never book',
  'Potential clients message you, then disappear',
  'Empty chairs during weekdays',
  'Hard to stand out from nearby salons and nail techs',
  'Wasting money on boosted posts with no funnel',
  'No real landing page or booking flow after the click',
  'Depending too much on referrals and walk-ins',
]

export function PainPoints() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sound familiar?
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Most nail salons don&apos;t have a traffic problem. They have a
            conversion problem.
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            You&apos;re posting and spending — but attention isn&apos;t turning
            into booked appointments. These are the gaps we fix.
          </p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {pains.map((pain) => (
            <div
              key={pain}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-foreground">{pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
