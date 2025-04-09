import { motion } from 'framer-motion';
import { FaFilm, FaFutbol, FaCoffee } from 'react-icons/fa';

const About = () => {
  return (
    <section className="padding min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white-100 mb-8">
          About Me
        </h2>
        
        <div className="space-y-8 text-primary dark:text-white-100">
          <div className="space-y-4">
            <p className="text-lg">
              Hello! I'm currently an MS student in the iSmart Lab at MILA - Quebec AI Institute & McGill University under the supervision of Professor Narges Armanfard.
            </p>
            
            <p className="text-lg">
              I completed my undergrad in Computer Engineering and Applied Artificial Intelligence from McGill University in 2024.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary dark:text-white-100 mb-8">
              What I Do
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-primary/5 dark:bg-white-100/5 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-primary dark:text-white-100 mb-2">
                  AI Research
                </h4>
                <p className="text-secondary">
                  Conducting research in multimodal learning, with a focus on understanding and improving the capabilities of LLMs.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-primary/5 dark:bg-white-100/5 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-primary dark:text-white-100 mb-2">
                  Software Projects
                </h4>
                <p className="text-secondary">
                  Developing software projects to solve everyday problems faced by myself and others.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-primary dark:text-white-100 mb-8">
              Beyond Work
            </h3>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <FaFilm className="text-secondary" />
                  <h3>Movies & TV Shows</h3>
                </div>
                <p className="text-lg mb-2">When I'm not coding, you can find me watching movies and tv shows. Some of my favourites include:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Good Will Hunting</li>
                  <li>The Dark Knight</li>
                  <li>Peaky Blinders</li>
                  <li>Breaking Bad</li>
                  <li>Mad Men</li>
                  <li>Brooklyn Nine-Nine</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <FaFutbol className="text-secondary" />
                  <h3>Football</h3>
                </div>
                <p className="text-lg">
                  I also passionately support the world's best soccer team - Liverpool FC. YNWA!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-medium">
                  <FaCoffee className="text-secondary" />
                  <h3>Let's Connect</h3>
                </div>
                <p className="text-lg">
                  I am always up for a good chat with a cup of coffee! If you'd like to get in touch or collaborate, please don't hesitate to reach out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 