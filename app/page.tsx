import Hero from '@/components/sections/Hero'
import Benefits from '@/components/sections/Benefits'
import Fleet from '@/components/sections/Fleet'
import Equipment from '@/components/sections/Equipment'
import Terms from '@/components/sections/Terms'
import Routes from '@/components/sections/Routes'
import Reviews from '@/components/sections/Reviews'
import FooterCta from '@/components/sections/FooterCta'

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Fleet />
      <Equipment />
      <Terms />
      <Routes />
      <Reviews />
      <FooterCta />
    </>
  )
}
