import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import Contact from '../components/Contact'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Project not found</h1>
          <Link to="/" className="text-accent hover:underline mt-4 inline-block">Back home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-accent">{project.role}</span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mt-3">{project.title}</h1>
            <p className="text-muted mt-4 max-w-2xl mx-auto">{project.longDescription[0]}</p>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {project.role}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Sections */}
      {project.sections?.map((section, i) => (
        <section key={i} className={`py-16 ${i % 2 === 1 ? 'bg-surface' : ''}`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{section.heading}</h2>
              {section.content.map((p, j) => (
                <p key={j} className="text-muted leading-relaxed mb-4">{p}</p>
              ))}
            </motion.div>

            {/* Color Palette */}
            {project.colorPalette && i === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Color Palette</h3>
                <div className="flex flex-wrap gap-3">
                  {project.colorPalette.map((color) => (
                    <div key={color} className="flex flex-col items-center gap-1">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-border"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs font-mono text-muted">{color}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tech Stack */}
            {project.techStack && i === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-6">
                  {project.techStack.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center gap-2">
                      <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
                      <span className="text-xs text-muted">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Mockups / Images */}
            {section.images && section.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {section.images.map((img, k) => (
                  <img key={k} src={img} alt="" className="w-full rounded-xl border border-border" />
                ))}
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {/* Mockups Gallery (if not already shown) */}
      {project.mockups && project.mockups.length > 0 && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-white text-center mb-10"
            >
              Design Mockups
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
                  className="w-full rounded-xl border border-border"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More Projects */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            More Work From My Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter((p) => p.id !== project.id).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/projects/${p.id}`} className="group block">
                  <div className="glass rounded-xl overflow-hidden hover:border-accent/50 transition-all">
                    <div className="aspect-video overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white group-hover:text-accent transition-colors">{p.title}</h3>
                      <p className="text-sm text-muted mt-1">{p.description}</p>
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
