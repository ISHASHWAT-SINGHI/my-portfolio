'use client';

import { Project } from '@/data/projects';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
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

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'web': return 'from-blue-500/20 to-blue-600/20';
      case 'iot': return 'from-green-500/20 to-green-600/20';
      case 'robotics': return 'from-purple-500/20 to-purple-600/20';
      case 'cloud': return 'from-orange-500/20 to-orange-600/20';
      default: return 'from-gray-500/20 to-gray-600/20';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      {/* Project Image with Themed Overlay */}
      <div className="h-48 relative overflow-hidden group">
        {/* Background Image using Next.js Image component */}
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Themed Color Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryGradient(project.category)}`}></div>
        
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-300"></div>
        
        {/* Category Icon */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
          <span className="text-2xl">{getCategoryIcon(project.category)}</span>
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            ⭐ Featured
          </div>
        )}
        
        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex justify-between items-start mb-3">
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
            {getCategoryIcon(project.category)} {project.category.toUpperCase()}
          </span>
        </div>

        {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition duration-300"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-2 px-4 rounded-lg text-sm font-medium transition duration-300"
            >
              Code
            </a>
          )}
          {(!project.liveUrl || project.liveUrl === '#') && (!project.githubUrl || project.githubUrl === '#') && (
            <button 
              onClick={() => onViewDetails(project)}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition duration-300"
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}