import { ArrowDown, Code2, Cloud, Smartphone, ShieldCheck, Rocket, Zap, Globe, Lock, Layers, ChevronRight, ChevronLeft, Mail, MapPin, Phone as PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Background3D } from '@/components/3d/Background3D';
import { useLanguage } from '@/components/language-provider';
import { TechBackgroundSVG } from '@/components/ui/ServiceBackgrounds';
import { ITHeroBackground } from '@/components/ui/ITHeroBackground';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Hero() {
  const { t, isRTL } = useLanguage();
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Background3D />
      <ITHeroBackground className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[1] opacity-70" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 pb-16">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t('hero.badge')}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            {t('hero.title1')}{' '}
            <span className="text-gradient">{t('hero.titleHighlight')}</span>
            <br />
            {t('hero.title2')}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button size="lg" className="text-base px-8 h-12 bg-gradient-primary hover:opacity-90 transition-opacity glow-sm" asChild>
              <a href="#contact" className="gap-2">
                {t('hero.cta')}
                <ChevronIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 glass hover:bg-primary/10" asChild>
              <a href="#services">{t('hero.ctaSecondary')}</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="pt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
          >
            {[
              { icon: ShieldCheck, text: t('hero.feature1') },
              { icon: Zap, text: t('hero.feature2') },
              { icon: Globe, text: t('hero.feature3') }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">{t('hero.scroll')}</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, description, features, gradient }: { icon: React.ComponentType<any>, title: string, description: string, features: string[], gradient: string }) {
  const { isRTL } = useLanguage();
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative glass-card rounded-2xl p-8 overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`} />

      <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${gradient} p-[1px] mb-6`}>
        <div className="h-full w-full bg-card rounded-xl flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className={`h-5 w-5 rounded-full bg-gradient-to-br ${gradient} p-[1px] flex-shrink-0`}>
              <div className="h-full w-full bg-card rounded-full flex items-center justify-center">
                <ChevronIcon className="h-3 w-3 text-primary" />
              </div>
            </div>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code2,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: [t('services.web.feature1'), t('services.web.feature2'), t('services.web.feature3'), t('services.web.feature4')],
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Cloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      features: [t('services.cloud.feature1'), t('services.cloud.feature2'), t('services.cloud.feature3'), t('services.cloud.feature4')],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: t('services.telecom.title'),
      description: t('services.telecom.description'),
      features: [t('services.telecom.feature1'), t('services.telecom.feature2'), t('services.telecom.feature3'), t('services.telecom.feature4')],
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background z-0" />
      <TechBackgroundSVG className="absolute top-0 left-0 right-0 bottom-0 w-full h-full opacity-60 z-[1]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">{t('services.subtitle')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tools() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase">{t('tools.subtitle')}</span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              {t('tools.title1')}
              <br />
              <span className="text-gradient">{t('tools.title2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t('tools.description')}
            </p>

            <form action="https://tools.supernovasoft.com/tool/" className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="flex-1 relative">
                <Globe className={`absolute top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground ${isRTL ? 'right-4' : 'left-4'}`} />
                <input
                  type="text"
                  name="q"
                  placeholder={t('tools.placeholder')}
                  className={`w-full py-4 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'}`}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="h-auto py-4 px-8 bg-gradient-primary hover:opacity-90 rounded-xl">
                <Zap className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('tools.analyze')}
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-lg"
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">query_engine.sh</span>
                </div>

                <div className="font-mono text-sm space-y-3" dir="ltr">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-muted-foreground">analyze google.com</span>
                  </div>
                  <div className="pl-4 space-y-1 text-muted-foreground">
                    <p><span className="text-emerald-500">✓</span> {t('tools.demo2')}</p>
                    <p><span className="text-emerald-500">✓</span> {t('tools.demo3')}</p>
                    <p><span className="text-emerald-500">✓</span> {t('tools.demo4')}</p>
                    <p><span className="text-emerald-500">✓</span> {t('tools.demo5')}</p>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-primary">$</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Solutions() {
  const { t, isRTL } = useLanguage();

  const solutionFeatures = [
    {
      icon: ShieldCheck,
      title: t('solutions.security.title'),
      description: t('solutions.security.description'),
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: t('solutions.cloud.title'),
      description: t('solutions.cloud.description'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: t('solutions.telecom.title'),
      description: t('solutions.telecom.description'),
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Rocket,
      title: t('solutions.performance.title'),
      description: t('solutions.performance.description'),
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Layers,
      title: t('solutions.scalability.title'),
      description: t('solutions.scalability.description'),
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Lock,
      title: t('solutions.compliance.title'),
      description: t('solutions.compliance.description'),
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">{t('solutions.subtitle')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t('solutions.title')} <span className="text-gradient">{t('solutions.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('solutions.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-300"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-4`}>
                <div className="h-full w-full bg-background rounded-xl flex items-center justify-center group-hover:bg-card transition-colors">
                  <feature.icon className="h-5 w-5 text-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={`inline-flex items-center gap-8 px-8 py-4 rounded-2xl glass-card ${isRTL ? 'flex-row-reverse' : ''}`}>
            {[
              { value: t('solutions.stat1.value'), label: t('solutions.stat1.label') },
              { value: t('solutions.stat2.value'), label: t('solutions.stat2.label') },
              { value: t('solutions.stat3.value'), label: t('solutions.stat3.label') }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.location'),
      value: t('contact.locationValue'),
      href: null,
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Mail,
      title: t('contact.email'),
      value: "info@supernovasoft.com",
      href: "mailto:info@supernovasoft.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: PhoneIcon,
      title: t('contact.phone'),
      value: "+90 531 208 9995",
      href: "tel:+905312089995",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">{t('contact.subtitle')}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-4 p-4 rounded-xl glass hover:bg-card/80 transition-all">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} p-[1px] flex-shrink-0`}>
                        <div className="h-full w-full bg-background rounded-xl flex items-center justify-center group-hover:bg-card transition-colors">
                          <item.icon className="h-5 w-5 text-foreground" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.title}</p>
                        <p className="font-semibold group-hover:text-primary transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl glass">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} p-[1px] flex-shrink-0`}>
                        <div className="h-full w-full bg-background rounded-xl flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-foreground" />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.title}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">{t('contact.social')}</p>
              <div className="flex gap-3">
                {['github', 'twitter', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href={social === 'github' ? 'https://github.com/supernovasoft' : social === 'twitter' ? 'https://twitter.com/Tarek_Kalaajy' : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <span className="text-sm font-bold uppercase">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl blur-2xl" />
              <form className="relative glass-card rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">{t('contact.form.name')}</label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">{t('contact.form.email')}</label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">{t('contact.form.subject')}</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:opacity-90 h-12 rounded-xl">
                  <Mail className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <Tools />
      <Solutions />
      <Contact />
    </div>
  );
}
