export interface Project {
  title: string;
  description: string;
  tags: string[];
  stats?: string;
  link: string;
  github: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  languages: string[];
  backend: string[];
  devops: string[];
  frontend: string[];
  os: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
}
