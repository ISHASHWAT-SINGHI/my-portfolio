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
    title: "IoT Smart Home System",
    description: "Automated home monitoring with sensor integration",
    detailedDescription: "Built a comprehensive IoT system using sensors for temperature, motion, and security. Features real-time monitoring and cloud integration for remote access and control.",
    technologies: ["Python", "IoT", "Sensor Networks", "Cloud Integration"],
    category: "iot",
    imageUrl: "/api/placeholder/400/250",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Combat Robotics Platform",
    description: "Competition-winning robotic system with advanced controls",
    detailedDescription: "Designed and built a combat robot that won gold at AKTU competitions. Implemented custom control systems, power management, and durable mechanical design.",
    technologies: ["Embedded Systems", "Robotics", "Hardware Design", "C++"],
    category: "robotics",
    imageUrl: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 3,
    title: "Workshop Management Portal",
    description: "Platform for managing technical workshops and student registrations",
    detailedDescription: "Developed a web portal to streamline workshop organization, student registration, and resource distribution for GeeksforGeeks sessions.",
    technologies: ["JavaScript", "HTML/CSS", "Bootstrap", "Web Development"],
    category: "web",
    imageUrl: "/api/placeholder/400/250",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Cloud-Based Data Analytics",
    description: "Serverless data processing using IBM Cloud functions",
    detailedDescription: "Implemented serverless architecture for data processing and analytics using IBM Cloud Functions. Focused on scalability and cost-efficiency.",
    technologies: ["IBM Cloud", "Serverless", "Python", "Data Processing"],
    category: "cloud",
    imageUrl: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 5,
    title: "Student Learning Platform",
    description: "Interactive platform for coding tutorials and practice",
    detailedDescription: "Created an educational platform with interactive coding exercises and tutorial content to enhance student learning experience.",
    technologies: ["JavaScript", "Bootstrap", "Web Design", "Education Tech"],
    category: "web",
    imageUrl: "/api/placeholder/400/250",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Drone Navigation System",
    description: "Autonomous flight control and obstacle avoidance",
    detailedDescription: "Developed navigation algorithms for autonomous drone flight with obstacle detection and avoidance capabilities for competition purposes.",
    technologies: ["Python", "Computer Vision", "Embedded Systems", "Algorithms"],
    category: "robotics",
    imageUrl: "/api/placeholder/400/250",
    featured: false
  }
];