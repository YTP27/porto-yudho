import { motion } from 'framer-motion'
import Contact from '../components/Contact'
import { useLang } from '../contexts/LanguageContext'

const skills = [
  { name: '⚡ Breaking Assumptions, Not Production', level: 95 },
  { name: '🐛 Finding Bugs Before Users Do', level: 92 },
  { name: '🧪 Exploratory Testing', level: 90 },
  { name: '🤨 Skeptical of "Works on My Machine"', level: 88 },
  { name: '📋 Writing Bug Reports Devs Actually Read', level: 91 },
  { name: '🤖 Turning Repetition into Automation', level: 88 },
  { name: '☕ Caffeine Powered QA Engineer', level: 500 },
  { name: '🤝 Low Ego, High Teamwork', level: 95 },
]

const tools = [
  { name: 'Playwright', icon: '/icons/playwright.svg' },
  { name: 'Selenium', icon: '/icons/selenium.svg' },
  { name: 'Katalon Studio', icon: '/icons/katalon.svg' },
  { name: 'Postman', icon: '/icons/postman.svg' },
  { name: 'Jira', icon: '/icons/jira.svg' },
  { name: 'Trello', icon: '/icons/trello.svg' },
  { name: 'Spreadsheet', icon: '/icons/spreadsheet.svg' },
  { name: 'Manual Testing', icon: '/icons/manual-testing.svg' },
  { name: 'VS Code', icon: '/icons/vscode.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'GitHub', icon: '/icons/github.svg' },
  { name: 'Figma', icon: '/icons/figma.svg' },
]

export default function About() {
  const { t } = useLang()

  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {t.about.title}<span className="gradient-text">.</span>
              </h1>
              <p className="text-lg mt-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {t.about.intro}
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {t.about.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img
                  src="/images/yudho personal 1.jpeg"
                  alt="Yudho Tri Putranto"
                  className="max-w-xs sm:max-w-sm rounded-2xl"
                />
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl -z-10"
                  style={{ border: '2px solid var(--color-accent)', opacity: 0.2 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-right"
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
                {t.about.coder}
              </h3>
              <ul className="space-y-3">
                {t.about.coderSkills.map((s) => (
                  <li key={s} style={{ color: 'var(--text-muted)' }}>{s}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--border-color)" strokeWidth="2.5" />
                  <circle
                    cx="18" cy="18" r="15.9" fill="none" stroke="var(--color-accent)"
                    strokeWidth="2.5" strokeDasharray={`${2 * Math.PI * 15.9 * 60 / 100} ${2 * Math.PI * 15.9}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>60/40</span>
                  <span className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{t.about.ratio_label}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
                {t.about.designer}
              </h3>
              <ul className="space-y-3">
                {t.about.designerSkills.map((s) => (
                  <li key={s} style={{ color: 'var(--text-muted)' }}>{s}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.about.skills_title}
          </motion.h2>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                  <span className="text-sm font-mono" style={{ color: 'var(--color-accent)' }}>{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(skill.level, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-light))',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
            style={{ color: 'var(--text-primary)' }}
          >
            {t.about.tools_title}
          </motion.h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-2 p-3 rounded-xl"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <img src={tool.icon} alt={tool.name} className="h-8 w-8 object-contain" />
                <span className="text-xs text-center leading-tight" style={{ color: 'var(--text-muted)' }}>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/images/oduyabout.jpeg"
                alt="Yoda"
                className="max-w-xs rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
                {t.about.facts_title}
              </h2>
              <ul className="space-y-4">
                {t.about.facts.map((fact, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    />
                    <span style={{ color: 'var(--text-muted)' }}>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
