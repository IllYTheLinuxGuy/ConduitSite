import { motion } from 'framer-motion'
import { ServerIcon, GlobeAltIcon, CommandLineIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import VTLink from '../components/VTLink.jsx'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

const features = [
  { icon: ServerIcon, title: 'Nginx Manager', desc: 'Start, stop, restart, and test nginx configs from a clean desktop UI.' },
  { icon: GlobeAltIcon, title: 'Cloudflare Tunnels', desc: 'One-click tunnels via cloudflared. Custom subdomains, auto URL copy.' },
  { icon: CommandLineIcon, title: 'Static Hosting', desc: 'Deploy static sites instantly with auto-tunnel and MIME support.' },
  { icon: ShieldCheckIcon, title: 'Privacy First', desc: 'Zero telemetry by default. Opt-in anonymous data. No tracking.' },
]

export default function Home() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-6 pt-32 pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-purple/20 bg-purple/5 px-4 py-1.5 text-xs text-purple-light">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            v1.0.0 — Open Source
          </div>
          <h1 className="glow-text mx-auto max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Web Server & Tunneling
            <span className="block text-purple">Done Desktop</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-dim leading-relaxed">
            Manage nginx, create Cloudflare tunnels, host static sites, and configure reverse proxies —
            all from a lightweight cross-platform desktop app.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <VTLink to="/download" className="inline-flex items-center gap-2 rounded-xl bg-purple px-6 py-3 font-semibold text-white transition-all hover:bg-purple-light hover:shadow-[0_0_30px_rgba(178,80,178,0.3)]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
              Download Free
            </VTLink>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/70 transition-all hover:bg-white/10 hover:text-white">
              Learn More &darr;
            </a>
          </div>
        </motion.div>

        <motion.div className="glass mx-auto mt-20 max-w-3xl overflow-hidden rounded-2xl text-left" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/50" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/50" />
            <span className="h-3 w-3 rounded-full bg-green-500/50" />
            <span className="ml-3 text-xs text-text-dim">conduit tunnel --port 5173</span>
          </div>
          <div className="space-y-2 p-5 font-mono text-sm leading-relaxed text-text-dim">
            <p className="text-green-400/80">$ <span className="text-white">sudo apt install conduit</span></p>
            <p className="text-green-400/80">$ <span className="text-white">conduit</span></p>
            <p className="text-text-dim">[12:00:01] Extension connected</p>
            <p className="text-text-dim">[12:00:02] Starting cloudflared...</p>
            <p className="text-purple-light">[12:00:05] Tunnel active at https://conduit-example.trycloudflare.com</p>
            <p className="text-green-400/80 mt-2">$ <span className="text-white">conduit site deploy ./my-site --port 8080 --tunnel</span></p>
            <p className="text-green-400">[12:00:07] Deployed my-site on :8080</p>
          </div>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-32">
        <motion.div className="mb-16 text-center" {...fadeUp} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold sm:text-4xl">Everything you need</h2>
          <p className="mt-4 text-text-dim">No bloated configs. No cloud lock-in. Just your machine and your tunnels.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div key={f.title} className="glass gradient-border group rounded-2xl p-6 transition-all hover:border-purple/20" {...fadeUp} transition={{ delay: i * 0.1, duration: 0.5 }}>
              <div className="mb-4 inline-flex rounded-xl bg-purple/10 p-3 text-purple-light ring-1 ring-purple/20">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-text-dim">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
