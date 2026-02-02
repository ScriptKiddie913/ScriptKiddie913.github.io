'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, User, Calendar, Target, Terminal } from 'lucide-react'

interface AboutSectionProps {
  onBack: () => void
}

export default function AboutSection({ onBack }: AboutSectionProps) {
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
          <div className="flex items-center justify-center mb-6">
            <User className="w-12 h-12 text-neon mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-neon font-display">
              System Profile
            </h1>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="glass-effect p-8 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-neon mb-6 font-display flex items-center">
              <Target className="mr-3" />
              Operational Expertise
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Penetration Testing</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div className="bg-neon h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Malware Analysis</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div className="bg-neon h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Digital Forensics</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div className="bg-neon h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Network Security</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div className="bg-neon h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Threat Hunting</span>
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div className="bg-neon h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-effect p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-neon mb-6 font-display flex items-center">
              <Calendar className="mr-3" />
              Mission Timeline
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-neon/30 pl-4">
                <h3 className="text-lg font-bold text-white">2024 - Present</h3>
                <p className="text-neon font-semibold">Senior Security Specialist</p>
                <p className="text-gray-400 text-sm">Advanced penetration testing and security operations</p>
              </div>
              <div className="border-l-2 border-neon/30 pl-4">
                <h3 className="text-lg font-bold text-white">2023 - 2024</h3>
                <p className="text-neon font-semibold">Cybersecurity Analyst</p>
                <p className="text-gray-400 text-sm">Incident response and threat analysis</p>
              </div>
              <div className="border-l-2 border-neon/30 pl-4">
                <h3 className="text-lg font-bold text-white">2022 - 2023</h3>
                <p className="text-neon font-semibold">Junior Security Researcher</p>
                <p className="text-gray-400 text-sm">Malware analysis and vulnerability research</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="glass-effect p-8 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-neon mb-6 font-display flex items-center">
            <Terminal className="mr-3" />
            Operational Philosophy
          </h2>
          <div className="bg-black/30 rounded-lg p-6 font-mono text-sm">
            <div className="text-green-400 mb-2">$ cat mission_statement.txt</div>
            <p className="text-gray-300 mb-4">
              &gt; Dedicated to advancing cybersecurity through ethical hacking,
              <br />
              &gt; comprehensive threat analysis, and innovative defense strategies.
              <br />
              &gt; Committed to protecting digital infrastructure and empowering
              <br />
              &gt; organizations against evolving cyber threats.
            </p>
            <div className="text-green-400 mb-2">$ cat core_values.txt</div>
            <p className="text-gray-300">
              &gt; [INTEGRITY] Ethical approach to security research and testing
              <br />
              &gt; [PRECISION] Methodical analysis and detailed reporting
              <br />
              &gt; [INNOVATION] Continuous learning and adaptation to emerging threats
              <br />
              &gt; [COLLABORATION] Knowledge sharing within the security community
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}