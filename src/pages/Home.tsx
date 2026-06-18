import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import Contact from '../components/Contact'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-dark pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-sm text-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              QA Engineer & UI/UX Designer
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Yudho</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-muted">
              I craft experiences that
            </span>
            <br />
            <span className="gradient-text">bridges design & code</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-muted max-w-xl mx-auto"
          >
            Transforming complex problems into simple, beautiful, and intuitive solutions.
            Based in Depok, Indonesia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/about"
              className="px-6 py-3 rounded-full bg-accent text-dark font-semibold hover:bg-accent-dark transition-colors"
            >
              About Me
            </Link>
            <a
              href="mailto:putrantoyudho@gmail.com"
              className="px-6 py-3 rounded-full glass text-white hover:bg-card transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 relative"
          >
            <img
              src="/images/testweb1.png"
              alt="Yudho Tri Putranto"
              className="max-w-xs sm:max-w-sm mx-auto rounded-2xl shadow-2xl shadow-accent/10"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-accent/20 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Some of My Latest Work</h2>
            <p className="text-muted mt-3 max-w-lg mx-auto">
              A selection of projects where I've brought together design thinking and quality engineering.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </div>
  )
}
