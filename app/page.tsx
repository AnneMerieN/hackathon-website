import SiteHeader from '@/components/SiteHeader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Events from '@/components/Events'
import About from '@/components/About'
import GetInvolved from '@/components/GetInvolved'
import Sponsors from '@/components/Sponsors'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Navbar />
      <ScrollReveal />
      <main>
        <Hero />
        <Events />
        <About />
        <GetInvolved />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
