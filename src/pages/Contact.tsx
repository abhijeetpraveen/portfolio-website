import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useState } from 'react';

const Contact = () => {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const contactLinks = [
    {
      name: 'abhijeetpraveen@gmail.com',
      icon: <HiMail className="text-4xl" />,
      url: 'mailto:abhijeetpraveen@gmail.com',
      copyText: 'abhijeetpraveen@gmail.com'
    },
    {
      name: 'abhijeetpraveen',
      icon: <FaGithub className="text-4xl" />,
      url: 'https://github.com/abhijeetpraveen',
      copyText: 'https://github.com/abhijeetpraveen'
    },
    {
      name: 'Abhijeet Praveen',
      icon: <FaLinkedin className="text-4xl" />,
      url: 'https://linkedin.com/in/abhijeetpraveen',
      copyText: 'https://linkedin.com/in/abhijeetpraveen'
    }
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [text]: true });
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [text]: false });
    }, 1500);
  };

  return (
    <section className="padding min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-xl md:text-2xl text-secondary mb-4">
          Get in touch
        </h2>
        <p className="text-secondary mb-16">
          Feel free to reach out through any of these platforms. I'm always open to
          discussing new projects, creative ideas, or opportunities to be part of your
          visions.
        </p>

        <div className="space-y-8">
          {contactLinks.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-6"
            >
              <div className="text-primary dark:text-white-100">
                {link.icon}
              </div>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary dark:text-white-100 hover:text-secondary dark:hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
              <button
                onClick={() => handleCopy(link.copyText)}
                className="p-2 rounded-md hover:bg-primary/10 dark:hover:bg-white-100/10 transition-colors"
                title="Copy to clipboard"
              >
                {copiedStates[link.copyText] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-primary dark:text-white-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 