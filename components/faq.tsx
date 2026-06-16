import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Do I need to already have ads running?',
    a: 'No. Whether you\u2019ve never run an ad or you\u2019ve been boosting posts for years, we build the full system from scratch — offer, creative, campaign, landing page, and lead form.',
  },
  {
    q: 'Is this only for spas?',
    a: 'It\u2019s built specifically for spa and skincare-style businesses: day spas, facial spas, skincare studios, medspas, massage spas, waxing studios, and wellness beauty studios.',
  },
  {
    q: 'Do you create the ad content?',
    a: 'Yes. We design your ad creatives — including video and carousel concepts, premium visuals, and the offers — so you don\u2019t have to produce content yourself.',
  },
  {
    q: 'Do I need a website?',
    a: 'No. We build a dedicated spa landing page for your campaign with a lead form, so you can start collecting consultation requests even without a full website.',
  },
  {
    q: 'Will this guarantee bookings?',
    a: 'No honest marketer can guarantee bookings. What we guarantee is a complete, professional system designed to convert — strong offers, targeted traffic, and a page built to turn clicks into leads.',
  },
  {
    q: 'How much ad budget do I need?',
    a: 'It depends on your location and goals. Many local spas start modestly and scale up once they see results. We\u2019ll recommend a realistic budget in your free growth plan.',
  },
  {
    q: 'What happens after I submit the form?',
    a: 'We review your business, services, location, and goals, then come back with a practical growth plan tailored to your spa — no pressure and no obligation.',
  },
  {
    q: 'Can this work for facials, massage, skincare, or body treatments?',
    a: 'Yes. The system is designed around exactly these services and can be tailored to facials, skincare, massage, body treatments, and seasonal or wellness packages.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Questions spa owners ask us
          </h2>
        </div>

        <Accordion className="mt-10 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base font-medium text-foreground">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
