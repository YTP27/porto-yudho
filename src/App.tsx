import { useLocation, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'

function PageWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <PageWrap key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </PageWrap>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
