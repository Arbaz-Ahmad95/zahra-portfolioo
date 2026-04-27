"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
  scrollYProgress: externalProgress,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
  scrollYProgress?: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: internalProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollYProgress = externalProgress || internalProgress;
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScaleFactor(window.innerWidth / 850);
      } else {
        setScaleFactor(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lidRotate = useTransform(scrollYProgress, [0, 0.6], [-90, -10]);
  const baseScale = useTransform(scrollYProgress, [0, 0.6], [0.7 * scaleFactor, 1 * scaleFactor]);
  const translateY = useTransform(scrollYProgress, [0, 0.6], [100, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative min-h-[120vh] w-full flex flex-col items-center justify-start [perspective:1500px] py-10 overflow-hidden"
    >
      <motion.div style={{ opacity }} className="mb-10 text-center px-4 z-50">
        {title}
      </motion.div>

      <motion.div
        style={{
          scale: baseScale,
          y: translateY,
          rotateX: 10, // Slight viewing angle from above
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        {/* LID (SCREEN) */}
        <motion.div
          style={{
            rotateX: lidRotate,
            transformOrigin: "bottom",
            transformStyle: "preserve-3d",
          }}
          className="h-[32rem] w-[48rem] bg-[#010101] rounded-[24px] p-4 relative z-20 shadow-2xl border-[2px] border-white/10"
        >
          {/* Internal Bezel */}
          <div className="absolute inset-1 bg-black rounded-[20px] p-2 overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
             <div className="w-full h-full bg-[#050505] rounded-[16px] overflow-hidden relative">
                {src && (
                  <img
                    src={src}
                    alt="Screen content"
                    className="w-full h-full object-cover object-top brightness-[1.05] contrast-[1.02]"
                  />
                )}
                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                {showGradient && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                )}
             </div>
          </div>
          {/* Camera */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rounded-full border border-white/10" />
          {/* Lid Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/80 rounded-b-lg border-x border-b border-white/5" />
        </motion.div>

        {/* BODY (KEYBOARD) */}
        <div
          className="h-[32rem] w-[48rem] bg-[#1d1d1f] rounded-[24px] relative -mt-[1px] p-10 shadow-2xl"
          style={{
            transform: "rotateX(0deg)", // Base stays flat
            background: "linear-gradient(180deg, #272729 0%, #1d1d1f 100%)",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
          }}
        >
          {/* Keycaps and Trackpad */}
          <div className="w-full h-full flex flex-col items-center">
            {/* Keyboard Grid with Exact Reference Backlight */}
            <div className="w-full grid grid-rows-6 gap-2 px-6 relative py-4">
              {/* Intense Backlight Ambient Glow */}
              <div className="absolute inset-x-10 inset-y-5 bg-white/20 blur-3xl rounded-3xl pointer-events-none" />
              <div className="absolute inset-x-14 inset-y-8 bg-white/10 blur-[80px] rounded-3xl pointer-events-none" />
              
              {[
                ["esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "●"],
                ["~", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
                ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
                ["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "return"],
                ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"],
                ["fn", "ctrl", "opt", "cmd", " ", "cmd", "opt", "←", "↑", "↓", "→"]
              ].map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1.5 justify-center relative z-10">
                   {row.map((keyLabel, keyIndex) => (
                      <div 
                        key={keyIndex} 
                        className={cn(
                          "h-8 rounded-[4px] bg-[#050505] border-[1.2px] border-white/40 flex items-center justify-center relative overflow-hidden",
                          "shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_0_10px_rgba(255,255,255,0.15)]",
                          keyLabel === " " ? "w-60" : 
                          keyLabel === "delete" || keyLabel === "return" || keyLabel === "shift" || keyLabel === "caps" || keyLabel === "tab" ? "w-16" : "w-10"
                        )}
                      >
                        <span className="text-[6px] font-bold text-white/90 uppercase tracking-tighter">
                          {keyLabel}
                        </span>
                        {/* Key Inner Light Bleed */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
                        <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white/30 blur-[1px]" />
                      </div>
                   ))}
                </div>
              ))}
            </div>
            
            {/* Speakers on sides */}
            <div className="absolute left-8 top-12 bottom-40 w-12 flex flex-col gap-1 opacity-10">
               {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} className="h-[2px] w-full bg-black rounded-full" />
               ))}
            </div>
            <div className="absolute right-8 top-12 bottom-40 w-12 flex flex-col gap-1 opacity-10">
               {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} className="h-[2px] w-full bg-black rounded-full" />
               ))}
            </div>
            
            {/* Ambient Base Light (Highly Intense like reference) */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] h-40 bg-white/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Trackpad */}
            <div className="mt-8 w-64 h-32 bg-[#1a1a1a] rounded-2xl border-[1px] border-white/10 shadow-[inset_0_2px_15px_rgba(0,0,0,0.9),0_0_20px_rgba(255,255,255,0.03)] flex items-center justify-center relative overflow-hidden">
               <div className="w-[98%] h-[98%] rounded-2xl bg-gradient-to-b from-white/10 to-transparent" />
               <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/20 to-transparent blur-md opacity-60" />
            </div>
          </div>
          
          {/* Side Ports simulation */}
          <div className="absolute -left-1 top-20 w-1.5 h-12 bg-black/40 rounded-r-sm" />
          <div className="absolute -right-1 top-20 w-1.5 h-12 bg-black/40 rounded-l-sm" />
        </div>

        {badge && (
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-[100]">
            {badge}
          </div>
        )}
      </motion.div>
    </div>
  );
};
