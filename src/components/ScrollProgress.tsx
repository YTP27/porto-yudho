import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handle = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[9999] pointer-events-none">
      <div
        className="h-full transition-[width] duration-200 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-light), var(--color-accent))',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s infinite',
        }}
      />
    </div>
  )
}
