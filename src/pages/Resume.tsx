import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">My Resume</h1>
          <p className="text-muted mb-8">View or download my resume below.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="/yudhoresume.pdf"
              download
              className="px-6 py-3 rounded-full bg-accent text-dark font-semibold hover:bg-accent-dark transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl">
            <embed src="/yudhoresume.pdf" type="application/pdf" className="w-full h-[80vh]" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
