import { motion } from 'framer-motion'
import { experiences } from '../data/experience'
import { useLang } from '../contexts/LanguageContext'

export default function WorkExperience() {
  const { t } = useLang()

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-8 sm:left-12 top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--border-color)' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-6 sm:left-10 top-1 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--color-accent)',
                  }}
                />

                {/* Company Logo */}
                <div
                  className="absolute left-0 top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex items-center justify-center p-1.5"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content Card */}
                <div
                  className="glass rounded-2xl p-6 card-hover"
                  style={{ backgroundColor: 'var(--bg-card)' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                        {exp.role}
                      </h3>
                      <p style={{ color: 'var(--color-accent)' }} className="text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-xs sm:text-right" style={{ color: 'var(--text-muted)' }}>
                      <span className="block">{exp.period.replace('Present', t.experience.present)}</span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: 'var(--color-accent)' }}
                        />
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
    </section>
  )
}
