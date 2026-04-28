'use client'
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, useMotionValue } from 'framer-motion'
import { MacbookScroll } from '@/components/ui/macbook-scroll'
import { useTheme } from '@/context/ThemeContext'
import { sectionLabelStyle, sectionH2Style } from '@/constants/tokens'
import { projectsData } from '@/constants/data'

export const Projects = () => {
  const { t } = useTheme()
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  // MotionValue for the MacBook opening animation
  const lidProgress = useMotionValue(0)

  // We'll give each project 100vh of scroll space
  // Plus some initial space for the MacBook to open
  const projectScrollHeight = 100;
  const totalHeight = (projectsData.length * projectScrollHeight) + 100;

  // Calculate current project index and sub-progress
  const [index, setIndex] = useState(0)
  
  // Sub-progress for the current project's internal animation (zoom in/out)
  const [projectProgress, setProjectProgress] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Initial phase: Lid opens (0 to 0.15)
    if (latest < 0.15) {
      setIndex(0)
      const openingProg = latest / 0.15
      setProjectProgress(openingProg) 
      lidProgress.set(openingProg)
      return
    }

    lidProgress.set(1) // Keep lid open after initial phase

    // Projects phase (0.15 to 1.0)
    const adjustedLatest = (latest - 0.15) / 0.85
    const rawIndex = adjustedLatest * projectsData.length
    const currentIndex = Math.min(Math.floor(rawIndex), projectsData.length - 1)
    
    // Progress within the current project (0 to 1)
    const currentSubProgress = rawIndex % 1
    
    setIndex(currentIndex)
    setProjectProgress(currentSubProgress)
  })

  // We'll use the projectProgress to drive the zoom effect
  // We want a curve that goes: Zoom In (0.0 to 0.3) -> Stay (0.3 to 0.7) -> Zoom Out (0.7 to 1.0)
  const zoomScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.15 + (0.85/projectsData.length)*0.3, 0.15 + (0.85/projectsData.length)*0.7, 1],
    [0.6, 1, 1.2, 1.2, 1], // Simplified global zoom for now, we'll refine below
    { clamp: false }
  )

  // Better approach: Calculate a custom scale value based on sub-progress
  // Reduced zoom levels to prevent overlapping with UI elements
  const calculateScale = (subProg: number, isOpening: boolean) => {
    const baseVal = 0.65; // Zoomed out between projects
    const maxVal = 0.88;  // Maximum zoom to avoid clipping top of screen
    const diff = maxVal - baseVal;

    if (isOpening) return 0.4 + subProg * 0.25; // 0.4 to 0.65 during opening
    
    // For each project: baseVal -> maxVal (focus) -> baseVal (zoom out)
    if (subProg < 0.2) return baseVal + (subProg / 0.2) * diff; 
    if (subProg < 0.8) return maxVal; 
    return maxVal - ((subProg - 0.8) / 0.2) * diff; 
  }

  const currentScale = calculateScale(projectProgress, index === 0 && scrollYProgress.get() < 0.15)
  const project = projectsData[index]

  return (
    <section ref={sectionRef} id="projects" style={{ 
      position: 'relative', 
      height: `${totalHeight}vh`,
      background: t.bg === '#fafafa' ? '#f1f5f9' : 'transparent' 
    }}>
      {/* Static Heading */}
      <div style={{ textAlign: 'center', padding: '80px 24px 20px 24px' }}>
        <p style={{ ...sectionLabelStyle, color: t.accent, textAlign: 'center' }}>Selected Work</p>
        <h2 style={{ ...sectionH2Style, color: t.text, textAlign: 'center', fontSize: 'clamp(32px, 6vw, 54px)' }}>
          Projects built with<br />
          <span style={{
            display: 'inline-block',
            backgroundImage: `linear-gradient(90deg, ${t.accent}, #3b82f6)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Code & Craft</span>
        </h2>
      </div>

      <div style={{ 
        position: 'sticky', 
        top: 0, 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Project Info Badge - Moved higher to avoid dock */}
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            position: 'absolute', 
            bottom: '120px', 
            textAlign: 'center', 
            zIndex: 100,
            background: t.bg === '#fafafa' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(16px)',
            padding: '12px 28px',
            borderRadius: '50px',
            border: `1px solid ${t.accent}60`,
            boxShadow: t.bg === '#fafafa' 
              ? `0 10px 30px rgba(0,0,0,0.1), 0 0 20px ${t.accent}10`
              : `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${t.accent}10`
          }}
        >
          <span style={{ fontSize: '11px', color: t.accent, textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: '800', display: 'block', marginBottom: '2px' }}>
            {project.tag}
          </span>
          <h3 style={{ fontSize: '22px', fontWeight: '900', color: t.text, margin: 0 }}>
            {project.name}
          </h3>
        </motion.div>

        {/* The MacBook with external scale control */}
        <div style={{ 
          transform: `scale(${currentScale})`, 
          transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
          marginTop: '150px' // Increased margin to ensure top isn't cut off even at max zoom
        }}>
          <MacbookScroll
            key={`macbook-${project.id}`}
            scrollYProgress={lidProgress}
            src={project.image}
            showGradient={false}
            title={null}
            badge={null}
          />
        </div>
      </div>
    </section>
  )
}
