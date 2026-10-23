import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-6 lg:px-8 py-2 md:py-2 flex items-center justify-between transition-all duration-300 ${isScrolled || isMobileMenuOpen
          ? 'bg-brand-dark/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Kaayroo Logo" className="h-16 md:h-25 object-contain" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-sans tracking-wide">
          <a href="#home" className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white text-white">Home</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Our Process</a>
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-white hover:bg-gray-100 text-brand-dark px-6 py-2.5 rounded text-sm font-bold transition-colors font-sans">
          Contact Us
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-brand-dark border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 gap-6 text-lg text-white font-sans tracking-wide">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-accent transition-colors">Home</a>
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-accent transition-colors">Services</a>
              <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brand-accent transition-colors">Our Process</a>
              <button className="bg-white text-brand-dark px-6 lg:px-8 py-3 mt-4 rounded text-base font-bold">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
