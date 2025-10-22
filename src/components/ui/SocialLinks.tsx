export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shashwat-singh-a366662',
      icon: '💼',
      description: 'Professional profile and experience'
    },
    {
      name: 'Email',
      url: 'mailto:ssrathour45@gmail.com',
      icon: '📧',
      description: 'ssrathour45@gmail.com'
    },
    {
      name: 'Phone',
      url: 'tel:+919415176555',
      icon: '📱',
      description: '+91 9415176555'
    },
    {
      name: 'GitHub',
      url: '#', // Add your GitHub URL when available
      icon: '💻',
      description: 'Code repositories and projects'
    },
    {
      name: 'Resume',
      url: '#', // Add your resume URL when available
      icon: '📄',
      description: 'Download my resume'
    },
    {
      name: 'Location',
      url: '#',
      icon: '📍',
      description: 'Barabanki, India'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200 p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let&apos;s Connect</h3>
      <p className="text-gray-600 mb-8">
        I&apos;m always open to discussing new opportunities, technical collaborations, 
        or just having a chat about technology and innovation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : '_self'}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
            className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition duration-300 group"
          >
            <div className="text-2xl group-hover:scale-110 transition duration-300">
              {link.icon}
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition duration-300">
                {link.name}
              </h4>
              <p className="text-sm text-gray-600">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
      
      {/* Quick Response Info */}
      <div className="mt-8 p-4 bg-blue-100 rounded-lg border border-blue-200">
        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-xl">⚡</span>
          <div>
            <h4 className="font-semibold text-blue-800">Quick Response</h4>
            <p className="text-sm text-blue-700">I typically respond within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}