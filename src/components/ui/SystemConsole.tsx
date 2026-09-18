import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Boxes, Cloud, Database, Globe2, ShieldCheck } from 'lucide-react';
import { StatusDot } from '@/components/ui/primitives';

/**
 * Hero centrepiece: a plausible operations console.
 * Deliberately technical and English-only — engineering dashboards are not localised,
 * and faking that is what makes these panels read as stock art.
 */

const LOG_LINES = [
  { t: 'deploy', msg: 'web-api@4f2c1b7 → eu-central-1', meta: '812ms', tone: 'ok' },
  { t: 'scale', msg: 'edge-workers 6 → 9 replicas', meta: 'auto', tone: 'info' },
  { t: 'health', msg: 'pbx-gateway probe 200 OK', meta: '41ms', tone: 'ok' },
  { t: 'cache', msg: 'purge cdn/assets/* (1.2k keys)', meta: '96ms', tone: 'info' },
  { t: 'secure', msg: 'TLS rotated · 3 certificates', meta: 'A+', tone: 'ok' },
  { t: 'db', msg: 'replica lag 18ms · failover armed', meta: 'ready', tone: 'ok' },
  { t: 'build', msg: 'pipeline #1842 passed 214 tests', meta: '2m 04s', tone: 'ok' },
] as const;

const NODES = [
  { icon: Globe2, label: 'Edge', sub: 'CDN / WAF' },
  { icon: Boxes, label: 'Services', sub: 'K8s · 9 pods' },
  { icon: Database, label: 'Data', sub: 'Multi-AZ' },
] as const;

const METRICS = [
  { label: 'Uptime', value: '99.98%', icon: Activity },
  { label: 'p95 latency', value: '128ms', icon: Cloud },
  { label: 'Threats blocked', value: '3.4k', icon: ShieldCheck },
] as const;

/** 24-point sparkline, deterministic so it never flickers between renders. */
const SPARK = [12, 15, 11, 18, 14, 20, 17, 23, 19, 26, 22, 28, 24, 30, 27, 33, 29, 35, 31, 38, 34, 40, 36, 43];

function Sparkline() {
  const max = Math.max(...SPARK);
  const points = SPARK.map((v, i) => `${(i / (SPARK.length - 1)) * 100},${40 - (v / max) * 34}`).join(' ');

  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-10 w-full">
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,40 ${points} 100,40`} fill="url(#spark-fill)" />
      <motion.polyline
        points={points}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      />
    </svg>
  );
}

/** Edge → Services → Data topology with packets travelling the links. */
function Topology() {
  return (
    <svg viewBox="0 0 340 92" className="w-full" role="img" aria-label="Edge to services to data topology">
      <defs>
        <linearGradient id="link" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(var(--accent-2))" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {[
        { id: 'a', d: 'M 92 46 L 135 46' },
        { id: 'b', d: 'M 205 46 L 248 46' },
      ].map((link) => (
        <g key={link.id}>
          <path d={link.d} stroke="url(#link)" strokeWidth="1.25" fill="none" />
          <path d={link.d} stroke="hsl(var(--primary))" strokeWidth="1" fill="none" className="animate-dash" opacity="0.5" />
          <circle r="2.4" fill="hsl(var(--accent-2))">
            <animateMotion dur="2.4s" repeatCount="indefinite" path={link.d} />
          </circle>
        </g>
      ))}

      {/* Centres land on 57 / 170 / 283, matching the 3-column label overlay */}
      {[22, 135, 248].map((x) => (
        <g key={x}>
          <rect
            x={x}
            y={22}
            width={70}
            height={48}
            rx={10}
            fill="hsl(var(--card))"
            stroke="hsl(var(--primary) / 0.28)"
            strokeWidth="1"
          />
          <rect x={x} y={22} width={70} height={48} rx={10} fill="hsl(var(--primary) / 0.05)" />
        </g>
      ))}
    </svg>
  );
}

export function SystemConsole() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setTick((n) => n + 1), 2400);
    return () => clearInterval(id);
  }, []);

  // Newest first, three visible
  const visible = Array.from({ length: 3 }, (_, i) => {
    const index = (tick - i + LOG_LINES.length * 100) % LOG_LINES.length;
    return { ...LOG_LINES[index], key: tick - i };
  });

  return (
    <div dir="ltr" className="relative">
      {/* Ambient light behind the panel */}
      <div aria-hidden className="absolute -inset-8 bg-gradient-to-tr from-primary/20 via-transparent to-accent2/20 blur-3xl opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ transformPerspective: 1200 }}
        className="relative rounded-2xl glass-card overflow-hidden"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 hairline-b bg-secondary/40">
          <div className="flex items-center gap-2.5 min-w-0">
            <StatusDot />
            <span className="font-mono text-xs text-foreground/80 truncate">supernova · control-plane</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground shrink-0">
            eu-central-1
          </span>
        </div>

        {/* Topology */}
        <div className="px-4 pt-5">
          <div className="relative">
            <Topology />
            <div className="absolute inset-0 grid grid-cols-3 items-center">
              {NODES.map((node) => (
                <div key={node.label} className="flex flex-col items-center gap-1 text-center">
                  <node.icon className="h-4 w-4 text-primary" />
                  <span className="font-mono text-[10px] font-medium leading-none">{node.label}</span>
                  <span className="font-mono text-[9px] leading-none text-muted-foreground">{node.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-px bg-[hsl(var(--hairline)/0.08)] mt-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-card/60 px-3 py-3">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <m.icon className="h-3 w-3" />
                <span className="font-mono text-[9px] uppercase tracking-wider truncate">{m.label}</span>
              </div>
              <p className="mt-1 font-display text-lg font-semibold tabular-nums">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Throughput sparkline */}
        <div className="px-4 pt-3">
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
            <span>requests / min</span>
            <span className="text-primary">+18.4%</span>
          </div>
          <Sparkline />
        </div>

        {/* Live log */}
        <div className="px-4 pb-4 pt-1 space-y-1.5 font-mono text-[11px]" aria-live="off">
          {/*
            Only the newest row remounts and animates in; the two below keep stable keys and
            no enter state, so a row is never left sitting at opacity 0 if animation is skipped.
          */}
          {visible.map((line, i) => (
            <motion.div
              key={i === 0 ? `live-${line.key}` : `row-${i}`}
              initial={i === 0 ? { opacity: 0, x: -8 } : false}
              animate={{ opacity: 1 - i * 0.3, x: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2"
            >
              <span className={line.tone === 'ok' ? 'text-emerald-500' : 'text-primary'}>
                {line.tone === 'ok' ? '✓' : '→'}
              </span>
              <span className="w-12 shrink-0 text-muted-foreground">{line.t}</span>
              <span className="truncate text-foreground/75">{line.msg}</span>
              <span className="ms-auto shrink-0 text-muted-foreground/70">{line.meta}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
