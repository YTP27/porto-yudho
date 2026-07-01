import { motion } from 'framer-motion'

export default function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ')

  return (
    <span className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.25em' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
