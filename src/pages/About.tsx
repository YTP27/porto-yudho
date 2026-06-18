import { motion } from 'framer-motion'
import Contact from '../components/Contact'

const skills = [
  { name: 'UI/UX Design', level: 90 },
  { name: 'Front-end Dev', level: 80 },
  { name: 'QA Automation', level: 95 },
  { name: 'Prototyping', level: 85 },
  { name: 'Problem Solving', level: 90 },
  { name: 'Visual Storytelling', level: 75 },
]

const facts = [
  "I'm slightly addicted to learning new things.",
  'Love exploring tech blogs and design articles.',
  'I enjoy creating things, whether it is code or designs.',
  'Yoda is my mentor (in spirit).',
  'A good cup of coffee is essential.',
  'Still searching for the perfect keyboard.',
]

export default function About() {


  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                About<span className="gradient-text">.</span>
              </h1>
              <p className="text-lg text-white/80 mt-6 leading-relaxed">
                I'm Yudho Tri Putranto, a passionate QA Engineer with a keen eye for UI/UX design.
                Based in Depok, Indonesia.
              </p>
              <p className="text-muted mt-4 leading-relaxed">
                Since 2021, I have enjoyed tackling complex problems, transforming them into simple,
                beautiful, and intuitive solutions. When I am not diving into code or perfecting user
                flows, you will find me exploring new design trends, learning new technologies, or
                simply enjoying a good cup of coffee.
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
                  src="/images/abstractoduy.png"
                  alt="Yudho Tri Putranto"
                  className="max-w-xs sm:max-w-sm rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-accent/20 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Designer / Coder */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-right"
            >
              <h3 className="text-xl font-bold text-accent mb-6">Part designer</h3>
              <ul className="space-y-3">
                {['UI design', 'UX design', 'Prototyping', 'Visual Storytelling', 'Wireframing'].map((s) => (
                  <li key={s} className="text-muted">{s}</li>
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
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#2a2a3a" strokeWidth="2.5" />
                  <circle
                    cx="18" cy="18" r="15.9" fill="none" stroke="#06d6a0"
                    strokeWidth="2.5" strokeDasharray={`${60 * 2.512} ${100 * 2.512}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">60/40</span>
                  <span className="text-xs text-muted mt-1">Designer / Coder</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-xl font-bold text-accent mb-6">Part coder</h3>
              <ul className="space-y-3">
                {['Front-end development', 'HTML / CSS', 'JavaScript (React)', 'QA Automation (Playwright)', 'Problem Solving'].map((s) => (
                  <li key={s} className="text-muted">{s}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            My Skills
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
                  <span className="text-sm font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-accent font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-card overflow-hidden">
                  <motion.div
                    className="h-full rounded-full skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="py-16 bg-surface">
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
              <h2 className="text-3xl font-bold text-white mb-8">Random Facts</h2>
              <ul className="space-y-4">
                {facts.map((fact, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    <span className="text-muted">{fact}</span>
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
