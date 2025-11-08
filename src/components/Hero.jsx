import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Build the next-gen developer toolkit
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-xl">
            A modern SaaS foundation with a sleek black and violet glow aesthetic. Minimal, fast, and crafted for teams who care about design and DX.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#features" className="inline-flex items-center rounded-full bg-violet-600 hover:bg-violet-500 px-6 py-3 text-white font-medium transition shadow-[0_0_40px_rgba(139,92,246,0.6)]">
              Get Started
            </a>
            <a href="#docs" className="inline-flex items-center rounded-full border border-white/10 hover:border-white/30 px-6 py-3 text-white/80 hover:text-white transition">
              Learn More
            </a>
          </div>
        </div>
        <div className="relative h-[28rem] sm:h-[32rem] lg:h-[36rem] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
