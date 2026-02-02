'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CyberNodeNetwork from './components/CyberNodeNetwork'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import CertificationsSection from './components/sections/CertificationsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'

export type SectionType = 'home' | 'about' | 'certifications' | 'projects' | 'contact' | 'network'

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionType>('network')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onBack={() => setActiveSection('network')} />
      case 'about':
        return <AboutSection onBack={() => setActiveSection('network')} />
      case 'certifications':
        return <CertificationsSection onBack={() => setActiveSection('network')} />
      case 'projects':
        return <ProjectsSection onBack={() => setActiveSection('network')} />
      case 'contact':
        return <ContactSection onBack={() => setActiveSection('network')} />
      default:
        return <CyberNodeNetwork onNodeClick={setActiveSection} />
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <motion.div
            className="w-20 h-20 border-4 border-neon border-t-transparent rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="text-neon font-mono text-lg"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            INITIALIZING SECURE CONNECTION...
          </motion.p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-dark relative">
      {/* Cyber Background */}
      <div className="fixed inset-0 z-0">
        <iframe
          src="https://cybermap.kaspersky.com/en/widget/dynamic/dark"
          className="w-full h-full opacity-25 pointer-events-none"
          style={{ filter: 'hue-rotate(180deg) saturate(1.5) brightness(0.8) blur(0.5px)' }}
        />
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}