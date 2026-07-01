import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Typewriter({ text, className, delay = 1.5 }: { text: string; className?: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, 30)
      return () => clearInterval(interval)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <span className={className}>
      {displayed}
      {!done && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block ml-0.5 -mb-0.5"
          style={{ width: '2px', height: '1em', backgroundColor: 'var(--color-accent)' }}
        />
      )}
    </span>
  )
}
