import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useLang } from '../contexts/LanguageContext'

export default function Projects() {
  const { t } = useLang()

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {t.projects.title}
          </h1>
          <p className="mt-3 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
