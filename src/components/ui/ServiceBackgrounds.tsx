import { useTheme } from '@/components/theme-provider';

// Abstract code/web development illustration
export function WebDevSVG({ className }: { className?: string }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const primaryColor = isDark ? '#a78bfa' : '#7c3aed';
    const secondaryColor = isDark ? '#8b5cf6' : '#6d28d9';
    const accentColor = isDark ? 'rgba(167, 139, 250, 0.15)' : 'rgba(124, 58, 237, 0.1)';

    return (
        <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Code brackets */}
            <path d="M80 60 L40 150 L80 240" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M320 60 L360 150 L320 240" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />

            {/* Browser window */}
            <rect x="100" y="80" width="200" height="140" rx="8" stroke={secondaryColor} strokeWidth="2" fill={accentColor} />
            <circle cx="120" cy="95" r="4" fill="#ef4444" />
            <circle cx="136" cy="95" r="4" fill="#eab308" />
            <circle cx="152" cy="95" r="4" fill="#22c55e" />
            <line x1="100" y1="110" x2="300" y2="110" stroke={secondaryColor} strokeWidth="1" opacity="0.5" />

            {/* Code lines inside browser */}
            <rect x="120" y="125" width="80" height="6" rx="2" fill={primaryColor} opacity="0.7" />
            <rect x="120" y="140" width="120" height="6" rx="2" fill={secondaryColor} opacity="0.5" />
            <rect x="140" y="155" width="100" height="6" rx="2" fill={primaryColor} opacity="0.6" />
            <rect x="140" y="170" width="60" height="6" rx="2" fill={secondaryColor} opacity="0.4" />
            <rect x="120" y="185" width="90" height="6" rx="2" fill={primaryColor} opacity="0.5" />

            {/* Floating elements */}
            <circle cx="50" cy="80" r="8" fill={primaryColor} opacity="0.3" />
            <circle cx="350" cy="100" r="12" fill={secondaryColor} opacity="0.25" />
            <rect x="60" y="200" width="20" height="20" rx="4" fill={primaryColor} opacity="0.2" transform="rotate(15 70 210)" />
            <polygon points="340,220 360,250 320,250" fill={secondaryColor} opacity="0.2" />
        </svg>
    );
}

// Cloud and network illustration
export function CloudSVG({ className }: { className?: string }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const primaryColor = isDark ? '#60a5fa' : '#3b82f6';
    const secondaryColor = isDark ? '#38bdf8' : '#0ea5e9';
    const accentColor = isDark ? 'rgba(96, 165, 250, 0.15)' : 'rgba(59, 130, 246, 0.1)';

    return (
        <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Main cloud shape */}
            <path d="M280 180 C280 150 250 130 210 130 C190 100 150 90 120 110 C80 110 60 140 60 170 C40 175 30 195 40 215 C50 240 90 250 120 250 L280 250 C320 250 340 220 340 190 C340 165 315 150 280 180"
                fill={accentColor} stroke={primaryColor} strokeWidth="2" />

            {/* Network nodes */}
            <circle cx="120" cy="180" r="15" fill={secondaryColor} opacity="0.6" />
            <circle cx="200" cy="160" r="18" fill={primaryColor} opacity="0.7" />
            <circle cx="280" cy="190" r="12" fill={secondaryColor} opacity="0.5" />
            <circle cx="160" cy="210" r="10" fill={primaryColor} opacity="0.4" />
            <circle cx="240" cy="220" r="14" fill={secondaryColor} opacity="0.5" />

            {/* Network connections */}
            <line x1="120" y1="180" x2="200" y2="160" stroke={primaryColor} strokeWidth="2" opacity="0.4" />
            <line x1="200" y1="160" x2="280" y2="190" stroke={primaryColor} strokeWidth="2" opacity="0.4" />
            <line x1="120" y1="180" x2="160" y2="210" stroke={secondaryColor} strokeWidth="1.5" opacity="0.3" />
            <line x1="160" y1="210" x2="240" y2="220" stroke={secondaryColor} strokeWidth="1.5" opacity="0.3" />
            <line x1="200" y1="160" x2="240" y2="220" stroke={primaryColor} strokeWidth="1.5" opacity="0.3" />

            {/* Server racks below */}
            <rect x="130" y="270" width="35" height="25" rx="3" stroke={primaryColor} strokeWidth="1.5" fill={accentColor} />
            <rect x="180" y="270" width="35" height="25" rx="3" stroke={primaryColor} strokeWidth="1.5" fill={accentColor} />
            <rect x="230" y="270" width="35" height="25" rx="3" stroke={primaryColor} strokeWidth="1.5" fill={accentColor} />

            {/* Connection lines to servers */}
            <line x1="147" y1="250" x2="147" y2="270" stroke={secondaryColor} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
            <line x1="197" y1="250" x2="197" y2="270" stroke={secondaryColor} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
            <line x1="247" y1="250" x2="247" y2="270" stroke={secondaryColor} strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />

            {/* Floating data packets */}
            <rect x="80" y="60" width="8" height="8" rx="2" fill={primaryColor} opacity="0.4" transform="rotate(45 84 64)" />
            <rect x="320" y="80" width="10" height="10" rx="2" fill={secondaryColor} opacity="0.3" transform="rotate(30 325 85)" />
            <circle cx="350" cy="140" r="5" fill={primaryColor} opacity="0.3" />
        </svg>
    );
}

