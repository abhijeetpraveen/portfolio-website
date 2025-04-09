import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen flex-center">
      <div className="padding flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white-100">
            Hi, I'm <span className="text-secondary">Abhijeet</span>
          </h1>
          <p className="mt-4 text-xl text-secondary">
            An AI Researcher and Software Engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4"
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-primary dark:bg-white-100 text-white-100 dark:text-primary rounded-lg hover:bg-secondary dark:hover:bg-secondary transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 border-2 border-primary dark:border-white-100 text-primary dark:text-white-100 rounded-lg hover:bg-primary/10 dark:hover:bg-white-100/10 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 