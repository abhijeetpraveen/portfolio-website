import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

interface Experience {
  title: string;
  company: string;
  homepage: string;
  period: string;
  location: string;
  description: React.ReactNode[];
}

interface Education {
  degree: string;
  institution: string;
  institutionLink: string;
  period: string;
  location: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Graduate Student Researcher',
    company: 'iSmart Lab at MILA - Quebec AI Institute & McGill University',
    homepage: 'https://ismart.ece.mcgill.ca/',
    period: 'August 2024 - Present',
    location: 'Montreal, QC, Canada',
    description: [
      'Conducting advanced multimodal learning research focusing on early, late, and intermediate fusion techniques across audio, video, text, and tabular data.',
      'Utilizing large language models, convolutional neural networks and reinforcement learning to drive innovations in healthcare, industrial automation, and computer vision applications.',
      'Collaborating in a team of researchers, engaging with external teams through presentations and regular meetings to ensure project alignment and successful delivery.'
    ],
  },
  {
    title: 'Machine Learning Developer & Founding Member',
    company: 'ARVO A.I.',
    homepage: 'https://www.arvokas.io/',
    period: 'June 2023 - July 2024',
    location: 'Montreal, QC, Canada',
    description: [
      'Helped initiate and spearheaded a diverse team comprising of 10 R&D developers and 10 software developers.',
      'Developed the R&D team\'s research structure, completed project assignments within tight deadlines.',
      'Developed R&D team\'s market strategy research framework to analyze ongoing business trends.',
      'Independently worked on Hyperspectral Imaging Analysis for Alzheimer\'s Research'
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Hivestack Inc.',
    homepage: 'https://www.hivestack.com/',
    period: 'May 2023 - August 2023',
    location: 'Montreal, QC, Canada',
    description: [
      'Collaborated with a dynamic software team, gaining hands-on experience in developing and maintaining applications.',
      'Leveraged a comprehensive skill set encompassing both front-end and back-end technologies.',
      'Contributed to the successful delivery of products that adhered to user requirements.',
      <div className="flex gap-2 items-center">
        <span>Tools:</span>
        <div className="flex gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6" title="Python" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className="w-6 h-6" title="Vue.js" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" title="JavaScript" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="JIRA" className="w-6 h-6" title="JIRA" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" alt="Confluence" className="w-6 h-6" title="Confluence" />
        </div>
      </div>
    ],
  },
  {
    title: 'Business Intelligence Development Intern',
    company: 'Western Alliance Logistics',
    homepage: 'https://westernalliancelogistics.com/',
    period: 'May 2022 - May 2023',
    location: 'Kirkland, QC, Canada',
    description: [
      'Contributed to projects implementing an automation of day-to-day business activities.',
      'Used RPA (Robotic Process Automation) technologies to decrease time taken in completing tasks by transforming them into a fully automated program.',
      'Decreased time consumption by a factor of 100 from 5 hours in a day to 3 minutes.',
      <div className="flex gap-2 items-center">
        <span>Tools:</span>
        <div className="flex gap-2">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6" title="Python" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Power_Automate.svg" alt="Microsoft Power Automate" className="w-6 h-6" title="Microsoft Power Automate" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="Microsoft Power BI" className="w-6 h-6" title="Microsoft Power BI" />
        </div>
      </div>
    ],
  },
];

const education: Education[] = [
  {
    degree: 'MSc. in Electrical & Computer Engineering - Artificial Intelligence',
    institution: 'McGill University & MILA - Quebec AI Institute',
    institutionLink: 'https://mila.quebec/en/',
    period: '2024 - Present',
    location: 'Montreal, QC, Canada',
    description: 'Multimodal Learning Research at the iSmart lab under the supervision of Professor Narges Armanfard. GPA: 4.0/4.0'
  },
  {
    degree: 'Bachelor of Engineering Computer Engineering',
    institution: 'McGill University',
    institutionLink: 'https://www.mcgill.ca/',
    period: '2020 - 2024',
    location: 'Montreal, QC, Canada',
    description: 'Minor: Applied Artificial Intelligence. GPA: 3.8/4.0'
  }
];

const Resume = () => {
  return (
    <section className="padding min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white-100">
            Resume
          </h2>
          <a
            href="/src/assets/Abhijeet Praveen's Resume.pdf"
            download="Abhijeet_Praveen_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-primary dark:bg-white-100 text-white-100 dark:text-primary rounded-lg hover:bg-secondary dark:hover:bg-secondary transition-colors"
          >
            <FaDownload />
            <span>Download CV</span>
          </a>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary dark:text-white-100 mb-6">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white-100 dark:bg-primary p-6 rounded-lg shadow-lg"
                >
                  <div className="flex-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-primary dark:text-white-100">
                        {edu.degree}
                      </h4>
                      <p className="text-secondary">
                        <a href={edu.institutionLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-white-100 transition-colors">
                          {edu.institution}
                        </a>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-secondary block">{edu.period}</span>
                      <span className="text-secondary text-sm">{edu.location}</span>
                    </div>
                  </div>
                  <p className="text-primary dark:text-white-100">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary dark:text-white-100 mb-6">
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white-100 dark:bg-primary p-6 rounded-lg shadow-lg"
                >
                  <div className="flex-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-primary dark:text-white-100">
                        {exp.title}
                      </h4>
                      <p className="text-secondary">
                        <a href={exp.homepage} target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-white-100 transition-colors">
                          {exp.company}
                        </a>
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-secondary block">{exp.period}</span>
                      <span className="text-secondary text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="list-none space-y-2 text-primary dark:text-white-100">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm md:text-base pl-5 relative">
                        <span className="absolute left-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume; 