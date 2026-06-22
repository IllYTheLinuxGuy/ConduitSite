import { motion } from 'framer-motion'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-32 pb-24">
      <motion.div className="mb-12 text-center" {...fadeUp}>
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-text-dim">Last updated: June 2026</p>
      </motion.div>

      <motion.div className="space-y-8 text-sm leading-relaxed text-text-dim" {...fadeUp} transition={{ delay: 0.1 }}>
        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Data Collection</h2>
          <p>Conduit collects anonymous, aggregated usage data only when you explicitly opt in. This includes non-personal information such as operating system type, app version, and feature usage frequency.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">What We Do NOT Collect</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>IP addresses or geolocation data</li>
            <li>Email addresses or contact information</li>
            <li>Filesystem paths or file contents</li>
            <li>Domain names or tunnel URLs</li>
            <li>Screen dimensions or hardware identifiers</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Telemetry</h2>
          <p>Telemetry is disabled by default. If enabled, data is stored locally on your machine. You may optionally configure an upload URL for remote collection. You can view and delete collected data at any time from the Settings page.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Third-Party Services</h2>
          <p>Conduit integrates with Cloudflare's cloudflared for tunnel functionality. Cloudflare's privacy policy applies to traffic routed through their edge network. No other third-party services are used.</p>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Contact</h2>
          <p>Questions? Email <a href="mailto:kelennaokere@gmail.com" className="text-purple-light underline underline-offset-2">kelennaokere@gmail.com</a>.</p>
        </div>
      </motion.div>
    </section>
  )
}
