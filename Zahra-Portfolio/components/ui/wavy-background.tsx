'use client'
import React, { useEffect, useRef, useState } from "react"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.005
      case "fast":
        return 0.01
      default:
        return 0.01
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let nt = 0

    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ]

    const render = () => {
      const w = canvas.width = window.innerWidth
      const h = canvas.height = window.innerHeight
      
      ctx.fillStyle = backgroundFill ?? "#030005"
      ctx.fillRect(0, 0, w, h)
      
      ctx.filter = `blur(${blur}px)`
      ctx.globalAlpha = waveOpacity

      nt += getSpeed()

      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.lineWidth = waveWidth ?? 50
        ctx.strokeStyle = waveColors[i % waveColors.length]
        
        for (let x = 0; x < w; x += 10) {
          // Simple sin wave animation as fallback for simplex noise
          const y = Math.sin(x / 400 + nt + i) * 100 + Math.cos(x / 600 + nt * 0.5) * 50
          ctx.lineTo(x, y + h * 0.5)
        }
        
        ctx.stroke()
        ctx.closePath()
      }

      animationId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [colors, waveWidth, backgroundFill, blur, speed, waveOpacity])

  return (
    <div
      style={{
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        ...containerClassName as any
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%'
        }}
      ></canvas>
      <div style={{ position: 'relative', zIndex: 1, ...className as any }} {...props}>
        {children}
      </div>
    </div>
  )
}
