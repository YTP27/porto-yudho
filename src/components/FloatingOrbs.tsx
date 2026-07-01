import { useEffect, useState } from 'react'

interface Orb {
  id: number
  size: number
  x: number
  y: number
  duration: number
  delay: number
  color: string
}

const colors = [
  'var(--color-accent)',
  'var(--color-accent-light)',
  'var(--color-accent)',
  'var(--color-accent-light)',
]

export default function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([])

  useEffect(() => {
    const items: Orb[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: 40 + Math.random() * 80,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * -10,
      color: colors[i % colors.length],
    }))
    setOrbs(items)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            backgroundColor: orb.color,
            opacity: 0.15,
            animation: `float ${orb.duration}s ease-in-out ${orb.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -40px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(40px, 30px) scale(1.05); }
          100% { transform: translate(-30px, -20px) scale(1); }
        }
      `}</style>
    </div>
  )
}
