export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  category: 'web' | 'iot' | 'robotics' | 'cloud';
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  
  {
    id: 1,
    title: "Drone Racing System",
    description: "Competition drone with optimized flight controls and navigation",
    detailedDescription: "Developed and customized a drone racing system with enhanced flight controls and navigation algorithms. Won gold medal at AKTU Zonal competition 2024, demonstrating expertise in aerial robotics and control systems.",
    technologies: ["Drone Technology", "Flight Control", "Navigation Algorithms", "Python"],
    category: "robotics",
    imageUrl: "/projects/drone_race.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Combat Robotics Platform",
    description: "Competition-winning robotic system with advanced controls",
    detailedDescription: "Designed and built a combat robot that won gold at AKTU competitions. Implemented custom control systems, power management, and durable mechanical design.",
    technologies: ["Embedded Systems", "Robotics", "Hardware Design"],
    category: "robotics",
    imageUrl: "/projects/combat.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Cloud-Based Data Analytics",
    description: "Serverless data processing using IBM Cloud functions",
    detailedDescription: "Implemented serverless architecture for data processing and analytics using IBM Cloud Functions. Focused on scalability and cost-efficiency.",
    technologies: ["IBM Cloud", "Serverless", "Python", "Data Processing"],
    category: "cloud",
    imageUrl: "/projects/Air-Quality-Monitoring-System-Using-Arduino-and-MQ135.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Drone Navigation System",
    description: "Autonomous flight control and obstacle avoidance",
    detailedDescription: "Developed navigation algorithms for autonomous drone flight with obstacle detection and avoidance capabilities for competition purposes.",
    technologies: ["Python", "Computer Vision", "Embedded Systems", "Algorithms"],
    category: "robotics",
    imageUrl: "/projects/mission_planner_spline_waypoint.jpg",
    featured: false
  }
];