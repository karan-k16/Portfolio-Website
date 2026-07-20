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
      "Architected an agentic RAG assistant that answers ownership, onboarding, and status questions with cited sources for engineering teams on Copilot CLI. Built the knowledge graph and hybrid retrieval stack behind it, and shipped a multi-agent library other teams can plug into their own workflows.",
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
      "Researching multi-objective optimization and Bayesian methods for energy systems, helping engineers explore complex renewable energy configurations faster. Built surrogate models and warm-start strategies that cut convergence time by about a third while keeping solution quality high.",
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
      "Led the modernization of a legacy COBOL tax processing system into cloud microservices, replacing brittle batch jobs with modular services that were safer to ship and easier to maintain. Built the React frontend and CI/CD pipelines that took the new platform from rewrite to production.",
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
      "Turns images into genre-conditioned music tracks by reading visual features, predicting musical parameters, and composing full instrumental pieces. The model picks the right genre 91% of the time, with cloud services handling composition, mixing, and delivery end to end.",
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
      "Upscales images with a CUDA-optimized CNN served through a Rust API, with models exported for fast GPU inference. Beats bicubic baselines on both PSNR and SSIM while keeping VRAM use manageable on mid-range GPUs.",
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
      "Automated plant care that tracks height with computer vision, watches moisture and environment sensors, and sends live alerts when plants need water. Built for a weekend hackathon with a full React dashboard.",
    tech: ["Python", "Flask", "OpenCV", "React", "Arduino"],
    githubUrl:
      "https://github.com/karan-k16/MakeUofT-Smart-Plant-Monitoring-System",
    featured: true,
  },
  {
    name: "Robotics for Space Exploration (RSX)",
    description:
      "Rover autonomy for a student space robotics team, using state machines for mission control alongside real-time path planning and obstacle avoidance so the rover can navigate rough terrain on its own.",
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
