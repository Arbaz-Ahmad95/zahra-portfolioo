import React from 'react'

interface RealisticIconProps {
  children: React.ReactNode
  color: string
  size?: number
}

export const RealisticIcon = ({ children, color, size = 20 }: RealisticIconProps) => (
  <div style={{
    width: size * 2.2, height: size * 2.2, borderRadius: '16px', background: `${color}15`,
    display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${color}20`,
    boxShadow: `inset 0 0 12px ${color}10`, position: 'relative', overflow: 'hidden'
  }}>
    <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 30% 30%, ${color}20 0%, transparent 70%)` }} />
    <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
  </div>
)
