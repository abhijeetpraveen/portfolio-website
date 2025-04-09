import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'Express', level: 75, category: 'Backend' },
  { name: 'MongoDB', level: 70, category: 'Backend' },
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'Docker', level: 60, category: 'Tools' },
  { name: 'AWS', level: 65, category: 'Tools' },
];

const Skills = () => {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section className="padding min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white-100 mb-8">
          My Skills
        </h2>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-primary dark:text-white-100 mb-6">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-primary dark:text-white-100">
                          {skill.name}
                        </span>
                        <span className="text-secondary">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-primary/10 dark:bg-white-100/10 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-2.5 rounded-full bg-primary dark:bg-white-100"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills; 