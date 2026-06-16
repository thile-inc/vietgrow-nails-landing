import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { GrowthSystem } from '@/components/growth-system'
import { PainPoints } from '@/components/pain-points'
import { Solution } from '@/components/solution'
import { PackageSection } from '@/components/package-section'
import { CampaignPreviews } from '@/components/campaign-previews'
import { Benefits } from '@/components/benefits'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { LeadForm } from '@/components/lead-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <GrowthSystem />
      <PainPoints />
      <Solution />
      <PackageSection />
      <CampaignPreviews />
      <Benefits />
      <Testimonials />
      <Faq />
      <FinalCta />
      <LeadForm />
      <SiteFooter />
    </main>
  )
}
