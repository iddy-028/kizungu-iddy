import React from 'react'

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications using the latest technologies.'
  },
  {
    icon: '📊',
    title: 'Dashboard Systems',
    description: 'Creating interactive dashboards with real-time data visualization and analytics.'
  },
  {
    icon: '🗄️',
    title: 'Database Design',
    description: 'Designing and optimizing database structures for scalability and performance.'
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Creating intuitive user interfaces with focus on user experience and accessibility.'
  }
]

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          What I can do for you
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
