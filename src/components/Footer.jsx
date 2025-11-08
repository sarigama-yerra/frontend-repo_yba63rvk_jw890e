import React from 'react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} NebulaKit. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-white/60 hover:text-white">Privacy</a>
          <a href="#" className="text-white/60 hover:text-white">Terms</a>
          <a href="#" className="text-white/60 hover:text-white">Status</a>
        </div>
      </div>
    </footer>
  )
}
