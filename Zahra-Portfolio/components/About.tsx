'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, ArrowRight } from 'lucide-react'
import { RealisticIcon } from '@/components/ui/RealisticIcon'
import { GlobeColoredIcon } from '@/components/ui/Icons'
import { useTheme } from '@/context/ThemeContext'
import { sectionLabelStyle, sectionH2Style } from '@/constants/tokens'
import { EMAIL, WA } from '@/constants/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const }
})

export const About = () => {
  const { t } = useTheme()
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className="section-padding" style={{
      padding: 'clamp(80px,10vw,160px) clamp(24px,5vw,80px)',
      maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1
    }}>
      <motion.div {...fadeUp()} style={{ textAlign: 'center', marginBottom: '80px' }}>
        <p style={{ ...sectionLabelStyle, color: t.accent, textAlign: 'center' }}>About Me</p>
        <h2 style={{ ...sectionH2Style, color: t.text, textAlign: 'center' }}>
          Engineering Modern <span style={{
            display: 'inline-block',
            backgroundImage: `linear-gradient(90deg, ${t.accent}, #3b82f6)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Web Experiences</span>
        </h2>
      </motion.div>

      <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
        {/* Bio Card */}
        <motion.div {...fadeUp(0.1)} style={{
          gridColumn: 'span 8', background: t.surfaceCard,
          border: `1px solid ${t.border}`, borderRadius: '32px',
          padding: '48px', position: 'relative', overflow: 'hidden',
          boxShadow: `0 20px 40px rgba(0,0,0,${t.bg === '#ffffff' ? '0.05' : '0.3'})`
        }}>
          <h3 style={{ fontSize: '32px', fontWeight: '900', color: t.text, marginBottom: '24px' }}>Zahra Fiaz</h3>
          <p style={{
            fontSize: '12px', color: t.accent, fontWeight: '800',
            textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px'
          }}>Web dev & AI tools</p>
          <p style={{ fontSize: '17px', color: t.textMuted, lineHeight: '1.8', maxWidth: '600px' }}>
            I'm a web developer focused on building high-performance applications and AI-powered tools. I specialize in modern SaaS products and chatbot interfaces, combining clean code, scalability, and intuitive user experience.
          </p>
        </motion.div>

        {/* Email Card */}
        <motion.div {...fadeUp(0.2)} onClick={copyEmail} style={{
          gridColumn: 'span 4', background: t.surface, border: `1px solid ${t.border}`,
          borderRadius: '32px', padding: '32px', cursor: 'pointer', transition: 'all 0.3s',
          display: 'flex', flexDirection: 'column', justifyContent: 'center'
        }}>
          <RealisticIcon color={t.accent} size={24}>
            {copied ? <Check size={24} color={t.accent} /> : <Copy size={24} color={t.accent} />}
          </RealisticIcon>
          <div style={{ marginTop: '24px' }}>
            <div style={{ fontSize: '11px', color: t.textMuted, fontWeight: '800', marginBottom: '8px' }}>DIRECT CONTACT</div>
            <div style={{ fontSize: '18px', fontWeight: '800', color: t.text }}>{EMAIL}</div>
            <div style={{ fontSize: '11px', color: t.accent, fontWeight: '600', marginTop: '4px' }}>{copied ? 'Copied!' : 'Tap to copy'}</div>
          </div>
        </motion.div>

        {/* Location Card */}
        <motion.div {...fadeUp(0.3)} style={{
          gridColumn: 'span 4', background: t.surface, border: `1px solid ${t.border}`,
          borderRadius: '32px', padding: '32px', display: 'flex', flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <RealisticIcon color={t.accent} size={24}>
            <GlobeColoredIcon size={28} color={t.accent} />
          </RealisticIcon>
          <div style={{ marginTop: '24px' }}>
            <div style={{ fontSize: '11px', color: t.textMuted, fontWeight: '800', marginBottom: '8px' }}>AVAILABLE GLOBALLY</div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: t.text }}>Lahore, Pakistan</div>
            <div style={{ fontSize: '11px', color: t.textFaint }}>GMT +5 · Open to remote</div>
          </div>
        </motion.div>

        {/* WhatsApp Card */}
        <motion.div {...fadeUp(0.4)} onClick={() => window.open(WA)} style={{
          gridColumn: 'span 4', background: t.surface, border: `1px solid ${t.border}`,
          borderRadius: '32px', padding: '32px', cursor: 'pointer', display: 'flex',
          flexDirection: 'column', justifyContent: 'center'
        }}>
          <RealisticIcon color="#10b981" size={24}>
            <img src="/whatsapp.png" alt="WhatsApp" style={{ width: 32, height: 32, objectFit: 'contain' }} />
          </RealisticIcon>
          <div style={{ marginTop: '24px' }}>
            <div style={{ fontSize: '11px', color: t.textMuted, fontWeight: '800', marginBottom: '8px' }}>INSTANT MESSAGE</div>
            <div style={{ fontSize: '20px', fontWeight: '800', color: t.text }}>
              Chat on WhatsApp <ArrowRight size={18} />
            </div>
          </div>
        </motion.div>

        {/* Philosophy Card */}
        <motion.div {...fadeUp(0.5)} style={{
          gridColumn: 'span 4', background: t.surfaceCard, border: `1px solid ${t.border}`,
          borderRadius: '32px', padding: '32px', display: 'flex', flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <p style={{ fontSize: '11px', color: t.textFaint, fontWeight: '800', marginBottom: '16px' }}>PHILOSOPHY</p>
          <p style={{ fontSize: '19px', fontWeight: '700', fontStyle: 'italic', lineHeight: 1.4, color: t.text }}>
            "Great design is invisible. Great code is maintainable. Great products are both."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
