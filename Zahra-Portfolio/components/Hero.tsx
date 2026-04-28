'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

export const Hero = () => {
  const { t, theme } = useTheme()
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="hero" ref={heroRef} className="hero-section" style={{
      minHeight: '105vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      padding: '140px 40px', position: 'relative', zIndex: 1
    }}>
      <motion.div style={{ y: heroY, opacity: heroOpacity }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{
            fontSize: 'clamp(80px,16vw,190px)', fontWeight: '900',
            lineHeight: '0.85', letterSpacing: '-0.05em'
          }}
        >
          <span className="hero-title-main" style={{ 
            display: 'block', 
            color: t.text,
            textShadow: t.bg === '#fafafa' ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'
          }}>ZAHRA</span>
          <span className="hero-title-sub" style={{
            display: 'inline-block',
            fontStyle: 'italic',
            fontFamily: '"Playfair Display", serif',
            fontWeight: '700',
            backgroundImage: t.bg === '#fafafa'
              ? `linear-gradient(90deg, ${t.accent}, #2563eb, #0d9488, ${t.accent})`
              : `linear-gradient(90deg, ${t.accent}, #3b82f6, #14b8a6, ${t.accent})`,
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradShift 6s linear infinite',
            fontSize: 'clamp(62px,12vw,150px)',
            padding: '10px 0'
          }}>Fiaz</span>
        </motion.h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{ marginTop: '48px', maxWidth: '520px' }}
      >
        <h2 style={{
          fontSize: 'clamp(20px,4vw,32px)', fontWeight: '800',
          color: t.text, lineHeight: 1.1, marginBottom: '16px'
        }}>
          Web Developer & AI SaaS Builder
        </h2>
        <p style={{ 
          fontSize: '16.5px', 
          color: t.bg === '#fafafa' ? '#404040' : t.textMuted, 
          lineHeight: '1.7',
          fontWeight: t.bg === '#fafafa' ? '500' : '400'
        }}>
          I build high-performance web apps and AI-powered tools with clean, scalable code.
        </p>
      </motion.div>
    </section>
  )
}
