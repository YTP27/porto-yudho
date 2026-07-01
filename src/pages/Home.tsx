import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import Contact from '../components/Contact'
import { useLang } from '../contexts/LanguageContext'
import { experiences } from '../data/experience'

type Section = 'projects' | 'experience'

function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => { setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0) }, [])
  return isTouch
}

export default function Home() {
  const { t } = useLang()
  const [active, setActive] = useState<Section>('projects')
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 })
  const heroRef = useRef<HTMLDivElement>(null)
  const isTouch = useIsTouch()

  const handleMouse = (e: React.MouseEvent) => {
    if (isTouch) return
    const rect = heroRef.current?.getBoundingClientRect()
    if (rect) {
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }

  return (
    <div>
      <section
        ref={heroRef}
        onMouseMove={handleMouse}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            background: isTouch
              ? 'radial-gradient(ellipse at 50% 50%, var(--color-accent) 0%, transparent 60%)'
              : `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-accent) 0%, transparent 40%)`,
            opacity: 0.08,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }} />
              {t.hero.badge}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.hero.greeting}{' '}
            <span className="gradient-text">{t.hero.name}</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-normal" style={{ color: 'var(--text-secondary)' }}>
              {t.hero.subtitle}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg max-w-xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => { setActive('projects'); document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: active === 'projects' ? 'var(--color-accent)' : 'transparent',
                color: active === 'projects' ? '#fff' : 'var(--text-primary)',
                border: active === 'projects' ? 'none' : '1px solid var(--border-color)',
              }}
            >
              {t.hero.cta_projects}
            </button>
            <button
              onClick={() => { setActive('experience'); document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: active === 'experience' ? 'var(--color-accent)' : 'transparent',
                color: active === 'experience' ? '#fff' : 'var(--text-primary)',
                border: active === 'experience' ? 'none' : '1px solid var(--border-color)',
              }}
            >
              {t.hero.cta_experience}
            </button>
            <a
              href="/CV Yudho Tri Putranto_en.pdf"
              download
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--color-accent)',
                border: '1px solid var(--color-accent)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t.hero.cta_resume}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm"
          >
            <Link to="/about" style={{ color: 'var(--text-muted)' }} className="hover:text-accent transition-colors underline underline-offset-4">
              {t.hero.cta_about}
            </Link>
            <a href="mailto:putrantoyudho@gmail.com" style={{ color: 'var(--text-muted)' }} className="hover:text-accent transition-colors underline underline-offset-4">
              {t.hero.cta_contact}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 relative inline-block"
          >
            <img
              src="/images/abstractoduy.png"
              alt="Yudho Tri Putranto"
              className="max-w-xs sm:max-w-sm mx-auto rounded-2xl shadow-2xl"
              style={{ boxShadow: '0 20px 60px var(--shadow-color)' }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl -z-10"
              style={{ border: '2px solid var(--color-accent)', opacity: 0.2 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Toggle-able Content */}
      <section id="content" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-12">
            <button
              onClick={() => setActive('projects')}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: active === 'projects' ? 'var(--color-accent)' : 'transparent',
                color: active === 'projects' ? '#fff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: active === 'projects' ? 'var(--color-accent)' : 'var(--border-color)',
              }}
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => setActive('experience')}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: active === 'experience' ? 'var(--color-accent)' : 'transparent',
                color: active === 'experience' ? '#fff' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: active === 'experience' ? 'var(--color-accent)' : 'var(--border-color)',
              }}
            >
              {t.nav.experience}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {active === 'projects' ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {t.projects.title}
                  </h2>
                  <p className="mt-2 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
                    {t.projects.subtitle}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {t.experience.title}
                  </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-px" style={{ backgroundColor: 'var(--border-color)' }} />
                    <div className="space-y-10">
                      {experiences.map((exp, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-30px' }}
                          transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                          className="relative pl-16 sm:pl-20"
                        >
                          <div
                            className="absolute left-6 sm:left-10 top-1 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                            style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--color-accent)' }}
                          />
                          <div
                            className="absolute left-0 top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex items-center justify-center p-1.5"
                            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                          >
                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                          </div>
                          <div className="glass rounded-2xl p-6" style={{ backgroundColor: 'var(--bg-card)' }}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                              <div>
                                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{exp.role}</h3>
                                <p style={{ color: 'var(--color-accent)' }} className="text-sm font-medium">{exp.company}</p>
                              </div>
                              <div className="text-xs sm:text-right" style={{ color: 'var(--text-muted)' }}>
                                <span className="block">{exp.period.replace('Present', t.experience.present)}</span>
                                <span>{exp.type} &middot; {exp.location}</span>
                              </div>
                            </div>
                            <ul className="mt-4 space-y-2">
                              {exp.highlights.map((item, j) => (
                                <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          </motion.div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Contact />
    </div>
  )
}
