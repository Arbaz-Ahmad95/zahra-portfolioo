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

  const darkBg = "#030005"
  const lightText = "#ffffff"
  const mutedText = "rgba(255,255,255,0.6)"

  return (
    <section id="contact" style={{
      background: darkBg,
      padding: '0 24px 40px 24px',
      overflow: 'hidden'
    }}>
      <div className="contact-grid" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        borderRadius: '40px',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid rgba(255,255,255,0.1)`,
        boxShadow: '0 40px 100px rgba(0,0,0,0.5)'
      }}>
        {/* Left Side: Animated Gradient & Testimonials */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(135deg, #0a050f 0%, #1a103d 50%, #030005 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          minHeight: '350px'
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
              background: t.accent, filter: 'blur(100px)', borderRadius: '50%', opacity: 0.2
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
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '32px',
                padding: '32px',
                maxWidth: '450px',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 40px 100px rgba(0,0,0,0.4)'
              }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)" style={{ marginBottom: '20px' }}>
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21C11.1216 21 8.017 18.8954 8.017 15V12C8.017 11.1046 8.91242 10.2092 10.017 10.2092H13.017C14.1216 10.2092 15.017 11.1046 15.017 12V15C15.017 16.1046 14.1216 17 13.017 17H11.017C11.017 18 12.017 19 14.017 19V21ZM5.017 21L5.017 18C5.017 16.8954 5.91242 16 7.017 16H10.017C11.1216 16 12.017 16.8954 12.017 18V21C12.017 22.1046 11.1216 23 10.017 23H7.017C5.91242 23 5.017 22.1046 5.017 21ZM5.017 21C2.12158 21 -1 18.8954 -1 15V12C-1 11.1046 0.89543 10.2092 2.017 10.2092H5.017C6.12158 10.2092 7.017 11.1046 7.017 12V15C7.017 16.1046 6.12158 17 5.017 17H3.017C3.017 18 4.017 19 6.017 19V21" />
              </svg>
              <p style={{
                fontSize: '18px',
                color: '#fff',
                lineHeight: 1.5,
                fontWeight: '500',
                marginBottom: '16px'
              }}>
                "{testimonialsData[index].text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: testimonialsData[index].color,
                  display: 'flex', alignItems: 'center', justifySelf: 'center',
                  fontSize: '12px', fontWeight: 'bold', color: '#fff'
                }}>
                  <span style={{ margin: '0 auto' }}>{testimonialsData[index].initials}</span>
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px' }}>{testimonialsData[index].name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>{testimonialsData[index].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Contact Form */}
        <div style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#fff', marginBottom: '8px' }}>Let's Connect</h2>
          <p style={{ color: mutedText, marginBottom: '24px', fontSize: '15px' }}>
            Fill out the form and I'll get back to you within 24 hours.
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FormInput label="Full Name" placeholder="Zahra Fiaz" theme={t} isDark={true} />
            <FormInput label="Email address" placeholder="zahra@example.com" theme={t} isDark={true} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: '600', color: '#fff', opacity: 0.8 }}>Message</label>
              <textarea
                placeholder="How can I help you?"
                style={{
                  width: '100%', minHeight: '120px',
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid rgba(255,255,255,0.1)`,
                  borderRadius: '16px', padding: '14px', color: '#fff',
                  outline: 'none', transition: 'all 0.3s',
                  fontSize: '14px'
                }}
              />
            </div>

            <button className="submit-btn" style={{
              width: '100%',
              background: '#fff',
              color: '#000',
              padding: '16px', borderRadius: '50px',
              fontWeight: '800', fontSize: '15px', border: 'none',
              cursor: 'pointer', transition: 'all 0.3s',
              marginTop: '8px'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          grid-template-columns: 1fr 1.1fr;
          min-height: 500px;
        }
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            border-radius: 24px;
          }
          .submit-btn:active {
            transform: scale(0.98);
          }
        }
        @media (max-width: 480px) {
          section {
            padding: 0 16px 40px 16px !important;
          }
        }
      `}</style>
    </section>
  )
}

const FormInput = ({ label, placeholder, theme, isDark }: any) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label style={{ fontSize: '12px', fontWeight: '600', color: '#fff', opacity: 0.8 }}>{label}</label>
      <input
        placeholder={placeholder}
        style={{
          width: '100%',
          background: 'rgba(255,255,255,0.05)',
          border: `1px solid rgba(255,255,255,0.1)`,
          borderRadius: '16px', padding: '14px', color: '#fff',
          outline: 'none', transition: 'all 0.3s',
          fontSize: '14px'
        }}
      />
    </div>
  )
}
