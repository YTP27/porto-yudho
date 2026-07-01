import { createContext, useContext, useEffect, useState } from 'react'
import { en } from '../translations/en'
import { id } from '../translations/id'

type Lang = 'en' | 'id'

const translations = { en, id }

interface LanguageContextType {
  lang: Lang
  t: typeof en
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang')
    if (stored === 'en' || stored === 'id') return stored
    return navigator.language.startsWith('id') ? 'id' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
