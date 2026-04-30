import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "I build scalable platforms with modern UI and real-time features."
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-6">
          <img 
            src="/profile.jpg" 
            alt="Kizungu Iddy - Full Stack Developer" 
            className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover border-4 border-blue-200 shadow-xl"
          />
        </div>
        
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Full-Stack Developer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-dark mb-6">
          KIZUNGU IDDY
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4">
          Full-Stack Developer (Node.js, PHP, MySQL, React)
        </p>
        
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={scrollToProjects} className="btn-primary">
            View Projects
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
