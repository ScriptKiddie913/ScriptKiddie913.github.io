'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { 
  Home, Shield, Award, Code, Mail, 
  Server, Cpu, HardDrive, Wifi, 
  Bug, Lock, Eye, Zap, Database,
  Bitcoin, Smartphone, Globe
} from 'lucide-react'
import { SectionType } from '../page'

interface NodeData {
  id: string
  section: SectionType
  icon: React.ReactNode
  label: string
  x: number
  y: number
  color: string
}

interface CyberNodeNetworkProps {
  onNodeClick: (section: SectionType) => void
}

export default function CyberNodeNetwork({ onNodeClick }: CyberNodeNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [nodes, setNodes] = useState<NodeData[]>([])
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const nodeConfigs = [
    { id: 'home', section: 'home' as SectionType, icon: <Home size={24} />, label: 'Home Terminal', color: '#00ffd5' },
    { id: 'about', section: 'about' as SectionType, icon: <Server size={24} />, label: 'System Profile', color: '#0aff9d' },
    { id: 'certifications', section: 'certifications' as SectionType, icon: <Award size={24} />, label: 'Security Credentials', color: '#ff6b6b' },
    { id: 'projects', section: 'projects' as SectionType, icon: <Code size={24} />, label: 'Active Operations', color: '#4ecdc4' },
    { id: 'contact', section: 'contact' as SectionType, icon: <Mail size={24} />, label: 'Secure Channel', color: '#ffe66d' },
  ]

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0) return

    const generateSafePosition = () => {
      const margin = 100 // Safe margin from edges
      return {
        x: margin + Math.random() * (dimensions.width - 2 * margin),
        y: margin + Math.random() * (dimensions.height - 2 * margin),
      }
    }

    const initialNodes = nodeConfigs.map(config => ({
      ...config,
      ...generateSafePosition(),
    }))

    setNodes(initialNodes)
  }, [dimensions])

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prevNodes => 
        prevNodes.map(node => {
          const margin = 100
          return {
            ...node,
            x: margin + Math.random() * (dimensions.width - 2 * margin),
            y: margin + Math.random() * (dimensions.height - 2 * margin),
          }
        })
      )
    }, 8000)

    return () => clearInterval(interval)
  }, [dimensions])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const drawConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = '#00ffd5'
      ctx.lineWidth = 1
      ctx.globalAlpha = 0.4

      // Draw connections between all nodes (fully connected network)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i]
          const node2 = nodes[j]
          
          // Create gradient line based on node colors
          const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y)
          gradient.addColorStop(0, node1.color + '80')
          gradient.addColorStop(1, node2.color + '80')
          
          ctx.strokeStyle = gradient
          ctx.beginPath()
          ctx.moveTo(node1.x, node1.y)
          ctx.lineTo(node2.x, node2.y)
          ctx.stroke()
        }
      }
    }

    drawConnections()
  }, [nodes, dimensions])

  const handleNodeClick = (nodeId: string, section: SectionType) => {
    if (section !== 'network') {
      onNodeClick(section)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'transparent' }}
      />
      
      {/* Title */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-neon text-center font-display"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          CYBER SECURITY NETWORK
        </motion.h1>
        <motion.p
          className="text-center text-gray-400 mt-4 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Navigate through the cybersecurity network by clicking nodes
        </motion.p>
      </div>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute cyber-node"
          style={{
            left: node.x - 25,
            top: node.y - 25,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            x: node.x - 25,
            y: node.y - 25
          }}
          transition={{ 
            duration: 2, 
            delay: index * 0.1,
            x: { duration: 2, ease: "easeInOut" },
            y: { duration: 2, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.2, rotate: 10 }}
          onClick={() => handleNodeClick(node.id, node.section)}
          onMouseEnter={() => setHoveredNode(node.id)}
          onMouseLeave={() => setHoveredNode(null)}
        >
          <div 
            className="w-12 h-12 rounded-full glass-effect flex items-center justify-center relative"
            style={{ 
              backgroundColor: `${node.color}20`,
              borderColor: node.color,
              boxShadow: hoveredNode === node.id ? `0 0 20px ${node.color}` : 'none'
            }}
          >
            <div style={{ color: node.color }}>
              {node.icon}
            </div>
            
            {/* Hover label */}
            {hoveredNode === node.id && (
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 px-3 py-1 rounded text-xs text-white whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {node.label}
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}

      {/* Instructions */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <motion.div
          className="glass-effect px-6 py-4 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-neon font-mono text-sm mb-2">NETWORK STATUS: ACTIVE • 5 NODES CONNECTED</p>
          <p className="text-gray-400 text-xs">Nodes rearrange every 8 seconds • Hover to identify • Click to access sections</p>
        </motion.div>
      </div>
    </div>
  )
}
