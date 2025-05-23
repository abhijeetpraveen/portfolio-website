import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: React.ReactNode;
  image: string;
  lightImage?: string;
  technologies: string[];
  features?: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 'grpo-proj-comp-579',
    title: 'GRPO Project',
    description: 'Implementation of Group Relative Policy Optimization (GRPO) on The Countdown Reasoning Task, focusing on training and fine-tuning language models for improved reasoning capabilities.',
    detailedDescription: React.createElement(React.Fragment, null, 
      'This project was taken up in collaboration with ',
      React.createElement('a', {
        href: 'https://www.cormaccureton.com/',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'text-secondary hover:text-primary dark:hover:text-white-100 transition-colors'
      }, 'Cormac Cureton'),
      ' and ',
      React.createElement('a', {
        href: 'https://www.linkedin.com/in/amansidhu-mcgill/',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'text-secondary hover:text-primary dark:hover:text-white-100 transition-colors'
      }, 'Aman Sidhu'),
      ' for the COMP 579 (Reinforcement Learning) course at McGill. We implemented Group Relative Policy Optimization (GRPO) specifically for the Countdown Reasoning Task. This project implements GRPO in PyTorch and evaluates its effectiveness on the Countdown arithmetic reasoning benchmark using the Qwen2.5-1.5B-Instruct model. GRPO modifies Proximal Policy Optimization (PPO) by estimating advantages from group-level rewards, reducing dependency on value functions. Our experiments measure the performance of this GRPO algorithm, providing insights into its design choices. Our experiments show that the best GRPO fine-tuned model achieved a test mean reward of 0.18 and test mean accuracy of 10.9% with a group size of G=3, an improvement over the untrained baseline model, which achieved a mean reward of 0.122 and accuracy of 5%. These results highlight the potential of GRPO for improving LLM reasoning through more structured reinforcement learning. We release all our code to facilitate future research into scalable, efficient methods for enhancing LLM reasoning capabilities.'
    ),
    image: '/images/GRPOFrontPage.webp',
    technologies: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Weights & Biases', 'Jupyter Notebooks'],
    github: 'https://github.com/Cormac-C/grpo-project',
  },
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
    detailedDescription: `This work investigates the potential of fine-tuning large language models (LLMs) using programmatically generated synthetic data to enhance their reasoning sub-skills. The study focuses on search as a foundational reasoning sub-skill and evaluates its transferability to higher-order reasoning tasks, specifically Sudoku and Zebra puzzles. Using Low-Rank Adaptation (LoRA), we fine-tune LLMs on synthetic search trajectories without increasing inference-time computational costs, addressing the challenge of high-quality reasoning data scarcity. Our experiments employ Partial Accuracy and Strict Accuracy metrics to assess the effectiveness of fine-tuning and highlight task-specific performance variations. Results demonstrate that fine-tuning on synthetic search trajectories offers marginal improvements in zero shot Zebra puzzle performance compared to the base model. Synthetically fine-tuned models don't offer any improvements when tested on Sudoku. As expected, models fine-tuned directly on task-specific datasets consistently outperform search-fine-tuned models, emphasizing the value of task-specific data. This study underscored the difficulty in improving model attributes which generalize across tasks.`,
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
  },
  {
    id: 'gympose',
    title: 'Gympose',
    description: "Have you ever struggled finding the name of your favorite exercise? Don't worry, GYMPOSE's ingenious AI provides you with all the information you need after you record a quick video of your exercise.",
    detailedDescription: `Due to the great detrimental effects imposed on individuals as a result of the Covid-19 pandemic, fitness has become increasingly popular as it provides an effective way to repair and heal the physical and mental health burdens caused by the lockdowns, isolation, and fear. However, learning new exercises that target different muscle groups of the body could be a daunting and time-consuming task, subjecting many beginners to a barrier of entry. As a result, I was part of a dedicated team that created Gympose in order to facilitate one's fitness journey by making it less intimidating.
    
    Gympose is an AI web application that is able to classify an exercise based on video recordings. Using this platform, individuals can record themselves, or others, doing a specific exercise and in a matter of seconds, the application will provide them with the name, pros and cons, alternatives, and tutorials for that particular exercise. Instead of spending hours browsing the internet to research exercises, by simply recording the exercise you wish to learn about, GYMPOSE will efficiently bring forth all the necessary information to your disposal.`,
    image: '/images/gympose.png',
    technologies: ['Python', 'OpenCV', 'Flask', 'React', 'CNN', 'LSTM'],
    github: 'https://github.com/abhijeetpraveen/GymPose_CHAP',
  },
  {
    id: 'pictodocreader',
    title: 'Pictodoc Reader',
    description: 'A web application that allows users to Ctrl+F for an image in a PDF file.',
    detailedDescription: `Due to covid, many students have become accustomed to working on their schoolwork, projects and even hackathons remotely. This led students to use online resources at their disposal in order to facilitate their workload at home. One of the tools most used is "ctrl+f" which enables a user to quickly locate any text within a document. Thus, a few of my friends and I came to a realisation that no such accurate method exists for images. This led to the birth of this project titled "PictoDocReader".`,
    image: '/images/pictodocreader.png',
    technologies: ['Python', 'Dash', 'Google Cloud', 'PIL', 'Matplotlib', 'NumPy'],
    github: 'https://github.com/mattcab2002/PictoDocReader',
  },
  {
    id: 'online-grocery-store',
    title: 'Online Grocery Store',
    description: 'Project implementing an online grocery store website and android application in a team of 6.',
    detailedDescription: `This is an online Grocery Store Software System using the Agile methodology. This Software System allows customers to create an account which they can use to buy products from their favourite grocery store. Customers can buy products from the ease of their home by having it delivered to their address. However, an option for them to pick up their groceries from an in-store location is also available if they wish to do so. The system will be mainly managed by the owner. They can hire and fire employees from this system, while also allowing him to manage his employee's schedules. They can also decide the business hours of the store as well as occasions of holidays.`,
    image: '/images/321.png',
    technologies: ['Java', 'Vue.js', 'JavaScript', 'REST API', 'PostgreSQL'],
    github: 'https://github.com/McGill-ECSE321-Winter2022/project-group-group-03',
  }
]; 