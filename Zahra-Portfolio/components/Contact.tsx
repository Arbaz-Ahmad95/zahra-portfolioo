'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { testimonialsData } from '@/constants/data'

export const Contact = () => {
  const { t, theme } = useTheme()
  const isDark = theme === 'dark'
  const [index, setIndex] = useState(0)

  // Cycle testimonials every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="contact" style={{
      background: isDark ? '#030005' : '#ffffff',
      padding: '0 24px 40px 24px',
      overflow: 'hidden'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.1fr',
        minHeight: '450px',
        borderRadius: '40px',
        overflow: 'hidden',
        background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
        border: `1px solid ${t.border}`,
        boxShadow: isDark ? '0 40px 100px rgba(0,0,0,0.5)' : '0 20px 50px rgba(0,0,0,0.05)'
      }}>
        {/* Left Side: Animated Gradient & Testimonials */}
        <div style={{
          position: 'relative',
          background: isDark
            ? 'linear-gradient(135deg, #0a050f 0%, #1a103d 50%, #030005 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px'
        }}>
          {/* Animated Blob Backdrops */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            style={{
              position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px',
              background: t.accent, filter: 'blur(100px)', borderRadius: '50%', opacity: isDark ? 0.2 : 0.15
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(30px)',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '32px',
                padding: '32px',
                maxWidth: '450px',
                position: 'relative',
                zIndex: 2,
                boxShadow: isDark ? '0 40px 100px rgba(0,0,0,0.4)' : '0 20px 50px rgba(0,0,0,0.05)'
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)" style={{ marginBottom: '24px' }}>
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C11.1216 21 8.017 18.8954 8.017 15V12C8.017 11.1046 8.91242 10.2092 10.017 10.2092H13.017C14.1216 10.2092 15.017 11.1046 15.017 12V15C15.017 16.1046 14.1216 17 13.017 17H11.017C11.017 18 12.017 19 14.017 19V21ZM5.017 21L5.017 18C5.017 16.8954 5.91242 16 7.017 16H10.017C11.1216 16 12.017 16.8954 12.017 18V21C12.017 22.1046 11.1216 23 10.017 23H7.017C5.91242 23 5.017 22.1046 5.017 21ZM5.017 21C2.12158 21 -1 18.8954 -1 15V12C-1 11.1046 0.89543 10.2092 2.017 10.2092H5.017C6.12158 10.2092 7.017 11.1046 7.017 12V15C7.017 16.1046 6.12158 17 5.017 17H3.017C3.017 18 4.017 19 6.017 19V21" />
              </svg>
              <p style={{
                fontSize: '20px',
                color: isDark ? '#fff' : '#1e1b4b',
                lineHeight: 1.6,
                fontWeight: '500',
                marginBottom: '20px'
              }}>
                "{testimonialsData[index].text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: testimonialsData[index].color,
                  display: 'flex', alignItems: 'center', justifySelf: 'center',
                  fontSize: '14px', fontWeight: 'bold', color: '#fff'
                }}>
                  {/* Placeholder for profile pic if available, otherwise initials */}
                  <span style={{ margin: '0 auto' }}>{testimonialsData[index].initials}</span>
                </div>
                <div>
                  <div style={{ color: isDark ? '#fff' : '#1e1b4b', fontWeight: '700', fontSize: '16px' }}>{testimonialsData[index].name}</div>
                  <div style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(30,27,75,0.6)', fontSize: '13px' }}>{testimonialsData[index].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Contact Form */}
        <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: t.text, marginBottom: '8px' }}>Contact Us</h2>
          <p style={{ color: t.textMuted, marginBottom: '20px', fontSize: '15px' }}>
            Reach out and we'll get back to you fast.
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <FormInput label="Full Name" placeholder="Zahra Fiaz" theme={t} />
            <FormInput label="Email address" placeholder="zahra@example.com" theme={t} />
            <FormInput label="Company" placeholder="Your Company Name" theme={t} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: t.text }}>Message</label>
              <textarea
                placeholder="Enter your message here"
                style={{
                  width: '100%', minHeight: '80px',
                  background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                  border: `1px solid ${t.border}`,
                  borderRadius: '12px', padding: '10px', color: t.text,
                  outline: 'none', transition: 'border-color 0.3s'
                }}
              />
            </div>

            <button style={{
              width: '100%',
              background: isDark ? '#fff' : '#000',
              color: isDark ? '#000' : '#fff',
              padding: '14px', borderRadius: '50px',
              fontWeight: '800', fontSize: '15px', border: 'none',
              cursor: 'pointer', transition: 'all 0.3s',
              marginTop: '4px'
            }}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

const FormInput = ({ label, placeholder, theme }: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '12px', fontWeight: '600', color: theme.text }}>{label}</label>
      <input
        placeholder={placeholder}
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.03)',
          border: `1px solid ${theme.border}`,
          borderRadius: '12px', padding: '12px', color: theme.text,
          outline: 'none', transition: 'border-color 0.3s',
          fontSize: '14px'
        }}
      />
    </div>
  )
}
