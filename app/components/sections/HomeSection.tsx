'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Terminal, Users, MapPin } from 'lucide-react'

interface HomeSectionProps {
  onBack: () => void
}

export default function HomeSection({ onBack }: HomeSectionProps) {
  return (
    <div className="min-h-screen p-8">
      <motion.button
        onClick={onBack}
        className="fixed top-8 left-8 glass-effect p-3 rounded-full text-neon hover:bg-neon/20 transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft size={24} />
      </motion.button>

      <div className="max-w-6xl mx-auto pt-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-neon mb-6 font-display">
            CYBER SECURITY
          </h1>
          <h2 className="text-3xl md:text-5xl text-white mb-8 font-display">
            SPECIALIST
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon to-cyber mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
            Advanced penetration testing, malware analysis, and security operations specialist with expertise in offensive security and defensive strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="glass-effect p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Terminal className="w-12 h-12 text-neon mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Penetration Testing</h3>
            <p className="text-gray-400 text-sm">Advanced offensive security operations and vulnerability assessments</p>
          </motion.div>

          <motion.div
            className="glass-effect p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Users className="w-12 h-12 text-cyber mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Security Operations</h3>
            <p className="text-gray-400 text-sm">24/7 monitoring, incident response, and threat hunting operations</p>
          </motion.div>

          <motion.div
            className="glass-effect p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Digital Forensics</h3>
            <p className="text-gray-400 text-sm">Malware analysis, digital investigation, and evidence recovery</p>
          </motion.div>
        </div>

        <motion.div
          className="glass-effect p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-neon mb-4 font-display">Mission Statement</h3>
              <p className="text-gray-300 mb-4 font-mono">
                Dedicated to securing digital infrastructure through advanced penetration testing, 
                comprehensive security assessments, and cutting-edge threat analysis.
              </p>
              <p className="text-gray-300 font-mono">
                Specializing in offensive security operations, malware reverse engineering, 
                and building resilient defense systems against emerging cyber threats.
              </p>
            </div>
            <div className="text-center">
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-full border-4 border-neon/30 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon/20 to-cyber/20 flex items-center justify-center">
                    <Terminal className="w-16 h-16 text-neon" />
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-neon/50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}