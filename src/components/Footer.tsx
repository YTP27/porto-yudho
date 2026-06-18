import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-muted hover:text-accent transition-colors">Home</Link>
            <Link to="/about" className="text-sm text-muted hover:text-accent transition-colors">About</Link>
            <Link to="/resume" className="text-sm text-muted hover:text-accent transition-colors">Resume</Link>
          </div>
          <p className="text-sm text-muted">&copy; {year} Yudho Tri Putranto. Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  )
}
