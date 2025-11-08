import React from 'react'
import { Rocket, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Blazing Performance',
    description: 'Optimized UI kit with responsive layouts and minimal bundle size for instant load times.',
    icon: Zap,
  },
  {
    title: 'Secure by Design',
    description: 'Industry-standard best practices and components that put your users’ data first.',
    icon: Shield,
  },
  {
    title: 'Launch-Ready',
    description: 'Prebuilt patterns for auth, billing, and docs so you can ship faster than ever.',
    icon: Rocket,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/10 to-indigo-600/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {features.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative rounded-2xl border border-violet-500/30 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-[0_0_30px_rgba(139,92,246,0.25)] transform-gpu will-change-transform"
              whileHover={{ y: -4 }}
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_60px_10px_rgba(139,92,246,0.15)]" />
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 grid place-items-center rounded-xl bg-violet-600/20 border border-violet-500/40 text-violet-300 shadow-[0_0_24px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-white text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-4 text-white/70 text-sm leading-relaxed">{description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
              <div className="mt-4 flex items-center text-violet-300/80">
                <span className="text-xs">Hover for glow</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
