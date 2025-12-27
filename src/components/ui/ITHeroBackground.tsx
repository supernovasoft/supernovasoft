import { useTheme } from '@/components/theme-provider';

// IT Sector and Technologies SVG for Hero Section
export function ITHeroBackground({ className }: { className?: string }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const primaryColor = isDark ? '#a78bfa' : '#7c3aed';
    const blueColor = isDark ? '#60a5fa' : '#3b82f6';
    const greenColor = isDark ? '#34d399' : '#10b981';
    const orangeColor = isDark ? '#fb923c' : '#f97316';
    const cyanColor = isDark ? '#22d3ee' : '#06b6d4';
    const pinkColor = isDark ? '#f472b6' : '#ec4899';

    return (
        <svg className={className} viewBox="0 0 1400 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            {/* Background grid */}
            <defs>
                <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke={primaryColor} strokeWidth="0.3" opacity="0.15" />
                </pattern>
                <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={isDark ? '#09090b' : '#ffffff'} stopOpacity="0" />
                    <stop offset="100%" stopColor={isDark ? '#09090b' : '#ffffff'} stopOpacity="0.8" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />

            {/* ==================== LEFT SIDE - AWS & Cloud ==================== */}

            {/* AWS Cloud Icon */}
            <g transform="translate(80, 120)">
                <path d="M0 40 Q30 20 60 40 Q80 25 100 40 Q110 30 130 40 Q140 50 130 65 L0 65 Q-15 55 0 40"
                    stroke={orangeColor} strokeWidth="2" fill="none" opacity="0.6" />
                <text x="65" y="55" textAnchor="middle" fill={orangeColor} fontSize="12" fontWeight="bold" opacity="0.7">AWS</text>
                {/* Server dots inside cloud */}
                <circle cx="40" cy="50" r="4" fill={orangeColor} opacity="0.5" />
                <circle cx="65" cy="45" r="4" fill={orangeColor} opacity="0.5" />
                <circle cx="90" cy="50" r="4" fill={orangeColor} opacity="0.5" />
            </g>

            {/* Docker Container */}
            <g transform="translate(60, 250)">
                <rect x="0" y="0" width="80" height="50" rx="4" stroke={cyanColor} strokeWidth="2" fill="none" opacity="0.5" />
                <rect x="10" y="10" width="15" height="30" rx="2" fill={cyanColor} opacity="0.3" />
                <rect x="32" y="10" width="15" height="30" rx="2" fill={cyanColor} opacity="0.3" />
                <rect x="54" y="10" width="15" height="30" rx="2" fill={cyanColor} opacity="0.3" />
                <text x="40" y="65" textAnchor="middle" fill={cyanColor} fontSize="10" opacity="0.6">Docker</text>
            </g>

            {/* Kubernetes */}
            <g transform="translate(180, 200)">
                <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" stroke={blueColor} strokeWidth="2" fill="none" opacity="0.5" />
                <circle cx="40" cy="40" r="15" stroke={blueColor} strokeWidth="1.5" fill="none" opacity="0.4" />
                <circle cx="40" cy="40" r="5" fill={blueColor} opacity="0.5" />
                <text x="40" y="100" textAnchor="middle" fill={blueColor} fontSize="10" opacity="0.6">K8s</text>
            </g>

            {/* ==================== RIGHT SIDE - Development ==================== */}

            {/* React Logo */}
            <g transform="translate(1200, 100)">
                <ellipse cx="50" cy="40" rx="40" ry="15" stroke={cyanColor} strokeWidth="2" fill="none" opacity="0.5" transform="rotate(0 50 40)" />
                <ellipse cx="50" cy="40" rx="40" ry="15" stroke={cyanColor} strokeWidth="2" fill="none" opacity="0.5" transform="rotate(60 50 40)" />
                <ellipse cx="50" cy="40" rx="40" ry="15" stroke={cyanColor} strokeWidth="2" fill="none" opacity="0.5" transform="rotate(-60 50 40)" />
                <circle cx="50" cy="40" r="8" fill={cyanColor} opacity="0.6" />
                <text x="50" y="75" textAnchor="middle" fill={cyanColor} fontSize="10" opacity="0.6">React</text>
            </g>

            {/* Node.js */}
            <g transform="translate(1250, 220)">
                <polygon points="40,0 80,25 80,70 40,95 0,70 0,25" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.5" />
                <text x="40" y="55" textAnchor="middle" fill={greenColor} fontSize="14" fontWeight="bold" opacity="0.6">N</text>
                <text x="40" y="115" textAnchor="middle" fill={greenColor} fontSize="10" opacity="0.5">Node.js</text>
            </g>

            {/* Python */}
            <g transform="translate(1100, 180)">
                <path d="M30 10 Q10 10 10 30 L10 50 Q10 70 30 70 L50 70 Q70 70 70 50 L70 30 Q70 10 50 10 Z"
                    stroke={blueColor} strokeWidth="2" fill="none" opacity="0.5" />
                <circle cx="25" cy="25" r="5" fill={blueColor} opacity="0.5" />
                <circle cx="55" cy="55" r="5" fill={orangeColor} opacity="0.5" />
                <text x="40" y="90" textAnchor="middle" fill={blueColor} fontSize="10" opacity="0.5">Python</text>
            </g>

            {/* ==================== CENTER - Network & Database ==================== */}

            {/* Central Server Hub */}
            <g transform="translate(650, 280)">
                <rect x="0" y="0" width="100" height="70" rx="6" stroke={primaryColor} strokeWidth="2" fill="none" opacity="0.4" />
                <line x1="10" y1="20" x2="90" y2="20" stroke={primaryColor} strokeWidth="1" opacity="0.3" />
                <line x1="10" y1="40" x2="90" y2="40" stroke={primaryColor} strokeWidth="1" opacity="0.3" />
                <circle cx="20" cy="10" r="3" fill={greenColor} opacity="0.7" />
                <circle cx="30" cy="10" r="3" fill={greenColor} opacity="0.7" />
                <circle cx="20" cy="30" r="3" fill={blueColor} opacity="0.6" />
                <circle cx="30" cy="30" r="3" fill={blueColor} opacity="0.6" />
                <circle cx="20" cy="50" r="3" fill={orangeColor} opacity="0.6" />
                <circle cx="30" cy="50" r="3" fill={orangeColor} opacity="0.6" />
                <text x="50" y="90" textAnchor="middle" fill={primaryColor} fontSize="10" opacity="0.5">Server</text>
            </g>

            {/* Database */}
            <g transform="translate(850, 300)">
                <ellipse cx="40" cy="15" rx="35" ry="12" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M5 15 L5 55 Q5 67 40 67 Q75 67 75 55 L75 15" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.5" />
                <ellipse cx="40" cy="55" rx="35" ry="12" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.3" />
                <text x="40" y="45" textAnchor="middle" fill={greenColor} fontSize="12" opacity="0.5">DB</text>
                <text x="40" y="90" textAnchor="middle" fill={greenColor} fontSize="10" opacity="0.4">PostgreSQL</text>
            </g>

            {/* Connection Lines from Server */}
            <path d="M750 315 Q800 290 850 315" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />
            <path d="M650 315 Q550 280 450 250" stroke={primaryColor} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.25" />
            <path d="M750 350 Q900 400 1100 220" stroke={blueColor} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.25" />

            {/* ==================== BOTTOM AREA - Security & API ==================== */}

            {/* API Gateway */}
            <g transform="translate(450, 480)">
                <rect x="0" y="0" width="120" height="40" rx="20" stroke={pinkColor} strokeWidth="2" fill="none" opacity="0.4" />
                <text x="60" y="28" textAnchor="middle" fill={pinkColor} fontSize="14" fontWeight="500" opacity="0.6">REST API</text>
                <line x1="0" y1="50" x2="0" y2="80" stroke={pinkColor} strokeWidth="1" opacity="0.3" />
                <line x1="60" y1="50" x2="60" y2="80" stroke={pinkColor} strokeWidth="1" opacity="0.3" />
                <line x1="120" y1="50" x2="120" y2="80" stroke={pinkColor} strokeWidth="1" opacity="0.3" />
            </g>

            {/* Security Shield */}
            <g transform="translate(750, 500)">
                <path d="M40 0 L75 15 L75 50 Q75 75 40 90 Q5 75 5 50 L5 15 Z"
                    stroke={greenColor} strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M25 50 L35 60 L55 35" stroke={greenColor} strokeWidth="3" fill="none" opacity="0.6" />
                <text x="40" y="110" textAnchor="middle" fill={greenColor} fontSize="10" opacity="0.5">SSL/TLS</text>
            </g>

            {/* CI/CD Pipeline */}
            <g transform="translate(900, 520)">
                <circle cx="20" cy="20" r="15" stroke={blueColor} strokeWidth="2" fill="none" opacity="0.4" />
                <path d="M40 20 L70 20" stroke={blueColor} strokeWidth="2" strokeDasharray="3 2" opacity="0.4" />
                <circle cx="90" cy="20" r="15" stroke={orangeColor} strokeWidth="2" fill="none" opacity="0.4" />
                <path d="M110 20 L140 20" stroke={orangeColor} strokeWidth="2" strokeDasharray="3 2" opacity="0.4" />
                <circle cx="160" cy="20" r="15" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.4" />
                <text x="20" y="25" textAnchor="middle" fill={blueColor} fontSize="8" opacity="0.5">Build</text>
                <text x="90" y="25" textAnchor="middle" fill={orangeColor} fontSize="8" opacity="0.5">Test</text>
                <text x="160" y="25" textAnchor="middle" fill={greenColor} fontSize="8" opacity="0.5">Deploy</text>
                <text x="90" y="60" textAnchor="middle" fill={blueColor} fontSize="10" opacity="0.4">CI/CD</text>
            </g>

            {/* ==================== TOP RIGHT - VoIP/Telecom ==================== */}

            {/* VoIP Symbol */}
            <g transform="translate(1100, 450)">
                <circle cx="40" cy="40" r="35" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.4" />
                <path d="M25 30 Q25 20 35 20 L45 20 L45 35 L35 35 Q25 35 25 30" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M45 20 Q55 25 55 40 Q55 55 45 60" stroke={greenColor} strokeWidth="2" fill="none" opacity="0.5" />
                <path d="M55 55 Q65 50 65 40 Q65 30 55 25" stroke={greenColor} strokeWidth="1.5" fill="none" opacity="0.4" />
                <text x="40" y="95" textAnchor="middle" fill={greenColor} fontSize="10" opacity="0.5">VoIP</text>
            </g>

            {/* ==================== FLOATING TECH ICONS ==================== */}

            {/* Git Branch */}
            <g transform="translate(300, 100)">
                <circle cx="15" cy="20" r="6" fill={orangeColor} opacity="0.5" />
                <line x1="15" y1="26" x2="15" y2="60" stroke={orangeColor} strokeWidth="2" opacity="0.4" />
                <circle cx="15" cy="65" r="6" fill={orangeColor} opacity="0.5" />
                <path d="M21 30 Q35 30 35 45" stroke={orangeColor} strokeWidth="2" fill="none" opacity="0.4" />
                <circle cx="35" cy="50" r="6" fill={orangeColor} opacity="0.5" />
                <text x="25" y="90" textAnchor="middle" fill={orangeColor} fontSize="10" opacity="0.4">Git</text>
            </g>

            {/* TypeScript */}
            <g transform="translate(1050, 600)">
                <rect x="0" y="0" width="50" height="50" rx="6" stroke={blueColor} strokeWidth="2" fill="none" opacity="0.4" />
                <text x="25" y="35" textAnchor="middle" fill={blueColor} fontSize="18" fontWeight="bold" opacity="0.5">TS</text>
            </g>

            {/* Terraform */}
            <g transform="translate(200, 550)">
                <polygon points="25,0 50,15 50,45 25,60 0,45 0,15" stroke={primaryColor} strokeWidth="2" fill="none" opacity="0.4" />
                <polygon points="25,20 40,28 40,44 25,52 10,44 10,28" fill={primaryColor} opacity="0.3" />
                <text x="25" y="80" textAnchor="middle" fill={primaryColor} fontSize="10" opacity="0.4">IaC</text>
            </g>

            {/* Bottom fade overlay */}
            <rect x="0" y="500" width="100%" height="300" fill="url(#fadeGradient)" />
        </svg>
    );
}
