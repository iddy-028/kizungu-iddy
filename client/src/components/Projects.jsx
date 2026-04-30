import React from 'react'

const projects = [
  {
    id: 1,
    title: 'Project Title 1',
    description: 'A brief description of the project explaining the problem solved and the solution implemented.',
    techStack: ['React', 'Node.js', 'MySQL'],
    features: ['Real-time updates', 'User authentication', 'Dashboard'],
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Project Title 2',
    description: 'A brief description of the project explaining the problem solved and the solution implemented.',
    techStack: ['PHP', 'Laravel', 'MySQL'],
    features: ['API integration', 'Data visualization', 'Admin panel'],
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Project Title 3',
    description: 'A brief description of the project explaining the problem solved and the solution implemented.',
    techStack: ['JavaScript', 'Express', 'MongoDB'],
    features: ['File upload', 'Search functionality', 'Responsive design'],
    demo: '#',
    github: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">Project</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 mb-1">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <a href={project.demo} className="flex-1 text-center py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Live Demo
                  </a>
                  <a href={project.github} className="flex-1 text-center py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
