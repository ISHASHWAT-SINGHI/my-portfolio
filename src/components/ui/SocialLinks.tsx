export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shashwat-singh-a36666262/',
      icon: '💼',
      description: 'Professional profile and experience',
      type: 'external'
    },
    {
      name: 'Email',
      url: 'mailto:ssrathour45@gmail.com',
      icon: '📧',
      description: 'ssrathour45@gmail.com',
      type: 'email'
    },
    {
      name: 'Phone',
      url: 'tel:+919415176555',
      icon: '📱',
      description: '+91 9415176555',
      type: 'phone'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ISHASHWAT-SINGHI', // Your GitHub username
      icon: '💻',
      description: 'Code repositories and projects',
      type: 'external'
    },
    {
      name: 'Location',
      url: 'https://maps.google.com/?q=Barabanki,Uttar+Pradesh,India',
      icon: '📍',
      description: 'Barabanki, India',
      type: 'external'
    },
    {
      name: 'Resume',
      url: '#', // We'll add this later when you have the file
      icon: '📄',
      description: 'Download my resume',
      type: 'disabled'
    }
  ];

  const getLinkProps = (link: typeof socialLinks[0]) => {
    switch (link.type) {
      case 'external':
        return {
          target: '_blank',
          rel: 'noopener noreferrer nofollow'
        };
      case 'email':
      case 'phone':
        return {};
      case 'disabled':
        return {
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            alert('Resume will be available soon!');
          }
        };
      default:
        return {};
    }
  };

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
            {...getLinkProps(link)}
            className={`flex items-center gap-4 p-4 rounded-lg border transition duration-300 group ${
              link.type === 'disabled' 
                ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed' 
                : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
            }`}
          >
            <div className={`text-2xl transition duration-300 ${
              link.type === 'disabled' ? '' : 'group-hover:scale-110'
            }`}>
              {link.icon}
            </div>
            <div>
              <h4 className={`font-semibold transition duration-300 ${
                link.type === 'disabled' ? 'text-gray-400' : 'text-gray-900 group-hover:text-blue-600'
              }`}>
                {link.name}
              </h4>
              <p className={`text-sm ${
                link.type === 'disabled' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {link.description}
              </p>
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