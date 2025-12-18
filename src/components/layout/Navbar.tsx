import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Blog', href: 'https://blog.supernovasoft.com', external: true },
    { name: 'Tools', href: 'https://tools.supernovasoft.com', external: true },
    { name: 'Services', href: '/#services', external: false },
    { name: 'Contact', href: '/#contact', external: false },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/assets/img/logo.png" 
              alt="Supernova Soft Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-110" 
            />
            <span className={cn("font-bold text-xl tracking-tight", scrolled ? "text-foreground" : "text-white")}>
              SUPERNOVA SOFT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
                    scrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.name}
                  {link.name === 'Tools' && <ExternalLink className="h-3 w-3" />}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    scrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", scrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg animate-in slide-in-from-top-5">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary font-medium py-2 flex items-center gap-2"
                  >
                    {link.name}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary font-medium py-2"
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
