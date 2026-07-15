import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Index } from './pages/Index'
import { WorkPage } from './pages/WorkPage'
import { ProjectPage } from './pages/ProjectPage'
import { JournalPage } from './pages/JournalPage'
import { JournalArticlePage } from './pages/JournalArticlePage'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <ScrollToHash />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Index />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <WorkPage />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageTransition>
                <ProjectPage />
              </PageTransition>
            }
          />
          <Route
            path="/journal"
            element={
              <PageTransition>
                <JournalPage />
              </PageTransition>
            }
          />
          <Route
            path="/journal/:slug"
            element={
              <PageTransition>
                <JournalArticlePage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  )
}
