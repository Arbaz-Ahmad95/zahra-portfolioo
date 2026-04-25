'use client'
import React from 'react'
import { useTheme } from '@/context/ThemeContext'

export const Footer = () => {
  const { t } = useTheme()
  
  return (
    <footer style={{ 
      padding: '80px 40px', textAlign: 'center', 
      borderTop: `1px solid ${t.border}`, color: t.textFaint, fontSize: '12px' 
    }}>
      © 2025 Zahra Fiaz · Web Developer & Shopify Expert · Lahore, Pakistan
    </footer>
  )
}
