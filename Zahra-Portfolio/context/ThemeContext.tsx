'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { Theme, tokens } from '@/constants/tokens'

type ThemeContextType = {
  theme: Theme
  toggle: () => void
  t: typeof tokens['dark']
}

const ThemeCtx = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme
    if (saved) setTheme(saved)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      // Apply theme to document element for global CSS
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme, mounted])

  const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  const t = tokens[theme]

  return (
    <ThemeCtx.Provider value={{ theme, toggle, t }}>
      {children}
    </ThemeCtx.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeCtx)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
