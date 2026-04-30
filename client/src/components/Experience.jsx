import React from 'react'

const experiences = [
  {
    year: '2025-2026',
    title: 'L5SOD',
    description: 'develop my first website using react and node.js'
  },
  {
    year: '2024-2025',
    title: 'L4 SOD',
    description: 'next year after starting secondary school L4 SOD'
  },
  {
    year: '2023-2024',
    title: 'L3SOD',
    description: 'started in study software development L3'
  }
]

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My journey in web development
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>
                <div className="flex-1 bg-white rounded-lg p-6 ml-4 md:ml-0 md:mr-4 shadow-lg">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-2">
                    {exp.year}
                  </span>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
