import React from 'react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-400 to-fuchsia-500 shadow-[0_0_20px_4px_rgba(168,85,247,0.6)]" />
          <span className="text-white font-semibold tracking-tight">NebulaKit</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
          <a href="#docs" className="text-white/70 hover:text-white transition">Docs</a>
          <button className="ml-2 inline-flex items-center rounded-full bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 transition shadow-[0_0_24px_rgba(139,92,246,0.6)]">
            Get Started
          </button>
        </nav>
        <button className="md:hidden inline-flex items-center rounded-md border border-white/10 px-3 py-2 text-white/80 hover:text-white">Menu</button>
      </div>
    </header>
  )
}
