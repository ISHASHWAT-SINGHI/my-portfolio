'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import ProjectsFilter from '@/components/ui/ProjectsFilter';
import ContactForm from '@/components/ui/ContactForm';
import SocialLinks from '@/components/ui/SocialLinks';
import PageTransition from '@/components/ui/PageTransition';
import ProjectModal from '@/components/ui/ProjectModal';

// Add the ProjectsSection component function HERE (before the main Home function)
// Add the ProjectsSection component function HERE (before the main Home function)
function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {/* Projects Filter */}
      <ProjectsFilter 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
          <p className="text-gray-500">Try selecting a different filter to see more projects.</p>
        </div>
      )}

      {/* Projects Stats */}
      <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
            <div className="text-gray-600">Total Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {projects.filter(p => p.category === 'web').length}
            </div>
            <div className="text-gray-600">Web Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {projects.filter(p => p.category === 'iot' || p.category === 'robotics').length}
            </div>
            <div className="text-gray-600">Hardware Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {projects.filter(p => p.featured).length}
            </div>
            <div className="text-gray-600">Featured</div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}

export default function Home() {
  return (
    <div>
      {/* Home/Hero Section */}
      <PageTransition>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Content - Text */}
            <div className="flex-1 text-center lg:text-left">
              {/* Main Title */}
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  Shashwat Singh <span className="text-blue-600">Rathour</span>
                </h1>
                <div className="h-1 w-20 bg-blue-500 mx-auto lg:mx-0 mb-4"></div>
              </div>

              {/* Role-Adaptive Subtitle */}
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl text-gray-700 mb-2">
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Software Developer
                  </span>
                </h2>
                <p className="text-sm text-gray-500 italic">
                  Specializing in Web Development, IoT Solutions & Cloud Computing
                </p>
              </div>

              {/* Role-Specific Summary */}
              <div className="mb-8">
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  <span className="font-semibold text-blue-600">Web Developer :</span> Building responsive, 
                  user-friendly applications with modern frameworks and clean code.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  <span className="font-semibold text-green-600">IoT Specialist :</span> Creating innovative 
                  hardware-software solutions for real-world problems using embedded systems.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold text-purple-600">Technical Mentor:</span> Passionate about knowledge 
                  sharing, with experience leading workshops and mentoring 100+ students.
                </p>
              </div>

              {/* Role-Specific Skill Clusters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Web Development Skills */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                    <span>🌐</span> Web Development
                  </h3>
                  <div className="text-sm text-blue-600 space-y-1">
                    <div>JavaScript • HTML/CSS</div>
                    <div>Bootstrap • Responsive UI</div>
                    <div>Frontend Development</div>
                  </div>
                </div>

                {/* IoT & Cloud Skills */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h3 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                    <span>⚡</span> IoT & Cloud
                  </h3>
                  <div className="text-sm text-green-600 space-y-1">
                    <div>Python • Embedded Systems</div>
                    <div>IBM Cloud • Serverless</div>
                    <div>Robotics Integration</div>
                  </div>
                </div>

                {/* Leadership & Mentoring */}
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h3 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                    <span>👨‍🏫</span> Leadership
                  </h3>
                  <div className="text-sm text-purple-600 space-y-1">
                    <div>Technical Mentoring</div>
                    <div>Workshop Leadership</div>
                    <div>Project Coordination</div>
                  </div>
                </div>
              </div>

              {/* Universal Achievements */}
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4 mb-8 border border-blue-200">
                <h3 className="font-semibold text-gray-700 mb-3 text-center">Proven Track Record</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 text-lg">🏆</span>
                    <span>Gold Medalist - AKTU Tech Competitions 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 text-lg">👥</span>
                    <span>Led 10+ Workshops for 100+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-lg">🤖</span>
                    <span>Robotics Club Coordinator & IoT Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500 text-lg">☁️</span>
                    <span>IBM Cloud & Serverless Certified</span>
                  </div>
                </div>
              </div>

              {/* Role-Specific Call-to-Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                  View Web Projects
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
                  See IoT Work
                </button>
                <button className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 text-gray-700 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-sm">
                  Download Resume
                </button>
              </div>
            </div>

            {/* Right Content - Multi-Role Visual */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Central Developer Profile */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex flex-col items-center justify-center shadow-2xl text-white">
                  <div className="text-4xl mb-4">💻</div>
                  <p className="font-semibold text-xl text-center">
                    Software<br />Developer
                  </p>
                </div>

                {/* Role Orbit Indicators */}
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-3 shadow-lg border transform hover:scale-110 transition duration-300 cursor-pointer" title="Web Developer">
                  <span className="text-lg">🌐</span>
                </div>
                <div className="absolute -bottom-2 -left-2 bg-white rounded-full p-3 shadow-lg border transform hover:scale-110 transition duration-300 cursor-pointer" title="IoT Specialist">
                  <span className="text-lg">⚡</span>
                </div>
                <div className="absolute -top-2 -left-2 bg-white rounded-full p-3 shadow-lg border transform hover:scale-110 transition duration-300 cursor-pointer" title="Cloud Developer">
                  <span className="text-lg">☁️</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg border transform hover:scale-110 transition duration-300 cursor-pointer" title="Technical Mentor">
                  <span className="text-lg">👨‍🏫</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      </PageTransition>

      <PageTransition>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate technologist with expertise across software development, IoT innovation, 
              and technical education. Combining hands-on technical skills with proven leadership experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Column - Personal Story & Education */}
            <div className="space-y-8">

              {/* Professional Journey */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-500">🚀</span> My Journey
                </h3>
                <p className="text-gray-600 mb-4">
                  Started as a curious student fascinated by technology, evolved into a technical leader 
                  mentoring 100+ students while building innovative projects in web development and IoT.
                </p>
                <p className="text-gray-600">
                  My experience at <span className="font-semibold text-blue-600">GeeksforGeeks</span> as a 
                  Technical Lead has honed my ability to explain complex concepts and lead technical workshops, 
                  while my competition wins demonstrate strong problem-solving and innovation skills.
                </p>
              </div>

              {/* Education */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-green-500">🎓</span> Education
                </h3>

                <div className="space-y-6">
                  {/* Current Education */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Bachelor of Technology in Computer Science</h4>
                    <p className="text-gray-600">Shri Ramswaroop Memorial College Of Engineering And Management</p>
                    <p className="text-sm text-gray-500">2022 - Present</p>
                  </div>

                  {/* 12th Standard */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">12th Standard - 92.6%</h4>
                    <p className="text-gray-600">St. Anthony&apos;s Senior Secondary School, Barabanki</p>
                    <p className="text-sm text-gray-500">2019 - 2021</p>
                  </div>

                  {/* 10th Standard */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">10th Standard - 91.6%</h4>
                    <p className="text-gray-600">St. Anthony&apos;s Senior Secondary School, Barabanki</p>
                    <p className="text-sm text-gray-500">2017 - 2019</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Skills & Certifications */}
            <div className="space-y-8">

              {/* Technical Skills */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-orange-500">💻</span> Technical Skills
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Programming Languages */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Programming</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">Python</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">JavaScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600">SQL</span>
                      </div>
                    </div>
                  </div>

                  {/* Web Development */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Web Development</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">HTML/CSS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Bootstrap</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">Responsive Design</span>
                      </div>
                    </div>
                  </div>

                  {/* Cloud & IoT */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Cloud & IoT</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600">IBM Cloud</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600">Serverless Computing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-600">IoT Solutions</span>
                      </div>
                    </div>
                  </div>

                  {/* Tools & Platforms */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Tools & Platforms</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-600">Robotics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-600">Git & GitHub</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-600">Technical Workshops</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-blue-500">🏆</span> Certifications & Achievements
                </h3>

                <div className="space-y-4">
                  {/* Certifications */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Certifications</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-green-500">✓</span>
                        IBM Serverless Computing - IBM Cloud Essentials V3
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-green-500">✓</span>
                        IBM Cloud Essentials - Serverless Computing Using Cloud Functions
                      </div>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Key Achievements</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-yellow-500">🥇</span>
                        Gold Medal - Combat Robotics & Drone Race (AKTU Zonal 2024)
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-yellow-500">🥇</span>
                        Gold Medal - Combat Robotics (AKTU States 2024)
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-blue-500">👨‍🏫</span>
                        Led 10+ workshops mentoring 100+ students at GeeksforGeeks
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Personal Interests */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Beyond Code</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="text-3xl mb-2 block">🤖</span>
                <h4 className="font-semibold text-gray-900 mb-2">Robotics Innovation</h4>
                <p className="text-gray-600 text-sm">Building combat robots and exploring embedded systems</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="text-3xl mb-2 block">👨‍🏫</span>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Mentoring</h4>
                <p className="text-gray-600 text-sm">Passionate about teaching and knowledge sharing</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="text-3xl mb-2 block">🚀</span>
                <h4 className="font-semibold text-gray-900 mb-2">Tech Competitions</h4>
                <p className="text-gray-600 text-sm">Competing and innovating in technical challenges</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      </PageTransition>

      <PageTransition>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my technical work across web development, IoT, robotics, and cloud computing. 
              Each project represents real-world problem-solving and innovation.
            </p>
          </div>

          {/* Projects Component */}
          <ProjectsSection />

        </div>
      </section>
      </PageTransition>

      <PageTransition>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Have questions about my work? 
              I&apos;d love to hear from you. Let&apos;s build something amazing together!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <ContactForm />

            {/* Social Links & Info */}
            <SocialLinks />

          </div>

          {/* Additional Contact Info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Work With Me?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fast Learner</h4>
                  <p className="text-gray-600 text-sm">Quick to adapt to new technologies and frameworks</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Problem Solver</h4>
                  <p className="text-gray-600 text-sm">Proven track record in technical competitions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">👨‍🏫</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Team Player</h4>
                  <p className="text-gray-600 text-sm">Experience mentoring and collaborating with teams</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      </PageTransition>
    </div>
  );
}