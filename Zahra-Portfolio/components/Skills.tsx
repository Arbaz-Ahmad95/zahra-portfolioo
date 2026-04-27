'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { RealisticIcon } from '@/components/ui/RealisticIcon'
import { ReactColoredIcon, OpenAIColoredIcon, PythonColoredIcon } from '@/components/ui/Icons'
import { useTheme } from '@/context/ThemeContext'
import { sectionLabelStyle, sectionH2Style } from '@/constants/tokens'
import { expertises } from '@/constants/data'

import { LampContainer } from '@/components/ui/lamp'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }
})

const IconMap = {
  react: (color: string) => <ReactColoredIcon size={28} color={color} />,
  openai: (color: string) => <OpenAIColoredIcon size={28} color={color} />,
  python: (color: string) => <PythonColoredIcon size={28} color={color} />,
}

export const Skills = () => {
  const { t } = useTheme()

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1, background: '#020617' }}>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ ...sectionLabelStyle, color: t.accent, textAlign: 'center', marginBottom: '12px' }}>My Expertise</p>
          <h2 style={{ 
            ...sectionH2Style, 
            backgroundImage: `linear-gradient(to bottom right, #cbd5e1, #64748b)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            fontSize: 'clamp(40px, 8vw, 80px)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            padding: '20px 0'
          }}>
            Core Specialities &<br />
            <span style={{ 
              display: 'inline-block', 
              backgroundImage: `linear-gradient(90deg, ${t.accent}, #3b82f6)`, 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>Procedure</span>
          </h2>
        </motion.div>
      </LampContainer>

      <div style={{ 
        padding: '0 clamp(24px,5vw,80px) 120px 24px', 
        maxWidth: '1280px', 
        margin: '-200px auto 0 auto', 
        position: 'relative', 
        zIndex: 100 
      }}>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        {expertises.map((ex, i) => (
          <motion.div 
            key={ex.title} 
            {...fadeUp(i * 0.1)} 
            style={{ 
              background: t.surface, border: `1px solid ${t.border}`, 
              borderRadius: '24px', padding: '32px', transition: 'all 0.3s' 
            }} 
            whileHover={{ y: -5 }}
          >
            <RealisticIcon color={ex.color} size={24}>
              {IconMap[ex.type as keyof typeof IconMap](ex.color)}
            </RealisticIcon>
            <h3 style={{ 
              fontSize: '20px', fontWeight: '900', marginTop: '24px', 
              marginBottom: '12px', color: t.text 
            }}>{ex.title}</h3>
            <p style={{ fontSize: '14px', color: t.textMuted, lineHeight: 1.6 }}>{ex.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  )
}
