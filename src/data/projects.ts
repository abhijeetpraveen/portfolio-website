export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  technologies: string[];
  features?: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with dark mode support and smooth animations.',
    detailedDescription: `This portfolio website showcases my professional journey and technical expertise through a modern, user-friendly interface. Built with React and TypeScript, it demonstrates my commitment to using industry-standard technologies and best practices in web development.`,
    image: '/images/portfolio-screenshot.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/abhijeetpraveen/portfolio-website',
  },
  {
    id: 'llm-reasoning-decomp',
    title: 'Training LLM Reasoning Sub-Skills with Synthetic Data',
    description: 'Investigating the use of synthetic data to train LLMs for better reasoning.',
    detailedDescription: `Placeholder`,
    image: '/images/DecompPoster.webp',
    technologies: ['Python', 'PyTorch', 'Hugging Face Transformers'],
    github: 'https://github.com/Cormac-C/llm-reasoning-decomp',
  },
  {
    id: 'mfsl',
    title: 'The Multinational Fantasy Soccer League',
    description: 'A fantasy soccer game combining the fun from the world\'s top five leagues.',
    detailedDescription: `The Multinational Fantasy Soccer League (MFSL) is an innovative fantasy sports platform that unifies the top five soccer leagues worldwide into a single, comprehensive gaming experience. This full-stack application leverages modern technologies to deliver real-time updates, sophisticated scoring systems, and an engaging user interface.

The platform processes live data from multiple soccer leagues, implementing complex scoring systems for player performance tracking and point calculations.`,
    image: '/images/mfsl.png',
    technologies: ['Java', 'Springboot', 'AWS', 'Docker', 'mySQL', 'React', 'TypeScript', 'JIRA', 'Confluence'],
    github: 'https://github.com/mfsl-capstone',
  }
]; 