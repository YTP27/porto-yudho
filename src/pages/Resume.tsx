import { motion } from 'framer-motion'
import { useLang } from '../contexts/LanguageContext'

export default function Resume() {
  const { t } = useLang()

  return (
    <div className="pt-24 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {t.resume.title}
          </h1>
          <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
            {t.resume.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="/CV Yudho Tri Putranto_en.pdf"
              download
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#fff',
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t.resume.download}
            </a>
          </div>
          <div
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: '1px solid var(--border-color)' }}
          >
            <embed
              src="/CV Yudho Tri Putranto_en.pdf"
              type="application/pdf"
              className="w-full"
              style={{ height: '80vh' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
