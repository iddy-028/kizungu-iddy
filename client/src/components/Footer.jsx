import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]
  
  const socialMedia = [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Twitter', href: 'https://twitter.com' }
  ]

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KIZUNGU IDDY</h3>
            <p className="text-gray-400">
              Full-Stack Developer (Node.js, PHP, MySQL)
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <ul className="space-y-2">
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {currentYear} @IDDY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
