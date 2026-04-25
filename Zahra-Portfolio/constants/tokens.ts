export type Theme = 'dark' | 'light'

export const tokens = {
  dark: {
    bg: '#030005',
    surface: 'rgba(255,255,255,0.02)',
    surfaceCard: 'rgba(10,5,15,0.85)',
    border: 'rgba(255,255,255,0.06)',
    text: '#fdfcfd',
    textMuted: '#a1a1aa',
    textFaint: '#71717a',
    accent: '#c084fc',
    accentGlow: 'rgba(192,132,252,0.25)',
    dot: 'rgba(255,255,255,0.015)',
    dockBg: 'rgba(3,0,5,0.7)',
    dockBorder: 'rgba(255,255,255,0.08)',
    headerBg: 'rgba(3,0,5,0.85)',
    headerBorder: 'rgba(255,255,255,0.05)',
    amb1: 'rgba(192,132,252,0.12)',
    amb2: 'rgba(59,130,246,0.08)',
    cardProject: 'rgba(10,5,15,0.95)'
  },
  light: {
    bg: '#ffffff',
    surface: 'rgba(0,0,0,0.02)',
    surfaceCard: 'rgba(255,255,255,0.9)',
    border: 'rgba(0,0,0,0.06)',
    text: '#09090b',
    textMuted: '#4b5563',
    textFaint: '#9ca3af',
    accent: '#7c3aed',
    accentGlow: 'rgba(124,58,237,0.15)',
    dot: 'rgba(0,0,0,0.04)',
    dockBg: 'rgba(255,255,255,0.85)',
    dockBorder: 'rgba(0,0,0,0.08)',
    headerBg: 'rgba(255,255,255,0.9)',
    headerBorder: 'rgba(0,0,0,0.04)',
    amb1: 'rgba(124,58,237,0.08)',
    amb2: 'rgba(59,130,246,0.05)',
    cardProject: '#ffffff'
  }
}

export const sectionLabelStyle = { 
  fontSize: '11px', 
  fontWeight: '800', 
  letterSpacing: '0.2em', 
  textTransform: 'uppercase' as const, 
  marginBottom: '12px' 
}

export const sectionH2Style = { 
  fontSize: 'clamp(32px, 8vw, 64px)', 
  fontWeight: '900', 
  letterSpacing: '-0.04em', 
  lineHeight: 1.1 
}