// Telecommunication/network illustration
export function TelecomSVG({ className }: { className?: string }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const primaryColor = isDark ? '#34d399' : '#10b981';
    const secondaryColor = isDark ? '#2dd4bf' : '#14b8a6';
    const accentColor = isDark ? 'rgba(52, 211, 153, 0.15)' : 'rgba(16, 185, 129, 0.1)';

    return (
        <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Central globe */}
            <circle cx="200" cy="150" r="70" stroke={primaryColor} strokeWidth="2" fill={accentColor} />
            <ellipse cx="200" cy="150" rx="70" ry="25" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.5" />
            <ellipse cx="200" cy="150" rx="25" ry="70" stroke={secondaryColor} strokeWidth="1" fill="none" opacity="0.5" />

            {/* Signal waves */}
            <path d="M200 70 Q230 40 270 50" stroke={primaryColor} strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M200 60 Q240 25 290 40" stroke={primaryColor} strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M200 50 Q250 10 310 30" stroke={primaryColor} strokeWidth="1" fill="none" opacity="0.2" />

            {/* Connection points around globe */}
            <circle cx="140" cy="120" r="8" fill={primaryColor} opacity="0.8" />
            <circle cx="260" cy="130" r="8" fill={secondaryColor} opacity="0.7" />
            <circle cx="180" cy="200" r="6" fill={primaryColor} opacity="0.6" />
            <circle cx="240" cy="190" r="7" fill={secondaryColor} opacity="0.6" />
            <circle cx="200" cy="85" r="6" fill={primaryColor} opacity="0.7" />

            {/* Phone/headset icon */}
            <path d="M60 200 Q60 180 75 175 L85 175 L85 205 L75 205 Q60 200 60 200" stroke={primaryColor} strokeWidth="2" fill={accentColor} />
            <path d="M85 175 Q120 160 120 190 Q120 220 85 205" stroke={primaryColor} strokeWidth="2" fill="none" />

            {/* Satellite */}
            <rect x="310" y="60" width="40" height="20" rx="3" fill={accentColor} stroke={secondaryColor} strokeWidth="1.5" />
            <line x1="295" y1="70" x2="310" y2="70" stroke={secondaryColor} strokeWidth="2" />
            <line x1="350" y1="70" x2="365" y2="70" stroke={secondaryColor} strokeWidth="2" />
            <rect x="285" y="65" width="10" height="10" rx="1" fill={primaryColor} opacity="0.5" />
            <rect x="365" y="65" width="10" height="10" rx="1" fill={primaryColor} opacity="0.5" />

            {/* Data flow lines */}
            <path d="M85 190 Q140 170 140 120" stroke={secondaryColor} strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
            <path d="M330 80 Q290 100 260 130" stroke={primaryColor} strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />

            {/* Network tower */}
            <polygon points="50,280 65,240 80,280" fill={accentColor} stroke={primaryColor} strokeWidth="1.5" />
            <line x1="65" y1="240" x2="65" y2="220" stroke={primaryColor} strokeWidth="2" />
            <circle cx="65" cy="215" r="5" fill={secondaryColor} opacity="0.7" />

            {/* Sound waves from tower */}
            <path d="M75 215 Q85 200 75 185" stroke={primaryColor} strokeWidth="1" fill="none" opacity="0.5" />
            <path d="M80 220 Q95 200 80 180" stroke={primaryColor} strokeWidth="1" fill="none" opacity="0.3" />
        </svg>
    );
}

