import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resources from './components/Resources'
import HowToContribute from './components/HowToContribute'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Resources />
      <HowToContribute />
      <Footer />
    </main>
  )
}
