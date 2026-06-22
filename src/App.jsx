import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Download from './pages/Download.jsx'
import Privacy from './pages/Privacy.jsx'

function GradientOrbs() {
  const { scrollYProgress } = useScroll()
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.3])

  return (
    <motion.div className="pointer-events-none fixed inset-0 -z-10" style={{ opacity: bgOpacity }}>
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple/10 blur-[150px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple/5 blur-[120px]" />
    </motion.div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  const containerRef = useRef(null)

  return (
    <div ref={containerRef} style={{ viewTransitionName: 'page-content' }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0a12]">
      <GradientOrbs />
      <ScrollToTop />
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </div>
  )
}
