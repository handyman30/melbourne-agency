import HeroSection from '@/components/HeroSection'
import LinkInBioShowcase from '@/components/LinkInBioShowcase'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <HeroSection />
      <LinkInBioShowcase />
      <Services />
      <CaseStudies />
      <Pricing />
      <Testimonials />
    </>
  )
} 