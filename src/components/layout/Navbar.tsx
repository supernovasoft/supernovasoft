import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', href: '/#services', external: false },
    { name: 'Blog', href: 'https://blog.supernovasoft.com', external: true },
    { name: 'Tools', href: 'https://tools.supernovasoft.com', external: true },
    { name: 'Contact', href: '/#contact', external: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'glass py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <img 
                src="/assets/img/logo.png" 
                alt="Supernova Soft Logo" 
                className="relative h-10 w-auto" 
              />
            </motion.div>
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-lg tracking-tight transition-colors leading-none",
                scrolled ? "text-foreground" : "text-foreground"
              )}>
                SUPERNOVA
              </span>
              <span className="text-xs text-primary font-medium tracking-widest">SOFTWARE</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 hover:bg-primary/10",
                    scrolled ? "text-foreground/80 hover:text-primary" : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {link.name}
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-primary/10",
                    scrolled ? "text-foreground/80 hover:text-primary" : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {link.name}
                </a>
              )
            ))}
            
            <div className="w-px h-6 bg-border mx-2" />
            
            <ModeToggle />
            
            <motion.a
              href="/#contact"
              className="ml-2 px-5 py-2.5 rounded-xl bg-gradient-primary text-white text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="h-4 w-4" />
              Get Started
            </motion.a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ModeToggle />
            <motion.button
              className={cn(
                "p-2.5 rounded-xl transition-colors",
                scrolled ? "glass" : "bg-foreground/10"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col py-6 gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-primary/10 text-foreground font-medium transition-colors"
                      >
                        {link.name}
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="block px-4 py-3 rounded-xl hover:bg-primary/10 text-foreground font-medium transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
                
                <motion.a
                  href="/#contact"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-4 px-4 py-3 rounded-xl bg-gradient-primary text-white font-medium flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
