import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white-100/80 dark:bg-primary/80 backdrop-blur-sm">
      <div className="max-container padding flex-between py-4">
        <Link to="/" className="text-2xl font-bold text-primary dark:text-white-100">
          Abhijeet
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-primary dark:text-white-100 hover:text-secondary dark:hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-primary/10 dark:bg-white-100/10"
          >
            {isDarkMode ? (
              <FiSun className="text-white-100" size={20} />
            ) : (
              <FiMoon className="text-primary" size={20} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-primary/10 dark:bg-white-100/10"
          >
            <div className="w-6 h-0.5 bg-primary dark:bg-white-100 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-primary dark:bg-white-100 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-primary dark:bg-white-100"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white-100 dark:bg-primary border-t border-primary/10 dark:border-white-100/10">
          <div className="padding py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-primary dark:text-white-100 hover:text-secondary dark:hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full bg-primary/10 dark:bg-white-100/10 w-fit"
            >
              {isDarkMode ? (
                <FiSun className="text-white-100" size={20} />
              ) : (
                <FiMoon className="text-primary" size={20} />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 