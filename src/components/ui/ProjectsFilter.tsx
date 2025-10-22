'use client';

interface ProjectsFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'All Projects', icon: '🚀' },
  { id: 'featured', label: 'Featured', icon: '⭐' },
  { id: 'web', label: 'Web Dev', icon: '🌐' },
  { id: 'iot', label: 'IoT', icon: '⚡' },
  { id: 'robotics', label: 'Robotics', icon: '🤖' },
  { id: 'cloud', label: 'Cloud', icon: '☁️' },
];

export default function ProjectsFilter({ activeFilter, onFilterChange }: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
            activeFilter === filter.id
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span>{filter.icon}</span>
          {filter.label}
        </button>
      ))}
    </div>
  );
}