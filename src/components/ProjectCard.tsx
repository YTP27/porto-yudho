import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={`/projects/${project.id}`} className="group block">
        <div className="glass rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <span className="text-xs font-mono text-accent">{project.role}</span>
            <h3 className="text-lg font-semibold mt-1 text-white group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted mt-2 line-clamp-2">{project.description}</p>
            <div className="flex items-center gap-1 mt-3 text-sm text-accent font-medium">
              <span>View Project</span>
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
