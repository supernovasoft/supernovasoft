import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, stagger } from '@/lib/motion';

/** Section wrapper: consistent rhythm + optional blueprint backdrop. */
export function Section({
  id,
  className,
  children,
  grid = false,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  grid?: boolean;
}) {
  return (
    <section id={id} className={cn('relative py-24 md:py-32 overflow-hidden', className)}>
      {grid && (
        <div aria-hidden className="absolute inset-0 grid-lines mask-fade pointer-events-none" />
      )}
      <div className="container relative z-10">{children}</div>
    </section>
  );
}

/** Small monospace label above a heading — reads as a system tag, not marketing. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary',
        className
      )}
    >
      <span className="h-px w-6 bg-gradient-to-r from-transparent to-primary" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'center' | 'start';
}) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-80px' }}
      variants={stagger()}
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-start'
      )}
    >
      <motion.div variants={fadeUp}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl md:text-5xl font-bold text-balance leading-[1.08]"
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-balance',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

/**
 * Card that tracks the pointer and lights a radial highlight under it.
 * Position is written to CSS vars so the highlight costs no React re-render.
 */
export function SpotlightCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onPointerMove={handleMove}
      className={cn(
        'group relative overflow-hidden rounded-2xl glass-card spotlight edge-glow transition-colors duration-300',
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/** Infinite horizontal track. Children are rendered twice so the loop is seamless. */
export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn('relative overflow-hidden mask-fade-x', className)}>
      <div
        className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        <div className="flex shrink-0 gap-3">{children}</div>
        <div className="flex shrink-0 gap-3" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Counts a numeric string up once when scrolled into view.
 * Non-numeric values ("24/7") are rendered as-is.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\D*?)(\d+(?:\.\d+)?)(.*)$/);
  const started = React.useRef(false);
  const [display, setDisplay] = React.useState(0);

  if (!match) return <span className={className}>{value}</span>;

  const [, prefix, numStr, suffix] = match;
  const target = parseFloat(numStr);
  const decimals = numStr.includes('.') ? 1 : 0;

  return (
    <motion.span
      className={className}
      viewport={{ once: true, margin: '-60px' }}
      onViewportEnter={() => {
        if (started.current) return;
        started.current = true;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setDisplay(target);
          return;
        }
        const duration = 1400;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          // ease-out so the number decelerates into place
          setDisplay(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }}
    >
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}

/** Live status dot with a ping halo. */
export function StatusDot({ className }: { className?: string }) {
  return (
    <span className={cn('relative flex h-2 w-2', className)}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
  );
}
