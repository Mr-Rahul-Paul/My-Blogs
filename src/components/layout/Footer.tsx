import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#18191b] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">Paul&apos;s Blogs</h3>
            <p className="text-white/70 mt-2">Where Code Meets Content</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <FiGithub className="text-2xl" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <FiTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <FiLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center text-white/50 pt-8 mt-8 border-t border-white/20">
          <p>&copy; {new Date().getFullYear()} Paul&apos;s Blogs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
