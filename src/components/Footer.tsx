import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t, lang, setLang } = useLang()
  const { theme, toggle } = useTheme()

  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--text-muted)' }}>
              {t.nav.home}
            </Link>
            <Link to="/projects" className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--text-muted)' }}>
              {t.nav.projects}
            </Link>
            <Link to="/experience" className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--text-muted)' }}>
              {t.nav.experience}
            </Link>
            <Link to="/about" className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--text-muted)' }}>
              {t.nav.about}
            </Link>
            <Link to="/resume" className="text-sm transition-colors hover:text-accent" style={{ color: 'var(--text-muted)' }}>
              {t.nav.resume}
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="text-xs px-2 py-1 rounded transition-colors"
              style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
            >
              {theme === 'dark' ? t.theme.light : t.theme.dark}
            </button>
            <button
              onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
              className="text-xs px-2 py-1 rounded font-semibold transition-colors"
              style={{ color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
            >
              {lang === 'en' ? 'ID' : 'EN'}
            </button>
          </div>
        </div>
        <p className="text-sm text-center mt-4" style={{ color: 'var(--text-muted)' }}>
          &copy; {year} Yudho Tri Putranto. {t.footer.built}.
        </p>
      </div>
    </footer>
  )
}
