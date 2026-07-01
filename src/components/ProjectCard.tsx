import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { useLang } from '../contexts/LanguageContext'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLang()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div
          className="glass rounded-2xl overflow-hidden card-hover"
          style={{ backgroundColor: 'var(--bg-card)' }}
        >
          <div
            className="aspect-video overflow-hidden flex items-center justify-center p-4"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-scale-down group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <span className="text-xs font-mono" style={{ color: 'var(--color-accent)' }}>
              {project.role}
            </span>
            <h3
              className="text-lg font-semibold mt-1 transition-colors group-hover:text-accent"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h3>
            <p className="text-sm mt-2 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
              {project.description}
            </p>
            <div className="flex items-center gap-1 mt-3 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
              <span>{t.projects.view}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
