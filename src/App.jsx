import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Download from './pages/Download.jsx'
import Privacy from './pages/Privacy.jsx'

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
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <ScrollToTop />
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </div>
  )
}
