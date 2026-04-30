import React from 'react'

const achievements = [
  {
    number: '2',
    label: 'my project'
  },
  {
    number: 'L3,L4,L5',
    label: 'SOFTWARE DEVELOPMENT'
  },
  {
    number: '3',
    label: '3 YEAR '
  }
]

const Achievements = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 to-green-500">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-white">Achievements</h2>
        <p className="section-subtitle text-white/80">
        Experience my studying
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {achievement.number}
              </div>
              <div className="text-xl text-white/80">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
