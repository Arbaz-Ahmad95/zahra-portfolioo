'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

export const Vision = () => {
  const { t, theme } = useTheme()
  const isDark = theme === 'dark'

  // Only show in dark mode as requested, or use theme-appropriate colors
  // Use a high-contrast dark background for CTA impact
  const bgColor = "#030005"
  const textColor = "#ffffff"

  return (
    <section id="vision" style={{ background: bgColor }}>
      <WavyBackground 
        backgroundFill={bgColor}
        colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
        waveOpacity={0.3}
        blur={15}
        speed="slow"
      >
        <div style={{ textAlign: 'center', padding: '0 20px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              fontSize: 'clamp(40px, 8vw, 80px)', 
              fontWeight: '900', 
              color: textColor,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              marginBottom: '24px'
            }}
          >
            Ready to Start Your <br />
            <span style={{ 
              fontStyle: 'italic', 
              fontFamily: '"Playfair Display", serif',
              backgroundImage: `linear-gradient(90deg, ${t.accent}, #3b82f6)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Next Big Thing?</span>
          </motion.h2>
        </div>
      </WavyBackground>
    </section>
  )
}
