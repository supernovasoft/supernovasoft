import { Github, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/language-provider';
import { StatusDot } from '@/components/ui/primitives';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.blog'), href: 'https://blog.supernovasoft.com', external: true },
    { name: t('nav.tools'), href: 'https://tools.supernovasoft.com', external: true },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const services = [
    t('footer.webDev'),
    t('footer.cloudDevOps'),
    t('footer.telecom'),
    t('footer.security'),
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/supernovasoft', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/Tarek_Kalaajy', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const contactRows = [
    { icon: Mail, text: 'info@supernovasoft.com', href: 'mailto:info@supernovasoft.com' },
    { icon: Phone, text: '+90 531 208 9995', href: 'tel:+905312089995' },
    { icon: MapPin, text: t('contact.locationValue'), href: null },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[hsl(var(--hairline)/var(--hairline-opacity))] bg-secondary/25">
      <div aria-hidden className="absolute inset-0 grid-lines-sm opacity-50 mask-fade-b" />

      <div className="container relative z-10">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-primary/40 opacity-40 blur-lg" />
                <img src="/assets/img/logo.png" alt="Supernova Soft" className="relative h-9 w-auto" />
              </div>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-tight">SUPERNOVA</span>
                <span className="mt-0.5 font-mono text-[9px] tracking-[0.3em] text-primary">SOFTWARE</span>
              </span>
            </div>

            <p className="max-w-sm leading-relaxed text-muted-foreground">{t('footer.description')}</p>

            <div className="inline-flex items-center gap-2.5 rounded-full hairline bg-card/50 px-3.5 py-1.5">
              <StatusDot />
              <span className="font-mono text-[11px] text-muted-foreground">All systems operational</span>
            </div>

            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl hairline bg-card/50 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t('footer.quickLinks')}
            </h5>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                    {link.external && (
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100 rtl:-scale-x-100" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t('footer.services')}
            </h5>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t('footer.contact')}
            </h5>
            <ul className="mt-5 space-y-3">
              {contactRows.map((row) => {
                const content = (
                  <>
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                      <row.icon className="h-3.5 w-3.5 text-primary" />
                    </span>
                    <span className="text-sm">{row.text}</span>
                  </>
                );
                return (
                  <li key={row.text}>
                    {row.href ? (
                      <a href={row.href} className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 text-muted-foreground">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Oversized wordmark: fills the base of the page instead of dead space */}
        <div aria-hidden className="pointer-events-none select-none overflow-hidden">
          <p className="font-display text-[15vw] font-bold leading-[0.8] tracking-tighter text-foreground/[0.035] md:text-[11vw]">
            SUPERNOVA SOFT
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[hsl(var(--hairline)/var(--hairline-opacity))] py-7 text-sm md:flex-row">
          <span className="font-mono text-xs text-muted-foreground">
            © {currentYear} {t('footer.copyright')}
          </span>
          <div className="flex items-center gap-6 text-sm">
            {[t('footer.privacy'), t('footer.terms'), t('footer.cookies')].map((label) => (
              <a key={label} href="#" className="text-muted-foreground transition-colors hover:text-primary">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
