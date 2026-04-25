'use client'
import React from 'react'
import { InstagramIcon, GithubIcon } from '@/components/ui/Icons'
import { useTheme } from '@/context/ThemeContext'

export const Navbar = () => {
  const { t } = useTheme()

  return (
    <header className="site-header" style={{ 
      position: 'fixed', top: 0, left: 0, right: 0, height: '80px', 
      background: t.headerBg, borderBottom: `1px solid ${t.headerBorder}`, 
      backdropFilter: 'blur(20px)', zIndex: 1000, 
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
      padding: '0 40px',
      transition: 'all 0.5s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ 
          width: '40px', height: '40px', borderRadius: '50%', 
          background: `linear-gradient(45deg, ${t.accent}, #3b82f6)`, padding: '2px' 
        }}>
          <img src="/avatar.png" style={{ 
            width: '100%', height: '100%', borderRadius: '50%', 
            objectFit: 'cover', background: t.bg 
          }} alt="Avatar" />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <a href="https://instagram.com/zahra_.dev" target="_blank" style={{ 
          width: '40px', height: '40px', borderRadius: '12px', background: t.surface, 
          color: t.text, display: 'flex', alignItems: 'center', justifyContent: 'center', 
          border: `1px solid ${t.border}` 
        }}><InstagramIcon /></a>
        <a href="https://github.com/Zahra-007" target="_blank" style={{ 
          width: '40px', height: '40px', borderRadius: '12px', background: t.surface, 
          color: t.text, display: 'flex', alignItems: 'center', justifyContent: 'center', 
          border: `1px solid ${t.border}` 
        }}><GithubIcon /></a>
      </div>
    </header>
  )
}
