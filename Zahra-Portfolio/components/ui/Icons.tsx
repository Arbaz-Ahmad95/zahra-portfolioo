import React from 'react'

export const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

export const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

export const ReactColoredIcon = ({ size = 24, color }: { size?: number, color: string }) => (
  <svg viewBox="-11.5 -10.232 23 20.463" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <circle cx="0" cy="0" r="2.05" fill={color} />
    <g stroke={color} strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

export const OpenAIColoredIcon = ({ size = 24, color }: { size?: number, color: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.54-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.67a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.87zm16.6 3.86L13.1 8.36 15.12 7.2a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.67zm2.01-3.02l-.14-.08-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.7 5.46a.79.79 0 0 0-.39.68zm1.1-2.37l2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5z" />
  </svg>
)

export const PythonColoredIcon = ({ size = 24, color }: { size?: number, color: string }) => (
  <svg viewBox="0 0 110 110" width={size} height={size} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M53.8,11.2c-21.6,0-20.5,9.4-20.5,9.4l0.1,9.8h21.1v3H33C21,33.4,18,41,18,54.5S20.7,76.5,33,76.5h6.4V65.8 c0-7.3,6.1-13.4,13.4-13.4h14.7V37.7C67.5,22.2,69.5,11.2,53.8,11.2z M45,21.5c2.3,0,4.2,1.9,4.2,4.2s-1.9,4.2-4.2,4.2 s-4.2-1.9-4.2-4.2S42.7,21.5,45,21.5z" />
    <path d="M55.8,98.8c21.6,0,20.5-9.4,20.5-9.4l-0.1-9.8H55.1v-3h21.4c12.1,0,15.1-7.7,15.1-21.2S88.9,33.5,76.6,33.5h-6.4v10.7 c0,7.3-6.1,13.4-13.4,13.4H42.1v14.7C42.1,87.8,40.1,98.8,55.8,98.8z M64.6,88.5c-2.3,0-4.2-1.9-4.2-4.2s1.9-4.2,4.2-4.2 s4.2,1.9,4.2,4.2S66.9,88.5,64.6,88.5z" />
  </svg>
)

export const GlobeColoredIcon = ({ size = 24, color }: { size?: number, color: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z" />
  </svg>
)

export const MailColoredIcon = ({ size = 24, color }: { size?: number, color: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M2.25 7.63v8.5c0 1.28 1.04 2.32 2.32 2.32h14.86a2.32 2.32 0 0 0 2.32-2.32v-8.5l-9.25 5.8a1 1 0 0 1-1 0L2.25 7.63Zm19.5-2.22A2.32 2.32 0 0 0 19.43 4H4.57c-.85 0-1.6.46-2 1.15l9.43 5.92 9.75-5.66Z" />
  </svg>
)
