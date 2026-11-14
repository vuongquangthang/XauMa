import { motion } from 'framer-motion'
import { memo } from 'react'

interface GlassRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
}

const GlassReveal = memo(function GlassReveal({ children, className = '', delay = 0, once = true }: GlassRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ filter: 'blur(10px)', opacity: 0, y: 24 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
})

export default GlassReveal
