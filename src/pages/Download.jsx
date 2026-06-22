import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

const BASE = 'https://files.catbox.moe'

const downloads = [
  { label: 'Debian / Ubuntu', ext: '.deb', file: 'conduit_1.0.0_amd64.deb', url: `${BASE}/005t6e.deb`, size: '17.3 MB' },
  { label: 'Windows', ext: '.msi', file: 'conduit-1.0.0-amd64.msi', url: `${BASE}/oemibt.msi`, size: '20.9 MB' },
  { label: 'Linux (AppImage)', ext: '.AppImage', file: 'conduit-1.0.0-x86_64.AppImage', url: `${BASE}/i9ar8b.AppImage`, size: '20.7 MB' },
  { label: 'Generic Linux', ext: '.tar.gz', file: 'conduit-1.0.0-linux-x64.tar.gz', url: `${BASE}/met4wg.gz`, size: '20.6 MB' },
]

export default function Download() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <motion.div className="mb-16 text-center" {...fadeUp}>
        <h1 className="text-4xl font-semibold sm:text-5xl text-white">Download Conduit</h1>
        <p className="mt-4 text-slate-400">Choose the right file for your system and install it today.</p>
      </motion.div>

      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {downloads.map((d, i) => (
          <motion.a key={d.ext} href={d.url}
            className="flex items-center gap-4 rounded-3xl border border-slate-800 bg-slate-950 p-5 transition hover:border-[#22c55e]/40"
            {...fadeUp} transition={{ delay: i * 0.08 }}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#122c16] text-[#22c55e] ring-1 ring-[#22c55e]/20">
              <ArrowDownTrayIcon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-white">{d.label}</div>
              <div className="text-sm text-slate-400">{d.ext} — {d.size}</div>
            </div>
            <div className="text-sm font-medium text-[#22c55e]">Download →</div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