// Combined tech background with all elements
export function TechBackgroundSVG({ className }: { className?: string }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const primaryColor = isDark ? '#a78bfa' : '#7c3aed';
    const blueColor = isDark ? '#60a5fa' : '#3b82f6';
    const greenColor = isDark ? '#34d399' : '#10b981';

    return (
        <svg className={className} viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            {/* Grid pattern */}
            <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke={primaryColor} strokeWidth="0.5" opacity="0.25" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Geometric shapes - Web Dev themed (left) */}
            <path d="M100 100 L60 200 L100 300" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
            <path d="M180 100 L220 200 L180 300" stroke={primaryColor} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
            <rect x="80" y="150" width="100" height="80" rx="8" stroke={primaryColor} strokeWidth="2" fill="none" opacity="0.4" />
            <rect x="100" y="180" width="60" height="6" rx="2" fill={primaryColor} opacity="0.5" />
            <rect x="100" y="200" width="40" height="6" rx="2" fill={primaryColor} opacity="0.4" />

            {/* Cloud themed (center) */}
            <circle cx="600" cy="300" r="100" stroke={blueColor} strokeWidth="2" fill="none" opacity="0.4" />
            <circle cx="600" cy="300" r="70" stroke={blueColor} strokeWidth="1.5" fill="none" opacity="0.3" />
            <circle cx="600" cy="300" r="40" stroke={blueColor} strokeWidth="1" fill="none" opacity="0.25" />
            <circle cx="540" cy="260" r="15" fill={blueColor} opacity="0.5" />
            <circle cx="670" cy="330" r="12" fill={blueColor} opacity="0.45" />
            <circle cx="570" cy="360" r="10" fill={blueColor} opacity="0.4" />
            <line x1="540" y1="260" x2="600" y2="300" stroke={blueColor} strokeWidth="2" opacity="0.4" />
            <line x1="600" y1="300" x2="670" y2="330" stroke={blueColor} strokeWidth="2" opacity="0.4" />
            <line x1="570" y1="360" x2="600" y2="300" stroke={blueColor} strokeWidth="1.5" opacity="0.35" />

            {/* Telecom themed (right) */}
            <circle cx="1000" cy="200" r="70" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.45" />
            <ellipse cx="1000" cy="200" rx="70" ry="25" stroke={greenColor} strokeWidth="1.5" fill="none" opacity="0.35" />
            <path d="M1025 150 Q1060 125 1100 140" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M1035 130 Q1080 100 1120 120" stroke={greenColor} strokeWidth="1.5" fill="none" opacity="0.4" />
            <circle cx="960" cy="175" r="8" fill={greenColor} opacity="0.6" />
            <circle cx="1040" cy="220" r="6" fill={greenColor} opacity="0.5" />

            {/* Floating dots and shapes */}
            <circle cx="300" cy="450" r="20" fill={primaryColor} opacity="0.3" />
            <circle cx="900" cy="500" r="25" fill={blueColor} opacity="0.25" />
            <circle cx="1100" cy="400" r="18" fill={greenColor} opacity="0.35" />
            <rect x="400" y="100" width="40" height="40" rx="8" fill={primaryColor} opacity="0.25" transform="rotate(30 420 120)" />
            <polygon points="800,60 830,120 770,120" fill={blueColor} opacity="0.25" />

            {/* Connection lines */}
            <path d="M200 400 Q400 480 550 400" stroke={primaryColor} strokeWidth="2" strokeDasharray="8 6" opacity="0.35" />
            <path d="M650 400 Q850 480 950 280" stroke={blueColor} strokeWidth="2" strokeDasharray="8 6" opacity="0.35" />
        </svg>
    );
}

// Hero section abstract background
export function HeroBackgroundSVG({ className }: { className?: string }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const primaryColor = isDark ? '#a78bfa' : '#7c3aed';
    const secondaryColor = isDark ? '#c4b5fd' : '#a78bfa';

    return (
        <svg className={className} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            {/* Abstract geometric pattern */}
            <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={primaryColor} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.1" />
                </linearGradient>
            </defs>

            {/* Large decorative circles */}
            <circle cx="700" cy="100" r="200" stroke={primaryColor} strokeWidth="1" fill="none" opacity="0.1" />
            <circle cx="700" cy="100" r="150" stroke={secondaryColor} strokeWidth="0.5" fill="none" opacity="0.08" />
            <circle cx="100" cy="500" r="180" stroke={primaryColor} strokeWidth="1" fill="none" opacity="0.1" />

            {/* Hexagon pattern */}
            <polygon points="400,50 450,80 450,140 400,170 350,140 350,80" stroke={primaryColor} strokeWidth="1" fill="none" opacity="0.15" />
            <polygon points="500,100 550,130 550,190 500,220 450,190 450,130" stroke={secondaryColor} strokeWidth="0.5" fill="none" opacity="0.1" />

            {/* Circuit-like lines */}
            <path d="M0 300 L100 300 L150 250 L300 250 L350 300 L500 300" stroke={primaryColor} strokeWidth="1" fill="none" opacity="0.1" />
            <path d="M300 400 L400 400 L450 350 L550 350 L600 400 L800 400" stroke={secondaryColor} strokeWidth="0.5" fill="none" opacity="0.08" />

            {/* Nodes on circuit */}
            <circle cx="150" cy="250" r="4" fill={primaryColor} opacity="0.2" />
            <circle cx="350" cy="300" r="4" fill={primaryColor} opacity="0.2" />
            <circle cx="450" cy="350" r="3" fill={secondaryColor} opacity="0.15" />

            {/* Floating particles */}
            <circle cx="600" cy="450" r="3" fill={primaryColor} opacity="0.3" />
            <circle cx="200" cy="150" r="2" fill={secondaryColor} opacity="0.25" />
            <circle cx="650" cy="300" r="4" fill={primaryColor} opacity="0.2" />
            <circle cx="100" cy="350" r="2" fill={secondaryColor} opacity="0.2" />
        </svg>
    );
}
