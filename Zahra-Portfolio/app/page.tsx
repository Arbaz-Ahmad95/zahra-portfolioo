'use client'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Vision } from '@/components/Vision'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { NavigationDock } from '@/components/NavigationDock'
import { useTheme } from '@/context/ThemeContext'

export default function PortfolioPage() {
  const { t } = useTheme()

  return (
    <main style={{ 
      background: t.bg, 
      color: t.text, 
      minHeight: '100vh', 
      transition: 'all 0.5s ease', 
      fontFamily: '"Inter", sans-serif' 
    }}>
      {/* Cinematic Backdrop */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: t.amb1, filter: 'blur(120px)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: t.amb2, filter: 'blur(120px)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(${t.dot} 1px, transparent 1px)`, backgroundSize: '40px 40px', opacity: 0.3 }} />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Vision />
      <Contact />
      <Footer />
      <NavigationDock />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=Playfair+Display:ital,wght@1,700&display=swap');
        
        @keyframes gradShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        * { box-sizing: border-box; scroll-behavior: smooth; margin: 0; padding: 0; }
        body { -webkit-font-smoothing: antialiased; }
        
        .dock-container:hover .dock-tooltip {
          opacity: 1 !important;
          transform: translateX(-50%) translateY(0) !important;
        }
        
        .dock-btn:hover {
          background: rgba(128, 128, 128, 0.1) !important;
        }
        
        .glass-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(120px);
          color: #fff;
          padding: 14px 30px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .glass-btn:hover {
          background: #fff;
          color: #000;
          box-shadow: 0 0 24px rgba(255, 255, 255, 0.4);
          transform: scale(1.02);
          border-color: #fff;
        }
        
        .glass-btn:hover svg {
          stroke: #000;
        }
        
        @media (max-width: 768px) {
          .site-header { padding: 0 20px !important; }
          .hero-section { padding: 100px 20px 60px 20px !important; }
          .bento-grid { display: flex !important; flex-direction: column !important; }
          .section-padding { padding: 80px 20px !important; }
          .contact-section { padding-bottom: 120px !important; }
          .responsive-grid { grid-template-columns: 1fr !important; }
          .contact-form-row { grid-template-columns: 1fr !important; }
          .hero-title-main { font-size: clamp(50px, 15vw, 190px) !important; }
          .hero-title-sub { font-size: clamp(38px, 12vw, 150px) !important; }
          
          .sticky-card { position: relative !important; top: auto !important; margin-bottom: 30px; }
          .projects-stack { padding-bottom: 0px !important; }
          .project-card { min-height: auto !important; padding: 40px 24px !important; justify-content: flex-start !important; }
          .project-title { font-size: clamp(32px, 10vw, 50px) !important; line-height: 1.1 !important; }
        }
      `}</style>
    </main>
  )
}