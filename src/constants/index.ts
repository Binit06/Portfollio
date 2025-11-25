import type { PersonalInfo, SkillCategory, Project, Experience } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Binit Lenka",
  role: "Backend Engineer & System Architect",
  tagline: "Converting plans into reliable, scalable systems.",
  email: "binitlenka@gmail.com",
  github: "https://github.com/Binit06",
  linkedin: "https://linkedin.com/in/binit-lenka-710bb9283",
};

export const SKILLS: SkillCategory = {
  languages: ["Java", "Python", "C++", "TypeScript", "JavaScript"],
  backend: ["Node.js", "Django", "Flask", "PostgreSQL", "MongoDB", "Redis"],
  devops: ["AWS", "Docker", "RabbitMQ", "Grafana", "CI/CD", "GitHub Actions"],
  frontend: ["ReactJS", "NextJS"],
  os: ["Linux"]
};

export const PROJECTS: Project[] = [
  {
    title: "Terabot: Agentic AI Workflow Automation",
    description: "An Agentic AI platform allowing users to build and run custom workflows. Engineered an asynchronous graph processing engine and a Redis-based queue system handling 1000+ daily requests.",
    tags: ["Python", "Redis", "Celery", "AI/LLM", "System Design"],
    stats: "30% success rate increase | 50% less manual work",
    link: "https://dev.cogniwide.co.uk",
    github: "Private"
  },
  {
    title: "Filage: Secure Data Room Platform",
    description: "Secure file handling platform built with AWS microservices. Implemented scalable REST APIs using Lambda and API Gateway, optimizing upload/download speeds significantly.",
    tags: ["NextJS", "AWS S3", "AWS Lambda", "API Gateway", "Security"],
    stats: "20% speed boost | Scalable Microservices",
    link: "https://predict-growth.ai",
    github: "Private"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Cogniwide",
    role: "Software Engineering Intern (Backend)",
    period: "July 2025 - Present",
    details: [
      "Developing workflow automation engines from scratch.",
      "Implemented real-time monitoring with Grafana and AWS to ensure system health.",
      "Revamped frontend architecture for better performance."
    ]
  },
  {
    company: "Predict Growth AI",
    role: "Freelancer",
    period: "Jun 2023 - Sep 2023",
    details: [
      "Created a file storage system similar to Google Drive.",
      "Updated File Upload System from Direct Upload to Chunk based Upload."
    ]
  },
  {
    company: "OSS Club",
    role: "Joint Secretary & Project Head",
    period: "Oct 2023 - Apr 2025",
    details: [
      "Led the development of Innerve 08 website and Anumbhav Blog.",
      "Managed participant onboarding for a hackathon with 4000+ attendees."
    ]
  },
  {
    company: "Smart India Hackathon 2023",
    role: "Team Lead",
    period: "Dec 2023",
    details: [
      "Led the winning team designing a scalable full-stack solution for a real-world problem."
    ]
  }
];

export const ACHIEVEMENTS: string[] = [
  "Winner: Smart India Hackathon 2023",
  "Winner: GDSC Enliven 2024",
  "Finalist: Logithon 2025 (IIT Bombay)",
  "Reliance Foundation Scholar (Top 5000 in Nation)"
];