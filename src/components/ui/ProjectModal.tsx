'use client';

import { Project } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return 'bg-blue-100 text-blue-800';
      case 'iot': return 'bg-green-100 text-green-800';
      case 'robotics': return 'bg-purple-100 text-purple-800';
      case 'cloud': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return '🌐';
      case 'iot': return '⚡';
      case 'robotics': return '🤖';
      case 'cloud': return '☁️';
      default: return '🚀';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <span className="text-6xl">{getCategoryIcon(project.category)}</span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                
                <button
                  onClick={onClose}
                  className="absolute top-4 left-4 bg-white text-gray-600 hover:text-gray-800 rounded-full p-2 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)} {project.category.toUpperCase()}
                  </span>
                </div>

                {/* Title & Description */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{project.description}</p>

                {/* Detailed Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Project Details</h3>
                  <p className="text-gray-600 leading-relaxed">{project.detailedDescription}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg font-medium transition duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-3 px-6 rounded-lg font-medium transition duration-300"
                    >
                      View Code
                    </a>
                  )}
                  {(!project.liveUrl || project.liveUrl === '#') && (!project.githubUrl || project.githubUrl === '#') && (
                    <button 
                      onClick={onClose}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-3 px-6 rounded-lg font-medium transition duration-300"
                    >
                      Close
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}