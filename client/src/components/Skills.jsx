import React from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Backend',
    skills: ['PHP', 'Node.js']
  },
  {
    title: 'Database',
    skills: ['MySQL']
  },
  {
    title: 'Other',
    skills: ['Authentication Systems', 'REST APIs', 'UI/UX Design']
  }
]

const Skills = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
