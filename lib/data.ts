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
  logo?: "microsoft" | "uoft" | "foresters";
  lab?: string;
  labUrl?: string;
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
    logo: "microsoft",
    location: "Redmond, Washington",
    period: "May 2026 – Aug 2026",
    description:
      "Architected an agentic RAG assistant on the Microsoft Agent Framework with MCP tool-use, served to 100+ daily users on Copilot CLI. Built a hybrid BM25/vector retrieval layer on Azure AI Search, and shipped a multi-agent library with OAuth2/MSAL and CI/CD.",
  },
  {
    role: "Machine Learning Researcher",
    company: "University of Toronto",
    companyUrl: "https://www.utoronto.ca",
    companyShort: "UofT",
    logo: "uoft",
    lab: "Mine Energy Lab",
    labUrl: "https://mineenergy.civmin.utoronto.ca/team/",
    location: "Toronto, Ontario",
    period: "Jan 2026 – Apr 2026",
    description:
      "Built a two-stage multi-objective optimization framework (Differential Evolution + NSGA-II) for energy systems, deployed Dockerized PyTorch surrogate models via FastAPI, and engineered Bayesian optimization with BoTorch/GPyTorch and MLflow tracking to cut convergence time 33%.",
  },
  {
    role: "Software Engineer Intern",
    company: "Foresters Financial",
    companyUrl: "https://www.foresters.com",
    companyShort: "Foresters",
    logo: "foresters",
    location: "Toronto, Ontario",
    period: "May 2025 – Aug 2025",
    description:
      "Modernized a legacy COBOL tax processing system into C# .NET Core microservices on Docker, AKS, and Azure SQL, cutting deployment time 70%. Built a React + Vite + TypeScript frontend on ASP.NET Core APIs and Azure DevOps CI/CD.",
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
    schoolUrl: "https://www.engineering.utoronto.ca/about/",
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
    description:
      "Image-to-music system generating genre-conditioned tracks with a 91% top-1 TensorFlow model, GraphQL orchestration on AWS ECS, and Terraform IaC",
    tech: [
      "C++",
      "Python",
      "AWS",
      "Terraform",
      "TensorFlow",
      "Node.js",
      "MySQL",
    ],
    githubUrl: "https://github.com/DakshK26/SoundCanvas",
    liveUrl: "https://sound-canvas-seven.vercel.app/",
    featured: true,
  },
  {
    name: "Image Super-Resolution Pipeline",
    description:
      "CUDA-optimized PyTorch CNN with ONNX/TensorRT export and a Rust inference API, delivering +3.1 dB PSNR and +0.05 SSIM vs. bicubic",
    tech: [
      "Rust",
      "PyTorch",
      "CUDA",
      "ONNX",
      "TensorRT",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/karan-k16",
    liveUrl: "https://utmist-sr-image-enhancement.vercel.app/",
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
    liveUrl: "https://rsx.skule.ca/",
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
    "C/C++",
    "C#",
    "Rust",
    "Java",
    "Go",
    "TypeScript",
    "JavaScript",
    "SQL",
    "HTML/CSS",
  ],
  Frameworks: [
    "FastAPI",
    "gRPC",
    "GraphQL",
    "Microsoft Graph",
    "ASP.NET Core",
    "Entity Framework",
    "Node.js",
    "React",
  ],
  Libraries: [
    "PyTorch",
    "TensorFlow",
    "CUDA",
    "TensorRT",
    "ONNX",
    "RAGAS",
    "BoTorch/GPyTorch",
    "NumPy",
    "SciPy",
    "CuPy",
    "Ray",
  ],
  Tools: [
    "AWS",
    "Azure",
    "Kubernetes",
    "Docker",
    "Terraform",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "OpenTelemetry",
    "MLflow",
    "Git",
  ],
};
