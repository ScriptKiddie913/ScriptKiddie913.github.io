'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Code, ExternalLink, Github, Globe } from 'lucide-react'

interface ProjectsSectionProps {
  onBack: () => void
}

const projects = [
  {
    id: 'sotanik-ai',
    title: 'SoTaNik AI Platform',
    desc: 'Advanced AI-powered cybersecurity platform for threat detection and analysis',
    tech: ['Python', 'Machine Learning', 'TensorFlow', 'FastAPI', 'Docker', 'Kubernetes', 'PostgreSQL'],
    link: 'https://sotanikai.in',
    status: 'Active',
    color: '#00ffd5'
  },
  {
    id: 'security-labs',
    title: 'Security Research Labs',
    desc: 'Comprehensive cybersecurity training and CTF platform',
    tech: ['Node.js', 'React', 'Docker', 'Kubernetes', 'Redis', 'MongoDB'],
    link: 'https://labs.sotanikai.in',
    status: 'Active',
    color: '#0aff9d'
  },
  {
    id: 'malware-analyzer',
    title: 'Automated Malware Analysis',
    desc: 'Machine learning-based malware detection and behavioral analysis system',
    tech: ['Python', 'PyTorch', 'Docker', 'Elasticsearch', 'Kibana'],
    status: 'Development',
    color: '#ff6b6b'
  },
  {
    id: 'vuln-scanner',
    title: 'Custom Vulnerability Scanner',
    desc: 'High-performance network vulnerability assessment tool',
    tech: ['Go', 'Nmap', 'SQLite', 'JSON APIs'],
    status: 'Beta',
    color: '#4ecdc4'
  },
  {
    id: 'threat-intel',
    title: 'Threat Intelligence Dashboard',
    desc: 'Real-time threat intelligence aggregation and visualization platform',
    tech: ['React', 'D3.js', 'WebSockets', 'Redis', 'Python'],
    status: 'Planning',
    color: '#ffe66d'
  },
  {
    id: 'forensics-toolkit',
    title: 'Digital Forensics Toolkit',
    desc: 'Comprehensive suite of digital investigation and evidence analysis tools',
    tech: ['C++', 'Python', 'SQLite', 'Qt', 'OpenSSL'],
    status: 'Research',
    color: '#ff9ff3'
  }
]

export default function ProjectsSection({ onBack }: ProjectsSectionProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-400'
      case 'Development': return 'text-yellow-400'
      case 'Beta': return 'text-blue-400'
      case 'Planning': return 'text-orange-400'
      case 'Research': return 'text-purple-400'
      default: return 'text-gray-400'
    }
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

      <div className="max-w-6xl mx-auto pt-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Code className="w-12 h-12 text-neon mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-neon font-display">
              Active Operations
            </h1>
          </div>
          <p className="text-xl text-gray-300 font-mono">
            Current projects and security research initiatives
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-effect p-6 rounded-lg relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white font-display">
                    {project.title}
                  </h3>
                  <span className={`text-sm font-semibold ${getStatusColor(project.status)}`}>
                    ● {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 text-sm">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black/30 text-neon text-xs rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-neon hover:text-white transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Visit Project
                  </motion.a>
                )}

                {!project.link && (
                  <div className="inline-flex items-center text-gray-500 text-sm">
                    <Github size={16} className="mr-2" />
                    Private Repository
                  </div>
                )}
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 border-2 rounded-lg"
                style={{ borderColor: `${project.color}30` }}
                whileHover={{ 
                  boxShadow: `0 0 20px ${project.color}50`,
                  borderColor: `${project.color}80`
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Background gradient */}
              <div 
                className="absolute inset-0 opacity-5 rounded-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${project.color}20, transparent)`
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 glass-effect p-8 rounded-lg text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="w-8 h-8 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-neon font-display">
              Open Source Contributions
            </h2>
          </div>
          <p className="text-gray-300 font-mono mb-4">
            Contributing to the cybersecurity community through open-source tools,
            research publications, and knowledge sharing initiatives.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-neon">25+</div>
              <div className="text-gray-400 text-sm">Security Tools</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neon">150+</div>
              <div className="text-gray-400 text-sm">Code Commits</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neon">10+</div>
              <div className="text-gray-400 text-sm">Research Papers</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}