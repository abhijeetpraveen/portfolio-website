import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { FaArrowLeft } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="padding min-h-screen pt-20">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-primary dark:text-white-100 hover:text-secondary dark:hover:text-secondary transition-colors mb-8"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </button>
          <h2 className="text-3xl font-bold text-primary dark:text-white-100 mb-4">Project Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <section className="padding min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-primary dark:text-white-100 hover:text-secondary dark:hover:text-secondary transition-colors mb-8"
        >
          <FaArrowLeft />
          <span>Back to Projects</span>
        </button>

        <div className="flex-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white-100">
            {project.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-primary dark:text-white-100 whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white-100 mb-2">Description</h3>
              <p className="text-primary dark:text-white-100">{project.description}</p>
            </div>
            
            {project.features && (
              <div>
                <h3 className="text-xl font-semibold text-primary dark:text-white-100 mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-primary dark:text-white-100">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary dark:bg-white-100 text-white-100 dark:text-primary rounded-lg hover:bg-secondary dark:hover:bg-secondary transition-colors"
                >
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary text-white-100 rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails; 