import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import Contact from '../components/Contact'
import { useLang } from '../contexts/LanguageContext'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const { t } = useLang()

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {t.projectDetail.not_found}
          </h1>
          <Link to="/" className="mt-4 inline-block hover:underline" style={{ color: 'var(--color-accent)' }}>
            {t.projectDetail.back_home}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono" style={{ color: 'var(--color-accent)' }}>
              {project.role}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-3" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              {project.longDescription[0]}
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {project.role}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {project.date}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {project.sections?.map((section, i) => (
          <section key={i} className="py-16" style={i % 2 === 1 ? { backgroundColor: 'var(--bg-secondary)' } : {}}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                {section.heading}
              </h2>
              {section.content.map((p, j) => (
                <p key={j} className="leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>{p}</p>
              ))}
            </motion.div>

            {project.colorPalette && i === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {t.projectDetail.color_palette}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.colorPalette.map((color) => (
                    <div key={color} className="flex flex-col items-center gap-1">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl"
                        style={{ backgroundColor: color, border: '1px solid var(--border-color)' }}
                      />
                      <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{color}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {project.techStack && i === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {t.projectDetail.tech_stack}
                </h3>
                <div className="flex flex-wrap gap-6">
                  {project.techStack.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center gap-2">
                      <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {section.images && section.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {section.images.map((img, k) => (
                  <img key={k} src={img} alt="" className="w-full rounded-xl" style={{ border: '1px solid var(--border-color)' }} />
                ))}
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {project.mockups && project.mockups.length > 0 && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-center mb-10"
              style={{ color: 'var(--text-primary)' }}
            >
              {t.projectDetail.design_mockups}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.mockups.map((mockup, i) => (
                <motion.img
                  key={i}
                  src={mockup}
                  alt=""
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full rounded-xl"
                  style={{ border: '1px solid var(--border-color)' }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
            {t.projectDetail.more_work}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {projects.filter((p) => p.id !== project.id).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/projects/${p.id}`} className="group block">
                  <div className="glass rounded-xl overflow-hidden card-hover" style={{ backgroundColor: 'var(--bg-card)' }}>
                    <div
                      className="aspect-video overflow-hidden flex items-center justify-center p-4"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                    >
                      <img src={p.image} alt={p.title} className="w-full h-full object-scale-down group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold transition-colors group-hover:text-accent" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                      <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{p.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
