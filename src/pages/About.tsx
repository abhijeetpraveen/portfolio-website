import { motion } from 'framer-motion';

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
        
        <div className="space-y-6 text-primary dark:text-white-100">
          <p>
            Hello! I'm a passionate developer with a strong interest in creating beautiful and functional web applications.
            I specialize in frontend development and have experience working with modern technologies and frameworks.
          </p>
          
          <p>
            My journey in web development started [your story here]. Since then, I've been constantly learning and
            improving my skills to create better user experiences and solve complex problems.
          </p>
          
          <p>
            When I'm not coding, you can find me [your hobbies/interests]. I believe in continuous learning and
            staying up-to-date with the latest technologies and best practices in web development.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-primary dark:text-white-100 mb-6">
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-primary/5 dark:bg-white-100/5 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-primary dark:text-white-100 mb-2">
                Frontend Development
              </h4>
              <p className="text-secondary">
                Creating responsive and interactive user interfaces using modern frameworks and libraries.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-primary/5 dark:bg-white-100/5 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-primary dark:text-white-100 mb-2">
                UI/UX Design
              </h4>
              <p className="text-secondary">
                Designing intuitive and user-friendly interfaces with a focus on accessibility and performance.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 