import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="padding min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white-100 mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white-100 dark:bg-primary p-6 rounded-lg shadow-lg"
            >
              <div 
                className="relative group cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <h3 className="text-white-100 text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="relative group">
                <p className="text-primary dark:text-white-100 mt-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {project.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-t from-white-100 dark:from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies?.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies?.length > 3 && (
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <div className="flex gap-4 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-white-100 hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary dark:text-white-100 hover:text-secondary dark:hover:text-secondary transition-colors"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects; 