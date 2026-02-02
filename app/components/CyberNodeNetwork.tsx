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
    { id: 'home', section: 'home' as SectionType, icon: <Home size={24} />, label: 'Home Section', color: '#00ffd5' },
    { id: 'about', section: 'about' as SectionType, icon: <Server size={24} />, label: 'About Section', color: '#0aff9d' },
    { id: 'certifications', section: 'certifications' as SectionType, icon: <Award size={24} />, label: 'Certifications Section', color: '#ff6b6b' },
    { id: 'projects', section: 'projects' as SectionType, icon: <Code size={24} />, label: 'Projects Section', color: '#4ecdc4' },
    { id: 'contact', section: 'contact' as SectionType, icon: <Mail size={24} />, label: 'Contact Section', color: '#ffe66d' },
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
    if (dimensions.width === 0 || dimensions.height === 0) return

    const getRandomFixedPositions = () => {
      const positions: { x: number; y: number }[] = []
      const margin = 100
      const titleArea = { y: 0, height: 200 } // Avoid title area
      const bottomArea = { y: dimensions.height - 150, height: 150 } // Avoid bottom instructions
      
      for (let i = 0; i < nodeConfigs.length; i++) {
        let validPosition = false
        let attempts = 0
        let x = 0, y = 0
        
        while (!validPosition && attempts < 50) {
          x = margin + Math.random() * (dimensions.width - 2 * margin)
          y = margin + Math.random() * (dimensions.height - 2 * margin)
          
          // Avoid title area and bottom area
          if (y > titleArea.height && y < bottomArea.y) {
            // Check distance from other nodes to avoid overlap
            validPosition = true
            for (const pos of positions) {
              const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2))
              if (distance < 120) { // Minimum distance between nodes
                validPosition = false
                break
              }
            }
          }
          attempts++
        }
        
        // Fallback position if random fails
        if (!validPosition) {
          const centerX = dimensions.width / 2
          const centerY = dimensions.height / 2
          const angle = (i * 2 * Math.PI) / nodeConfigs.length
          const radius = Math.min(dimensions.width, dimensions.height) * 0.2
          x = centerX + Math.cos(angle) * radius
          y = centerY + Math.sin(angle) * radius
        }
        
        positions.push({ x, y })
      }
      
      return positions
    }

    const positions = getRandomFixedPositions()
    const randomNodes = nodeConfigs.map((config, index) => ({
      ...config,
      x: positions[index].x,
      y: positions[index].y,
    }))

    setNodes(randomNodes)
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
      {/* Overlay to hide background branding */}
      <div className="absolute inset-0 bg-black/20 z-0" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: 'transparent' }}
      />
      
      {/* Title */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-30">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-neon text-center font-display"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          disavowed913
        </motion.h1>
        <motion.p
          className="text-center text-gray-400 mt-4 font-mono text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to the Safehouse
        </motion.p>
        <motion.p
          className="text-center text-gray-500 mt-2 font-mono text-sm italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          "No one Gets All They Want In Life And That Is Beautiful"
        </motion.p>
      </div>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute cyber-node z-20 cursor-pointer"
          style={{
            left: node.x - 25,
            top: node.y - 25,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1
          }}
          transition={{ 
            duration: 2, 
            delay: index * 0.1
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
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-30">
        <motion.div
          className="glass-effect px-6 py-4 rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="text-neon font-mono text-sm mb-2">NETWORK STATUS: ACTIVE • 5 NODES CONNECTED</p>
          <p className="text-gray-400 text-xs">Random network topology • Hover to identify • Click to access sections</p>
        </motion.div>
      </div>
    </div>
  )
}