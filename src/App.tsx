import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Quote from './components/Quote'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main className="mx-auto max-w-[1100px] px-6 md:px-8">
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
