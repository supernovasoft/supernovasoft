import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink, ArrowRight, Languages } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import { useLanguage } from '@/components/language-provider';

const LANGS: ('en' | 'tr' | 'ar')[] = ['en', 'tr', 'ar'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  // Reading-progress rail pinned to the very top of the viewport
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '/#services', external: false },
    { name: t('nav.blog'), href: 'https://blog.supernovasoft.com', external: true },
    { name: t('nav.tools'), href: 'https://tools.supernovasoft.com', external: true },
    { name: t('nav.contact'), href: '/#contact', external: false },
  ];

  const cycleLanguage = () => setLanguage(LANGS[(LANGS.indexOf(language) + 1) % LANGS.length]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass border-b border-[hsl(var(--hairline)/var(--hairline-opacity))] py-2.5'
          : 'bg-transparent py-4'
      )}
    >
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-primary rtl:origin-right"
      />

      <nav className="container flex items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-primary/40 blur-lg opacity-40 transition-opacity group-hover:opacity-70" />
            <img src="/assets/img/logo.png" alt="Supernova Soft" className="relative h-9 w-auto" />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">SUPERNOVA</span>
            <span className="mt-0.5 font-mono text-[9px] tracking-[0.3em] text-primary">SOFTWARE</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <div className="flex items-center rounded-full hairline bg-card/40 p-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.name}
                {link.external && <ExternalLink className="h-3 w-3 opacity-50" />}
              </a>
            ))}
          </div>

          <button
            onClick={cycleLanguage}
            className="ms-1 flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10"
            aria-label="Change language"
          >
            <Languages className="h-4 w-4" />
            <span className="font-mono text-xs">{language.toUpperCase()}</span>
          </button>

          <ModeToggle />

          <a
            href="/#contact"
            className="ms-2 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-[0_0_24px_-6px_hsl(var(--glow-color))]"
          >
            {t('nav.getStarted')}
            <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={cycleLanguage}
            className="rounded-lg px-2 py-2 font-mono text-xs font-medium hover:bg-primary/10"
            aria-label="Change language"
          >
            {language.toUpperCase()}
          </button>
          <ModeToggle />
          <button
            className="rounded-xl hairline bg-card/50 p-2.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className="container flex flex-col gap-1 py-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 font-medium transition-colors hover:bg-primary/10"
                >
                  {link.name}
                  {link.external && <ExternalLink className="h-4 w-4 text-muted-foreground" />}
                </motion.a>
              ))}

              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3 font-medium text-white"
              >
                {t('nav.getStarted')}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
