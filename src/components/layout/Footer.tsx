import { Github, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: 'https://blog.supernovasoft.com', external: true },
    { name: 'Tools', href: 'https://tools.supernovasoft.com', external: true },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Cloud & DevOps', href: '#services' },
    { name: 'Telecommunication', href: '#services' },
    { name: 'Security Solutions', href: '#services' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/supernovasoft', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/Tarek_Kalaajy', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-lg opacity-50" />
                <img src="/assets/img/logo.png" alt="Supernova Soft Logo" className="relative h-10 w-auto" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none">SUPERNOVA</span>
                <span className="text-xs text-primary font-medium tracking-widest">SOFTWARE</span>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Transforming ideas into exceptional digital experiences. We build enterprise-grade solutions 
              that drive business growth and innovation.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    {link.external && <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Services</h5>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Contact</h5>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@supernovasoft.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">info@supernovasoft.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+905312089995" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">+90 531 208 9995</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Istanbul, Turkey</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>&copy; {currentYear} Supernova Soft. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
