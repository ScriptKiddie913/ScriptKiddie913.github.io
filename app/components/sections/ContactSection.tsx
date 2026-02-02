'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Send, Shield, CheckCircle, AlertTriangle } from 'lucide-react'

interface ContactSectionProps {
  onBack: () => void
}

export default function ContactSection({ onBack }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

      <div className="max-w-4xl mx-auto pt-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-12 h-12 text-neon mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-neon font-display">
              Secure Channel
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-mono">
            Establish encrypted communication for professional inquiries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            className="glass-effect p-8 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-neon mb-6 font-display flex items-center">
              <Shield className="mr-3" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-neon/50 pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">Professional Services</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Penetration Testing & Security Assessments</li>
                  <li>• Malware Analysis & Digital Forensics</li>
                  <li>• Security Architecture Consulting</li>
                  <li>• Incident Response & Threat Hunting</li>
                  <li>• Cybersecurity Training & Workshops</li>
                </ul>
              </div>

              <div className="border-l-4 border-cyber/50 pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                <p className="text-gray-300 text-sm">
                  • Standard Inquiries: 24-48 hours
                  <br />
                  • Urgent Security Matters: 2-4 hours
                  <br />
                  • Emergency Response: Immediate
                </p>
              </div>

              <div className="border-l-4 border-yellow-500/50 pl-4">
                <h3 className="text-lg font-semibold text-white mb-2">Security Notice</h3>
                <p className="text-gray-300 text-sm">
                  All communications are encrypted and handled with strict confidentiality. 
                  For sensitive matters, PGP encryption is available upon request.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-effect p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-neon font-semibold mb-2 font-mono">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-neon/30 rounded-lg p-3 text-white focus:border-neon focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-neon font-semibold mb-2 font-mono">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-neon/30 rounded-lg p-3 text-white focus:border-neon focus:outline-none transition-colors"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div>
                <label className="block text-neon font-semibold mb-2 font-mono">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-neon/30 rounded-lg p-3 text-white focus:border-neon focus:outline-none transition-colors"
                  placeholder="Brief description of your inquiry"
                />
              </div>

              <div>
                <label className="block text-neon font-semibold mb-2 font-mono">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black/50 border border-neon/30 rounded-lg p-3 text-white focus:border-neon focus:outline-none transition-colors resize-none"
                  placeholder="Provide detailed information about your security requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full glass-effect border-neon/50 border-2 text-neon py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 hover:bg-neon/10 disabled:opacity-50"
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
              >
                {status === 'sending' && (
                  <motion.div
                    className="w-5 h-5 border-2 border-neon border-t-transparent rounded-full mr-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                )}
                {status === 'success' && <CheckCircle className="mr-2" size={20} />}
                {status === 'error' && <AlertTriangle className="mr-2" size={20} />}
                {status === 'idle' && <Send className="mr-2" size={20} />}
                
                {status === 'sending' && 'ESTABLISHING CONNECTION...'}
                {status === 'success' && 'TRANSMISSION SUCCESSFUL'}
                {status === 'error' && 'TRANSMISSION FAILED - RETRY'}
                {status === 'idle' && 'INITIATE SECURE TRANSMISSION'}
              </motion.button>

              {status === 'success' && (
                <motion.div
                  className="text-center text-green-400 font-mono text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message transmitted successfully. Response expected within 24-48 hours.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="text-center text-red-400 font-mono text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ TRANSMISSION FAILED - Please retry or contact via alternative methods.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}