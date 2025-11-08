import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Background glow gradients */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.14),transparent_45%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
