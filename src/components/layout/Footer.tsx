"use client";
import { FiGithub, FiLinkedin, FiMapPin, FiPhone, FiArrowRight, FiTwitter } from 'react-icons/fi';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${theme === "light"
      ? "bg-gray-50 text-black border-t border-gray-200"
      : "bg-black text-white border-t border-gray-800"
      } transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className={`text-2xl font-bold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"
              }`}>
              Paul&apos;s Blogs
            </h3>
            <p className={`text-lg mb-6 ${theme === "light" ? "text-gray-600" : "text-gray-300"
              }`}>
              Where Code Meets Content
            </p>
            <p className={`mb-6 ${theme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>
              Sharing technical insights, coding tutorials, and creative content
              to help developers grow and learn.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Mr-Rahul-Paul/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === "light"
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                <FiGithub className="text-xl" />
              </a>
              <a
                href="https://github.com/Mr-Rahul-Paul/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === "light"
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                <FiTwitter className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-paul-0109bb219/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === "light"
                  ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
              >
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"
              }`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className={`hover:underline transition-colors duration-200 ${theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"
                    }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Blogs"
                  className={`hover:underline transition-colors duration-200 ${theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"
                    }`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`hover:underline transition-colors duration-200 ${theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"
                    }`}
                >
                  About
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 ${theme === "light" ? "text-gray-900" : "text-white"
              }`}>
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiTwitter className={`${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`} />
                <span className={`${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                  @_Rahul_Paul
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className={`${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`} />
                <span className={`${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                  India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className={`${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`} />
                <span className={`${theme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                  +91 XXXXXXXXXX (nope)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={`py-8 px-6 rounded- mb-8 border-2 ${theme === "light"
          ? "bg-white border "
          : " border border-gray-700"
          }`}>
          <div className={`text-center`}>
            <h4 className={`text-lg font-semibold mb-2`}>
              Stay Updated
            </h4>
            <p className={`mb-4 `}>
              Subscribe to get notified about new blog posts and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === "light"
                    ? "bg-white border-gray-300 text-gray-900"
                    : "bg-gray-700 border-gray-600 text-white"
                  }`}
              />
              <button className={`${theme === "light" ? "border-black text-black" : "border-white text-white"} border-2 cursor-pointer inline-flex items-center gap-3 px-6 py-3 font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-purple-500 transition-all duration-200`}>
                Subscribe
                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${theme === "light" ? "border-black" : "border-white"}`}>
                  <FiArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${theme === "light" ? " border-gray-200" : "border-gray-700"
          }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`}`}>
              &copy; {currentYear} Paul&apos;s Blogs. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className={`hover:underline transition-colors duration-200 ${theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"
                  }`}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className={`hover:underline transition-colors duration-200 ${theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-white"
                  }`}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
