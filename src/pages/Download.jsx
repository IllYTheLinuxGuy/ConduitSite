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

const extras = [
  { label: 'Arch (AUR)', url: '#' },
  { label: 'macOS (DMG)', url: '#' },
  { label: 'Windows portable', url: '#' },
  { label: 'Flathub', url: '#' },
]

export default function Download() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-24">
      <motion.div className="mb-16 text-center" {...fadeUp}>
        <span className="mb-4 inline-block rounded-full bg-purple/10 px-4 py-1.5 text-xs font-medium text-purple-light ring-1 ring-purple/20">Free. Cross-platform. Open source.</span>
        <h1 className="text-4xl font-bold sm:text-5xl">Download Conduit</h1>
        <p className="mt-4 text-text-dim">Choose your platform. Get started in seconds.</p>
      </motion.div>

      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {downloads.map((d, i) => (
          <motion.a key={d.ext} href={d.url}
            className="glass gradient-border flex items-center gap-4 rounded-2xl p-5 transition-all hover:border-purple/20 hover:shadow-[0_0_20px_rgba(178,80,178,0.08)]"
            {...fadeUp} transition={{ delay: i * 0.08 }}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple-light ring-1 ring-purple/20">
              <ArrowDownTrayIcon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">{d.label}</div>
              <div className="text-sm text-text-dim">{d.ext} &mdash; {d.size}</div>
            </div>
            <div className="text-sm font-medium text-purple-light">Download &rarr;</div>
          </motion.a>
        ))}
      </div>

      <motion.p className="mt-8 text-center text-sm text-text-dim" {...fadeUp}>
        Also available:{' '}
        {extras.map((e, i) => (
          <span key={e.label}>
            <a href={e.url} className="text-purple-light underline underline-offset-2 hover:text-white">{e.label}</a>
            {i < extras.length - 1 ? ', ' : ''}
          </span>
        ))}
      </motion.p>
    </section>
  )
}
