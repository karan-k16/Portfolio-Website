export const profile = {
  name: "Karan Kardam",
  monogram: "KK",
  location: "Toronto, Ontario",
  email: "karankardam16@gmail.com",
  bio: "I am a Computer Engineering student at the University of Toronto, minoring in Artificial Intelligence and Engineering Business, interested in software engineering with a focus on machine learning and AI systems.",
  socials: {
    github: "https://github.com/karan-k16",
    linkedin: "https://www.linkedin.com/in/karan-kardam",
    email:
      "https://mail.google.com/mail/?view=cm&fs=1&to=karankardam16@gmail.com",
  },
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  companyShort?: string;
  location: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Microsoft",
    companyUrl: "https://www.microsoft.com",
    companyShort: "Microsoft",
    location: "Redmond, Washington",
    period: "May 2026 – Aug 2026",
    description:
      "Building Perception Brain, an agentic RAG assistant on the Microsoft Agent Framework and MCP that answers ownership and onboarding questions with cited sources, served to 100+ daily users through the GitHub Copilot CLI.",
  },
  {
    role: "Machine Learning Researcher",
    company: "University of Toronto",
    companyUrl: "https://www.utoronto.ca",
    companyShort: "UofT",
    location: "Toronto, Ontario",
    period: "Jan 2026 – Apr 2026",
    description:
      "Built a two-stage multi-objective optimization framework (Differential Evolution + NSGA-II) for energy systems, and deployed Dockerized PyTorch surrogate models behind a FastAPI service with batched inference at 1.1s p95 latency.",
  },
  {
    role: "Software Engineer Intern",
    company: "Foresters Financial",
    companyUrl: "https://www.foresters.com",
    companyShort: "Foresters",
    location: "Toronto, Ontario",
    period: "May 2025 – Aug 2025",
    description:
      "Modernized a legacy COBOL tax processing system into a scalable C# .NET Core microservice architecture on Docker, Azure Kubernetes Service, and Azure SQL, with a React + Vite + TypeScript frontend and Azure DevOps CI/CD pipelines.",
  },
];

export type Education = {
  degree: string;
  school: string;
  schoolUrl?: string;
  period: string;
  note?: string;
};

export const education: Education[] = [
  {
    degree: "B.A.Sc. Computer Engineering, Minors in AI & Engineering Business",
    school: "University of Toronto",
    schoolUrl: "https://www.utoronto.ca",
    period: "Sep 2024 – May 2028",
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "SoundCanvas",
    description: "AI-powered image-to-music generation system",
    tech: ["C++", "Python", "TensorFlow", "Node.js", "AWS", "MySQL"],
    githubUrl: "https://github.com/karan-k16",
    featured: true,
  },
  {
    name: "Image Super-Resolution Pipeline",
    description: "480p-to-2K super-resolution CNN pipeline with UTMIST",
    tech: ["Python", "PyTorch", "OpenCV", "CUDA"],
    githubUrl: "https://github.com/karan-k16",
    featured: true,
  },
  {
    name: "Smart Plant Monitoring & Watering System",
    description:
      "Automated plant care with computer-vision height tracking at 95%+ accuracy and live sensor alerts",
    tech: ["Python", "Flask", "OpenCV", "React", "Arduino"],
    githubUrl:
      "https://github.com/karan-k16/MakeUofT-Smart-Plant-Monitoring-System",
    featured: true,
  },
  {
    name: "Robotics for Space Exploration (RSX)",
    description:
      "Rover autonomy with ROS SMACH state machines and real-time path planning & obstacle avoidance",
    tech: ["Python", "C++", "Bash", "ROS", "SMACH"],
    githubUrl: "https://github.com/karan-k16",
  },
];

export type Publication = {
  title: string;
  venue: string;
  status: string;
  statusType: "review" | "published";
  description: string;
  date: string;
  paperUrl?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Renewable Energy Integration in Northern Canada: A Machine Learning-Driven, Multi-Objective Evolutionary Framework.",
    venue: "Applied Energy · Second Author",
    status: "In Press",
    statusType: "review",
    description:
      "Bringing sustainable energy solutions to remote northern communities through machine-learning-driven multi-objective optimization.",
    date: "2026",
  },
];

export const skills = {
  Languages: [
    "Python",
    "Java",
    "C/C++",
    "C#",
    "Swift",
    "JavaScript",
    "TypeScript",
    "SQL",
  ],
  Frameworks: ["ASP.NET Core", "Node.js", "React", "Flask", "ROS", "FastAPI"],
  Libraries: ["PyTorch", "TensorFlow", "OpenCV", "NumPy", "SciPy", "GraphQL"],
  Tools: [
    "AWS",
    "Azure",
    "Terraform",
    "Docker",
    "Kubernetes",
    "SQL Server",
    "Git",
    "Linux",
  ],
};
