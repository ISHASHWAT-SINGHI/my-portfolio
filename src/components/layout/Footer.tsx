export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 dark:bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Professional Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shashwat Singh Rathour</h3>
            <p className="text-slate-300 dark:text-gray-400 text-sm">
              Full-Stack Developer & Technical Instructor specializing in web technologies, 
              cloud computing, and innovative software solutions.
            </p>
          </div>
          
          {/* Contact Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="https://www.linkedin.com/in/shashwat-singh-a366662" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 dark:text-gray-400 hover:text-white transition duration-300"
              >
                <span>💼</span> LinkedIn
              </a>
              <a 
                href="mailto:ssrathour45@gmail.com" 
                className="flex items-center gap-2 text-slate-300 dark:text-gray-400 hover:text-white transition duration-300"
              >
                <span>📧</span> ssrathour45@gmail.com
              </a>
              <a 
                href="tel:+919415176555" 
                className="flex items-center gap-2 text-slate-300 dark:text-gray-400 hover:text-white transition duration-300"
              >
                <span>📱</span> +91 9415176555
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <div className="space-y-2">
              <a href="#projects" className="block text-slate-300 dark:text-gray-400 hover:text-white transition duration-300">Projects</a>
              <a href="#about" className="block text-slate-300 dark:text-gray-400 hover:text-white transition duration-300">About Me</a>
              <a href="#contact" className="block text-slate-300 dark:text-gray-400 hover:text-white transition duration-300">Contact</a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-700 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 dark:text-gray-500 text-sm">
            © {currentYear} Shashwat Singh Rathour. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}