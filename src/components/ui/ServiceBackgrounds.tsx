/**
 * Decorative service motifs.
 * Colours come from CSS custom properties, so these follow the theme with no JS.
 */

const P = 'hsl(var(--primary))';
const A = 'hsl(var(--accent-2))';

type MotifProps = { className?: string };

/** Web & product: an abstracted interface being composed. */
export function WebMotif({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 240 140" fill="none" aria-hidden focusable="false">
      <rect x="28" y="20" width="184" height="104" rx="10" stroke={P} strokeOpacity="0.35" />
      <line x1="28" y1="42" x2="212" y2="42" stroke={P} strokeOpacity="0.22" />
      <circle cx="42" cy="31" r="2.5" fill={P} fillOpacity="0.5" />
      <circle cx="52" cy="31" r="2.5" fill={P} fillOpacity="0.35" />
      <circle cx="62" cy="31" r="2.5" fill={P} fillOpacity="0.25" />

      <rect x="40" y="54" width="56" height="58" rx="6" fill={P} fillOpacity="0.07" stroke={P} strokeOpacity="0.25" />
      <rect x="106" y="54" width="94" height="10" rx="3" fill={P} fillOpacity="0.35" />
      <rect x="106" y="72" width="70" height="8" rx="3" fill={A} fillOpacity="0.3" />
      <rect x="106" y="88" width="86" height="8" rx="3" fill={P} fillOpacity="0.18" />
      <rect x="106" y="104" width="44" height="8" rx="3" fill={P} fillOpacity="0.12" />

      <g className="animate-beam">
        <rect x="40" y="54" width="56" height="18" rx="6" fill={A} fillOpacity="0.22" />
      </g>
    </svg>
  );
}

/** Cloud & DevOps: a delivery pipeline feeding redundant regions. */
export function CloudMotif({ className }: MotifProps) {
  return (
    <svg className={className} viewBox="0 0 240 140" fill="none" aria-hidden focusable="false">
      <path d="M30 100 H210" stroke={P} strokeOpacity="0.2" />
      <path d="M30 100 H210" stroke={A} strokeOpacity="0.55" className="animate-dash" />

      {[48, 96, 144, 192].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="100" r="9" fill="hsl(var(--card))" stroke={P} strokeOpacity="0.45" />
          <circle cx={x} cy="100" r="3.5" fill={i === 3 ? A : P} fillOpacity="0.85" />
        </g>
      ))}

      <path
        d="M78 52c0-13 11-23 25-23 9 0 17 5 21 12 12 0 21 9 21 20s-9 20-21 20H84c-11 0-20-8-20-18 0-6 3-11 8-15"
        stroke={P}
        strokeOpacity="0.4"
        fill={P}
        fillOpacity="0.05"
      />
      <path d="M120 66v22" stroke={A} strokeOpacity="0.6" strokeDasharray="3 4" />
      <circle cx="120" cy="52" r="3" fill={A} />
    </svg>
  );
}

/** Telecom: carrier-grade voice, drawn as a waveform between two endpoints. */
export function TelecomMotif({ className }: MotifProps) {
  const bars = [14, 26, 40, 30, 52, 38, 60, 44, 32, 22, 36, 26, 16];
  return (
    <svg className={className} viewBox="0 0 240 140" fill="none" aria-hidden focusable="false">
      <circle cx="34" cy="70" r="14" stroke={P} strokeOpacity="0.4" fill={P} fillOpacity="0.06" />
      <circle cx="206" cy="70" r="14" stroke={A} strokeOpacity="0.45" fill={A} fillOpacity="0.06" />
      <circle cx="34" cy="70" r="4" fill={P} fillOpacity="0.8" />
      <circle cx="206" cy="70" r="4" fill={A} fillOpacity="0.8" />

      {bars.map((h, i) => {
        const x = 62 + i * 9.6;
        return (
          <rect
            key={x}
            x={x}
            y={70 - h / 2}
            width="3"
            height={h}
            rx="1.5"
            fill={i % 2 ? A : P}
            fillOpacity={0.25 + (h / 60) * 0.45}
          >
            <animate
              attributeName="height"
              values={`${h};${Math.max(8, h * 0.45)};${h}`}
              dur={`${1.6 + (i % 4) * 0.35}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values={`${70 - h / 2};${70 - Math.max(8, h * 0.45) / 2};${70 - h / 2}`}
              dur={`${1.6 + (i % 4) * 0.35}s`}
              repeatCount="indefinite"
            />
          </rect>
        );
      })}

      <path d="M20 52a20 20 0 0 1 0 36" stroke={P} strokeOpacity="0.3" />
      <path d="M220 52a20 20 0 0 0 0 36" stroke={A} strokeOpacity="0.3" />
    </svg>
  );
}
