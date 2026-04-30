import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Services />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
