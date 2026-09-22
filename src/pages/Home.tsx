import {
  ArrowDown, ArrowRight, Check, Cloud, Code2, Github, Globe, Layers, Linkedin,
  Lock, Mail, MapPin, MessageSquare, Phone as PhoneIcon, Rocket, ShieldCheck, Smartphone, Terminal, Twitter, Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Background3D } from '@/components/3d/Background3D';
import { useLanguage } from '@/components/language-provider';
import { CloudMotif, MailMotif, MessageMotif, TelecomMotif, WebMotif } from '@/components/ui/ServiceBackgrounds';
import { SystemConsole } from '@/components/ui/SystemConsole';
import {
  CountUp, Eyebrow, Marquee, Section, SectionHeading, SpotlightCard, StatusDot,
} from '@/components/ui/primitives';
import { fadeUp, stagger } from '@/lib/motion';

/* ------------------------------------------------------------------ Hero */

export function Hero() {
  const { t } = useLanguage();

  const proof = [
    { icon: ShieldCheck, text: t('hero.feature1') },
    { icon: Zap, text: t('hero.feature2') },
    { icon: Globe, text: t('hero.feature3') },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Background3D />
      <div aria-hidden className="absolute inset-0 -z-10 aurora" />
      <div aria-hidden className="absolute inset-0 -z-10 grid-lines mask-fade opacity-70" />

      <div className="container relative z-10 pt-32 pb-24 md:pt-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <motion.div
            className="lg:col-span-6 xl:col-span-6"
            initial="initial"
            animate="animate"
            variants={stagger(0.1)}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2.5 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
                <StatusDot />
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-4xl sm:text-5xl xl:text-7xl font-bold leading-[1.04] text-balance"
            >
              {t('hero.title1')}{' '}
              <span className="text-gradient">{t('hero.titleHighlight')}</span>{' '}
              {t('hero.title2')}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="h-12 px-7 text-base bg-gradient-primary hover:opacity-90 glow-sm" asChild>
                <a href="#contact" className="gap-2">
                  {t('hero.cta')}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-7 text-base glass hover:bg-primary/10" asChild>
                <a href="#services">{t('hero.ctaSecondary')}</a>
              </Button>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground"
            >
              {proof.map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.text}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <div className="lg:col-span-6 xl:col-span-6">
            <SystemConsole />
          </div>
        </div>
      </div>

      <motion.a
        href="#services"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{t('hero.scroll')}</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}

/* ----------------------------------------------------------- Trust strip */

const SOLUTIONS = ['trust.item1', 'trust.item2', 'trust.item3', 'trust.item4', 'trust.item5', 'trust.item6', 'trust.item7', 'trust.item8'];

export function TrustStrip() {
  const { t } = useLanguage();

  return (
    <div className="relative hairline-y border-y border-[hsl(var(--hairline)/var(--hairline-opacity))] bg-secondary/25 py-7">
      <p className="container text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {t('trust.label')}
      </p>
      <Marquee className="mt-5">
        {SOLUTIONS.map((key) => (
          <span
            key={key}
            className="flex items-center gap-2 rounded-full hairline bg-card/50 px-4 py-2 font-mono text-xs text-foreground/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            {t(key)}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* -------------------------------------------------------------- Services */

function ServiceCard({
  index, icon: Icon, title, description, features, motif, wide = false,
}: {
  index: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  motif: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className={wide ? 'lg:col-span-6' : 'lg:col-span-3'}
    >
      <SpotlightCard className="h-full">
        <div className={wide ? 'grid md:grid-cols-2 gap-8 p-8' : 'p-8'}>
          <div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl hairline bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-mono text-xs text-muted-foreground/60">{index}</span>
            </div>

            <h3 className="mt-6 text-xl font-bold transition-colors group-hover:text-primary">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

            <ul className="mt-6 space-y-2.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={wide ? 'flex items-center justify-center' : 'pointer-events-none mt-8'}>
            <div className={wide ? 'w-full' : 'opacity-70'}>{motif}</div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      index: '01',
      icon: Code2,
      title: t('services.web.title'),
      description: t('services.web.description'),
      features: ['feature1', 'feature2', 'feature3', 'feature4'].map((k) => t(`services.web.${k}`)),
      motif: <WebMotif className="h-32 w-full" />,
    },
    {
      index: '02',
      icon: Cloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      features: ['feature1', 'feature2', 'feature3', 'feature4'].map((k) => t(`services.cloud.${k}`)),
      motif: <CloudMotif className="h-32 w-full" />,
    },
    {
      index: '03',
      icon: Smartphone,
      title: t('services.telecom.title'),
      description: t('services.telecom.description'),
      features: ['feature1', 'feature2', 'feature3', 'feature4'].map((k) => t(`services.telecom.${k}`)),
      motif: <TelecomMotif className="h-44 w-full" />,
      wide: true,
    },
    {
      index: '04',
      icon: Mail,
      title: t('services.novamail.title'),
      description: t('services.novamail.description'),
      features: ['feature1', 'feature2', 'feature3', 'feature4'].map((k) => t(`services.novamail.${k}`)),
      motif: <MailMotif className="h-32 w-full" />,
    },
    {
      index: '05',
      icon: MessageSquare,
      title: t('services.jasminpro.title'),
      description: t('services.jasminpro.description'),
      features: ['feature1', 'feature2', 'feature3', 'feature4'].map((k) => t(`services.jasminpro.${k}`)),
      motif: <MessageMotif className="h-32 w-full" />,
    },
  ];

  return (
    <Section id="services" grid>
      <SectionHeading
        eyebrow={t('services.subtitle')}
        title={t('services.title')}
        highlight={t('services.titleHighlight')}
        description={t('services.description')}
      />

      <motion.div
        className="mt-14 grid gap-5 lg:grid-cols-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger()}
      >
        {services.map((service) => (
          <ServiceCard key={service.index} {...service} />
        ))}
      </motion.div>
    </Section>
  );
}

/* ---------------------------------------------------------- Capabilities */

export function Solutions() {
  const { t } = useLanguage();

  const capabilities = [
    { icon: ShieldCheck, key: 'security' },
    { icon: Cloud, key: 'cloud' },
    { icon: Smartphone, key: 'telecom' },
    { icon: Rocket, key: 'performance' },
    { icon: Layers, key: 'scalability' },
    { icon: Lock, key: 'compliance' },
  ];

  const stats = [
    { value: t('solutions.stat1.value'), label: t('solutions.stat1.label') },
    { value: t('solutions.stat2.value'), label: t('solutions.stat2.label') },
    { value: t('solutions.stat3.value'), label: t('solutions.stat3.label') },
  ];

  return (
    <Section className="bg-secondary/25">
      <SectionHeading
        eyebrow={t('solutions.subtitle')}
        title={t('solutions.title')}
        highlight={t('solutions.titleHighlight')}
        description={t('solutions.description')}
      />

      {/* Spec-sheet grid: hairline gaps instead of floating cards */}
      <motion.div
        className="mt-14 overflow-hidden rounded-2xl hairline bg-[hsl(var(--hairline)/var(--hairline-opacity))] grid gap-px sm:grid-cols-2 lg:grid-cols-3"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger()}
      >
        {capabilities.map((item, i) => (
          <motion.div
            key={item.key}
            variants={fadeUp}
            className="group relative bg-background p-7 transition-colors duration-300 hover:bg-card"
          >
            <div className="flex items-center justify-between">
              <item.icon className="h-5 w-5 text-primary" />
              <span className="font-mono text-[11px] text-muted-foreground/50">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="mt-5 font-bold transition-colors group-hover:text-primary">
              {t(`solutions.${item.key}.title`)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t(`solutions.${item.key}.description`)}
            </p>
            <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-primary transition-transform duration-500 group-hover:scale-x-100" />
          </motion.div>
        ))}
      </motion.div>

      {/* Metrics band */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mt-6 overflow-hidden rounded-2xl glass-card"
      >
        <div aria-hidden className="absolute inset-0 dot-grid opacity-50" />
        <div className="relative grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[hsl(var(--hairline)/var(--hairline-opacity))] rtl:sm:divide-x-reverse">
          {stats.map((stat) => (
            <div key={stat.label} className="px-8 py-8 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold tabular-nums text-gradient">
                <CountUp value={stat.value} />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

/* --------------------------------------------------------------- Process */

export function Process() {
  const { t } = useLanguage();
  const steps = ['step1', 'step2', 'step3', 'step4'];

  return (
    <Section>
      <SectionHeading
        eyebrow={t('process.subtitle')}
        title={t('process.title')}
        highlight={t('process.titleHighlight')}
        description={t('process.description')}
      />

      <div className="relative mt-16">
        {/* Rail the steps hang from */}
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden lg:block h-px origin-left bg-gradient-to-r from-primary/60 via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />

        <motion.ol
          className="grid gap-10 lg:grid-cols-4 lg:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger()}
        >
          {steps.map((step, i) => (
            <motion.li key={step} variants={fadeUp} className="group relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl hairline bg-card font-mono text-sm font-medium text-primary transition-colors group-hover:border-primary/40">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 text-lg font-bold">{t(`process.${step}.title`)}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {t(`process.${step}.description`)}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- Tools */

export function Tools() {
  const { t, isRTL } = useLanguage();

  const output = [
    { label: t('tools.demo2'), meta: 'dns' },
    { label: t('tools.demo3'), meta: 'tls' },
    { label: t('tools.demo4'), meta: 'sec' },
    { label: t('tools.demo5'), meta: 'perf' },
  ];

  return (
    <Section className="bg-secondary/25" grid>
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>{t('tools.subtitle')}</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-[1.08]">
            {t('tools.title1')}
            <br />
            <span className="text-gradient">{t('tools.title2')}</span>
          </h2>
          <p className="mt-5 max-w-lg text-base md:text-lg leading-relaxed text-muted-foreground">
            {t('tools.description')}
          </p>

          <form action="https://tools.supernovasoft.com/tool/" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Globe className="pointer-events-none absolute top-1/2 -translate-y-1/2 start-4 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                name="q"
                placeholder={t('tools.placeholder')}
                aria-label={t('tools.placeholder')}
                className="w-full rounded-xl glass py-4 ps-11 pe-4 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <Button type="submit" size="lg" className="h-auto rounded-xl bg-gradient-primary px-8 py-4 hover:opacity-90">
              <Zap className="h-4 w-4" />
              {t('tools.analyze')}
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRTL ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div aria-hidden className="absolute -inset-6 bg-gradient-to-tr from-primary/15 to-accent2/15 blur-3xl" />

          <div dir="ltr" className="relative overflow-hidden rounded-2xl glass-card">
            <div className="flex items-center gap-2.5 hairline-b bg-secondary/40 px-4 py-3">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">query_engine.sh</span>
              <span className="ms-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                exit 0
              </span>
            </div>

            <motion.div
              className="space-y-2.5 p-6 font-mono text-sm"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={stagger(0.2)}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="text-foreground/80">analyze supernovasoft.com</span>
              </motion.div>

              {output.map((line) => (
                <motion.div key={line.meta} variants={fadeUp} className="flex items-start gap-2.5 ps-4 text-xs">
                  <span className="text-emerald-500">✓</span>
                  <span className="w-9 shrink-0 text-muted-foreground/60">{line.meta}</span>
                  <span className="text-muted-foreground">{line.label}</span>
                </motion.div>
              ))}

              <motion.div variants={fadeUp} className="flex items-center gap-2 pt-2">
                <span className="text-primary">$</span>
                <span className="inline-block h-4 w-2 animate-pulse bg-primary/70" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- Contact */

const SOCIALS = [
  { icon: Github, href: 'https://github.com/supernovasoft', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/Tarek_Kalaajy', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const FIELD_CLASS =
  'w-full rounded-xl hairline bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40';

export function Contact() {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    { icon: MapPin, title: t('contact.location'), value: t('contact.locationValue'), href: null },
    { icon: Mail, title: t('contact.email'), value: 'info@supernovasoft.com', href: 'mailto:info@supernovasoft.com' },
    { icon: PhoneIcon, title: t('contact.phone'), value: '+90 531 208 9995', href: 'tel:+905312089995' },
  ];

  return (
    <Section id="contact" grid>
      <SectionHeading
        eyebrow={t('contact.subtitle')}
        title={t('contact.title')}
        highlight={t('contact.titleHighlight')}
        description={t('contact.description')}
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <motion.div
          className="lg:col-span-2 space-y-3"
          initial={{ opacity: 0, x: isRTL ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactInfo.map((item) => {
            const inner = (
              <>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl hairline bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1 truncate font-medium transition-colors group-hover:text-primary">{item.value}</p>
                </div>
              </>
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                className="group flex items-center gap-4 rounded-xl hairline bg-card/40 p-4 transition-colors hover:bg-card"
              >
                {inner}
              </a>
            ) : (
              <div key={item.title} className="group flex items-center gap-4 rounded-xl hairline bg-card/40 p-4">
                {inner}
              </div>
            );
          })}

          <div className="pt-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {t('contact.social')}
            </p>
            <div className="mt-3 flex gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl hairline bg-card/40 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: isRTL ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="rounded-2xl glass-card p-7 md:p-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">{t('contact.form.name')}</label>
                <input id="name" name="name" type="text" required
                  placeholder={t('contact.form.namePlaceholder')} className={FIELD_CLASS} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">{t('contact.form.email')}</label>
                <input id="email" name="email" type="email" required
                  placeholder={t('contact.form.emailPlaceholder')} className={FIELD_CLASS} />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">{t('contact.form.subject')}</label>
              <input id="subject" name="subject" type="text" required
                placeholder={t('contact.form.subjectPlaceholder')} className={FIELD_CLASS} />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">{t('contact.form.message')}</label>
              <textarea id="message" name="message" rows={5} required
                placeholder={t('contact.form.messagePlaceholder')} className={`${FIELD_CLASS} resize-none`} />
            </div>

            <Button type="submit" size="lg" className="h-12 w-full rounded-xl bg-gradient-primary hover:opacity-90">
              <Mail className="h-4 w-4" />
              {t('contact.form.submit')}
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ Page */

export function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <TrustStrip />
      <Services />
      <Solutions />
      <Process />
      <Tools />
      <Contact />
    </div>
  );
}
