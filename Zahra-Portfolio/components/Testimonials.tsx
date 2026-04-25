'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { RealisticIcon } from '@/components/ui/RealisticIcon'
import { useTheme } from '@/context/ThemeContext'
import { sectionLabelStyle, sectionH2Style } from '@/constants/tokens'
import { testimonialsData } from '@/constants/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }
})

export const Testimonials = () => {
  const { t } = useTheme()

  return (
    <section id="testimonials" className="section-padding" style={{ 
      padding: 'clamp(80px,10vw,160px) clamp(24px,5vw,80px)', 
      maxWidth: '1280px', margin: '0 auto' 
    }}>
      <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '80px' }}>
        <p style={{ ...sectionLabelStyle, color: t.accent, textAlign: 'center' }}>Testimonials</p>
        <h2 style={{ ...sectionH2Style, color: t.text, textAlign: 'center' }}>
          Trusted by<br />
          <span style={{ 
            display: 'inline-block', 
            backgroundImage: `linear-gradient(90deg, ${t.accent}, #3b82f6)`, 
            WebkitBackgroundClip: 'text', 
            backgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>Real Clients</span>
        </h2>
      </motion.div>

      <div className="responsive-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
        gap: '24px' 
      }}>
        {testimonialsData.map((item, i) => (
          <motion.div 
            key={item.name} 
            {...fadeUp(i * 0.1)} 
            whileHover={{ y: -8 }} 
            style={{ 
              background: t.surfaceCard, border: `1px solid ${t.border}`, 
              borderRadius: '32px', padding: '40px', backdropFilter: 'blur(40px)', 
              position: 'relative', overflow: 'hidden' 
            }}
          >
            <Quote size={80} strokeWidth={0.5} color={`${item.color}20`} style={{ 
              position: 'absolute', top: '24px', right: '24px' 
            }} />
            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
              {Array.from({ length: 5 }).map((_, si) => (
                <Star key={si} size={16} fill={item.color} color={item.color} strokeWidth={0} />
              ))}
            </div>
            <p style={{ 
              fontSize: '17px', color: t.textMuted, lineHeight: '1.8', 
              fontStyle: 'italic', marginBottom: '32px' 
            }}>"{item.text}"</p>
            <div style={{ 
              display: 'flex', alignItems: 'center', gap: '16px', 
              borderTop: `1px solid ${t.border}`, paddingTop: '24px' 
            }}>
              <RealisticIcon color={item.color} size={24}>
                <span style={{ fontSize: '14px', fontWeight: '900', color: item.color }}>
                  {item.initials}
                </span>
              </RealisticIcon>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '900', color: t.text }}>{item.name}</div>
                <div style={{ fontSize: '12px', color: t.textFaint, fontWeight: '600' }}>{item.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
