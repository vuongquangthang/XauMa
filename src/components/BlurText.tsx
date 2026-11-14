import { motion } from 'framer-motion'
import { memo } from 'react'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

const BlurText = memo(function BlurText({ text, className = '', delay = 0, once = true }: BlurTextProps) {
  const words = text.split(' ')

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 32 }}
          whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          viewport={{ once, amount: 0.1 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.09,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
})

export default BlurText
