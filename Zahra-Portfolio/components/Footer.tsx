'use client'
import React from 'react'
import { useTheme } from '@/context/ThemeContext'

export const Footer = () => {
  const { t } = useTheme()
  
  return (
    <footer style={{ 
      padding: '80px 40px', textAlign: 'center', 
      background: '#030005',
      color: 'rgba(255,255,255,0.4)', fontSize: '12px',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      © 2025 Zahra Fiaz · Web Developer & Shopify Expert · Lahore, Pakistan
    </footer>
  )
}
