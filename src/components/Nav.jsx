import { useLocation } from 'react-router-dom'
import VTLink from './VTLink.jsx'

export default function Nav() {
  const { pathname } = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/download', label: 'Download' },
    { to: '/privacy', label: 'Privacy' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0a12]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <VTLink to="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple text-sm font-bold text-white">C</div>
          <span className="text-lg font-bold tracking-tight">Conduit</span>
        </VTLink>
        <div className="flex items-center gap-6 text-sm text-text-dim">
          {links.map(l => (
            <VTLink
              key={l.to}
              to={l.to}
              className={`transition-colors hover:text-white ${pathname === l.to ? 'text-white' : ''}`}
            >
              {l.label}
            </VTLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
