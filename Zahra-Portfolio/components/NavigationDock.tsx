'use client'
import React from 'react'
import { Home, User, Zap, Briefcase, Mail, Star, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const dockItems = [
  { id: 'hero', name: 'Home', icon: <Home size={18} /> },
  { id: 'about', name: 'About', icon: <User size={18} /> },
  { id: 'skills', name: 'Expertise', icon: <Zap size={18} /> },
  { id: 'projects', name: 'Projects', icon: <Briefcase size={18} /> },
  { id: 'testimonials', name: 'Testimonials', icon: <Star size={18} /> },
  { id: 'contact', name: 'Contact', icon: <Mail size={18} /> }
]

export const NavigationDock = () => {
  const { theme, toggle, t } = useTheme()

  return (
    <div style={{ 
      position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', 
      background: t.dockBg, border: `1px solid ${t.dockBorder}`, backdropFilter: 'blur(20px)', 
      borderRadius: '24px', padding: '8px', display: 'flex', gap: '8px', 
      alignItems: 'center', zIndex: 2000, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' 
    }}>
      {dockItems.map(item => (
        <div key={item.id} className="dock-container" style={{ position: 'relative' }}>
          <a href={`#${item.id}`} className="dock-btn" style={{ 
            width: '40px', height: '40px', borderRadius: '14px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: t.text, transition: 'all 0.3s' 
          }}>
            {item.icon}
          </a>
          <div className="dock-tooltip" style={{ 
            position: 'absolute', bottom: 'calc(100% + 16px)', left: '50%', 
            transform: 'translateX(-50%) translateY(10px)', opacity: 0, 
            pointerEvents: 'none', background: t.headerBg, color: t.text, 
            padding: '6px 12px', borderRadius: '8px', fontSize: '12px', 
            fontWeight: 600, border: `1px solid ${t.border}`, 
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)', 
            backdropFilter: 'blur(10px)', whiteSpace: 'nowrap', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
          }}>
            {item.name}
          </div>
        </div>
      ))}
      <div style={{ width: '1px', height: '24px', background: t.border, margin: '0 4px' }} />
      <div className="dock-container" style={{ position: 'relative' }}>
        <button className="dock-btn" onClick={toggle} style={{ 
          width: '40px', height: '40px', borderRadius: '14px', border: 'none', 
          background: 'transparent', color: t.text, display: 'flex', 
          alignItems: 'center', justifyContent: 'center', cursor: 'pointer', 
          transition: 'all 0.3s' 
        }}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="dock-tooltip" style={{ 
          position: 'absolute', bottom: 'calc(100% + 16px)', left: '50%', 
          transform: 'translateX(-50%) translateY(10px)', opacity: 0, 
          pointerEvents: 'none', background: t.headerBg, color: t.text, 
          padding: '6px 12px', borderRadius: '8px', fontSize: '12px', 
          fontWeight: 600, border: `1px solid ${t.border}`, 
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)', 
          backdropFilter: 'blur(10px)', whiteSpace: 'nowrap', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
        }}>
          Theme
        </div>
      </div>
    </div>
  )
}
