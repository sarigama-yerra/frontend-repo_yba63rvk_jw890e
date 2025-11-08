import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft neon gradients behind content (non-interactive) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_10px_2px_rgba(167,139,250,0.8)]" />
            Live 3D • Interactive
          </motion.div>

          <motion.h1
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Build the next‑gen developer toolkit
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-white/70 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            A modern SaaS foundation with a sleek black and violet glow aesthetic. Minimal, fast, and crafted for teams who care about design and DX.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <a
              href="#features"
              className="inline-flex items-center rounded-full bg-violet-600 hover:bg-violet-500 px-6 py-3 text-white font-medium transition shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(139,92,246,0.8)]"
            >
              Get Started
            </a>
            <a
              href="#docs"
              className="inline-flex items-center rounded-full border border-white/10 hover:border-white/30 px-6 py-3 text-white/80 hover:text-white transition"
            >
              Learn More
            </a>
          </motion.div>

          {/* Floating badges for extra depth */}
          <motion.div
            className="mt-10 flex gap-3"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            {["Adaptive UI", "GPU-accelerated", "Neon-ready"].map((chip) => (
              <motion.span
                key={chip}
                className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70 backdrop-blur"
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
              >
                {chip}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          className="relative h-[28rem] sm:h-[32rem] lg:h-[36rem] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/30"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Spline
            scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Subtle glow frame */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-violet-500/20" />
          <div className="pointer-events-none absolute -inset-px rounded-2xl shadow-[0_0_80px_20px_rgba(139,92,246,0.15)]" />
        </motion.div>
      </div>
    </section>
  )
}
