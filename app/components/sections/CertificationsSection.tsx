'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Award, Shield, CheckCircle } from 'lucide-react'
import Image from 'next/image'

interface CertificationsSectionProps {
  onBack: () => void
}

const certifications = [
  {
    id: 'oesa',
    title: 'OESA',
    org: 'OPSWAT',
    desc: 'Email Security Associate',
    verified: true,
    logo: 'https://www.opswat.com/sites/default/files/2022-06/opswat-logo.png',
  },
  {
    id: 'onsa',
    title: 'ONSA',
    org: 'OPSWAT',
    desc: 'Network Security Associate',
    verified: true,
    logo: 'https://www.opswat.com/sites/default/files/2022-06/opswat-logo.png',
  },
  {
    id: 'ossa',
    title: 'OSSA',
    org: 'OPSWAT',
    desc: 'Storage Security Associate',
    verified: true,
    logo: 'https://www.opswat.com/sites/default/files/2022-06/opswat-logo.png',
  },
  {
    id: 'olsa',
    title: 'OLSA',
    org: 'OPSWAT',
    desc: 'Legacy Systems Associate',
    verified: true,
    logo: 'https://www.opswat.com/sites/default/files/2022-06/opswat-logo.png',
  },
  {
    id: 'owpa',
    title: 'OWPA',
    org: 'OPSWAT',
    desc: 'Web Traffic Associate',
    verified: true,
    logo: 'https://www.opswat.com/sites/default/files/2022-06/opswat-logo.png',
  },
  {
    id: 'cnsp',
    title: 'CNSP',
    org: 'SecOps Group',
    desc: 'Network Security Practitioner with Merit',
    certId: '10757209',
    color: '#1e40af',
  },
  {
    id: 'cjmap',
    title: 'C-JMAP v2.0',
    org: 'Sturtles Limited',
    desc: 'Junior Malware Analysis Professional',
    certId: 'STURSEC/2024/CJMAP2/001',
    color: '#059669',
  },
  {
    id: 'jwpt',
    title: 'JWPT',
    org: 'HackersDaddy',
    desc: 'Junior Web Penetration Tester',
    certId: 'JWPT2K25B5405',
    color: '#7c2d12',
  },
  {
    id: 'cisco',
    title: 'Ethical Hacker',
    org: 'CISCO',
    desc: 'Certified Ethical Hacker',
    verified: true,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg',
  },
  {
    id: 'iso',
    title: 'ISO 27001',
    org: 'Skillfront',
    desc: 'Information Security Associate',
    certId: '95156658792412',
    color: '#dc2626',
  },
  {
    id: 'btja',
    title: 'Blue Team Junior Analyst',
    org: 'Security Blue Team',
    desc: 'Junior Security Analyst',
    certId: '437075840',
    color: '#1e3a8a',
  },
  {
    id: 'comptia',
    title: 'CySA+ Digital Forensics',
    org: 'CompTIA',
    desc: 'Cybersecurity Analyst+ Digital Forensics',
    verified: true,
    logo: 'https://images.credly.com/images/4e6ae5df-72af-4a2a-b02c-5e7c38ac0b17/image.png',
  },
  {
    id: 'oracle',
    title: 'Oracle Foundation Associate',
    org: 'Oracle',
    desc: 'Certified Foundation Associate 2025',
    verified: true,
    logo: 'https://brm-workforce.oracle.com/pdf/certview/images/OCFA2024CA.png',
  },
]

export default function CertificationsSection({ onBack }: CertificationsSectionProps) {
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
            <Award className="w-12 h-12 text-neon mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-neon font-display">
              Security Credentials
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-mono">
            Verified professional cybersecurity certifications and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="glass-effect p-6 rounded-lg relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center relative z-10">
                <div className="mb-4">
                  {cert.logo ? (
                    <div className="w-16 h-16 mx-auto mb-4 relative">
                      <Image
                        src={cert.logo}
                        alt={cert.org}
                        fill
                        className="object-contain filter brightness-0 saturate-100 invert-64 sepia-98 saturate-1206 hue-rotate-166 brightness-101 contrast-101"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${cert.color}, ${cert.color}dd)` 
                      }}
                    >
                      {cert.title.split(' ')[0]}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {cert.title}
                </h3>
                <p className="text-neon font-semibold mb-2">{cert.org}</p>
                <p className="text-gray-400 text-sm mb-4">{cert.desc}</p>

                {cert.verified && (
                  <div className="flex items-center justify-center text-green-400 text-sm mb-2">
                    <CheckCircle size={16} className="mr-1" />
                    VERIFIED
                  </div>
                )}

                {cert.certId && (
                  <div className="text-xs text-gray-500 font-mono">
                    ID: {cert.certId}
                  </div>
                )}

                {cert.verified && (
                  <div className="absolute top-4 right-4">
                    <Shield className="w-6 h-6 text-green-400" />
                  </div>
                )}
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-neon/30 rounded-lg"
                whileHover={{ 
                  boxShadow: '0 0 20px rgba(0, 255, 213, 0.5)',
                  borderColor: 'rgba(0, 255, 213, 0.8)'
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 glass-effect p-8 rounded-lg text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-neon mb-4 font-display">
            Continuous Learning & Development
          </h2>
          <p className="text-gray-300 font-mono">
            Actively pursuing advanced certifications in offensive security, 
            malware analysis, and emerging cybersecurity technologies to stay 
            at the forefront of the rapidly evolving threat landscape.
          </p>
        </motion.div>
      </div>
    </div>
  )
}