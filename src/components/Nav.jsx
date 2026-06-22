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
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/98">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold text-white">Conduit</div>
        <div className="flex items-center gap-6 text-sm text-slate-400">
          {links.map(l => (
            <VTLink
              key={l.to}
              to={l.to}
              className={`transition-colors hover:text-slate-100 ${pathname === l.to ? 'text-slate-100' : ''}`}
            >
              {l.label}
            </VTLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
