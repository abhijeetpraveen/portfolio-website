import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-black-100 text-white-100 py-8">
      <div className="max-container padding">
        <div className="flex-between flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Let's Connect</h3>
            <p className="text-secondary">Feel free to reach out for collaborations or just a friendly hello</p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:abhijeetpraveen@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-secondary transition-colors"
              title="Email me"
            >
              <HiMail />
            </a>
            <a
              href="https://github.com/abhijeetpraveen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-secondary transition-colors"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abhijeetpraveen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-secondary transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="border-t border-secondary/20 mt-8 pt-8 text-center text-secondary">
          <p>© {currentYear} Abhijeet Praveen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 