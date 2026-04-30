import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me better
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-4xl font-bold shrink-0">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-dark mb-4">
                  Full-Stack Developer
                </h3>
                <p className="text-gray-600 mb-4">
                  I'm  student in St Peter College of shyogwe in secondary school i study SOFTWARE DEVELOPMENT(SOD) I'am developed awebsite / web application so i'am full-stack developer .
                </p>
                <p className="text-gray-600">
                 I'am studying experiense in programming like react,node.js ,database, mongo db and so many flame work and languages .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
