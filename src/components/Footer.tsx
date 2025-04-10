import { ArrowUpIcon } from 'lucide-react';
import './HeaderFooterStyle.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zero<span className="text-brand-turquoise">Manual</span></h3>
            <p className="text-gray-300 mb-4">
              Days into minutes, hours into seconds
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business Process Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Workflow Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Automation Orchestration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">End-to-End Automation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Intelligent Document Processing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Custom Automation Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@zero-manual.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Zero Manual. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-brand-teal hover:bg-brand-blue rounded-full p-2 mt-4 md:mt-0 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
