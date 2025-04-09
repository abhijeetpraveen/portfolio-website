import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'A brief description of your first project and what it does.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/yourusername/project1',
    liveLink: 'https://project1.com',
    image: '/src/assets/project1.png',
  },
  {
    title: 'Project 2',
    description: 'A brief description of your second project and what it does.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/project2',
    liveLink: 'https://project2.com',
    image: '/src/assets/project2.png',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="padding min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white-100 mb-8">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white-100 dark:bg-primary rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary dark:text-white-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 dark:bg-white-100/10 text-primary dark:text-white-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary dark:text-white-100 hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary dark:text-white-100 hover:text-secondary dark:hover:text-secondary transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 