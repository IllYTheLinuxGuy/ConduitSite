import { motion } from 'framer-motion'
import { ServerIcon, GlobeAltIcon, CommandLineIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import VTLink from '../components/VTLink.jsx'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

const stats = [
  { label: '17 MB', detail: 'Installer size for x64 Linux' },
  { label: '4 builds', detail: 'Debian, Windows, AppImage, tarball' },
  { label: '1.0.0', detail: 'Current stable release' },
  { label: '0', detail: 'Telemetry events by default' },
]

const features = [
  {
    icon: ServerIcon,
    title: 'Manage nginx',
    desc: 'Open nginx config, test syntax, and restart the service from one desktop view.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Run tunnels',
    desc: 'Start a Cloudflare tunnel, copy the public URL, and keep local sites available remotely.',
  },
  {
    icon: CommandLineIcon,
    title: 'Host static sites',
    desc: 'Serve a folder locally with correct MIME types and secure access.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'No tracking',
    desc: 'The app does not send usage data unless you explicitly opt in.',
  },
]

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build and run local web services from one desktop app.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Install Conduit, then manage nginx, Cloudflare tunnels, and static site hosting without switching tools.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <VTLink to="/download" className="inline-flex items-center justify-center rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#1e8c4a]">
              Download now
            </VTLink>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-slate-100">
              View features
            </a>
          </div>
        </motion.div>

        <motion.div className="mt-14 grid gap-6 lg:grid-cols-[1.45fr_1fr]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <div className="rounded-[32px] border border-slate-800 bg-slate-950 p-6">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-500">Quick start</div>
            <pre className="overflow-x-auto rounded-2xl bg-black p-5 text-sm leading-7 text-slate-100">
{`sudo apt install conduit
conduit
conduit tunnel --port 5173
conduit site deploy ./my-site --port 8080 --tunnel`}
            </pre>
          </div>

          <div className="grid gap-4">
            {stats.map(stat => (
              <div key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-3xl font-semibold text-white">{stat.label}</p>
                <p className="mt-3 text-sm text-slate-400">{stat.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div className="mb-10 text-center" {...fadeUp} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">What it does today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Use Conduit for local site preview, developer tunnels, and nginx configuration from one interface.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-6"
              {...fadeUp}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#122c16] text-[#22c55e]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-7 text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
