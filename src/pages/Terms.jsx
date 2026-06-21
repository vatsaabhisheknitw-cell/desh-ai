import { Link } from 'react-router-dom'
import { ArrowLeft, Droplets } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-primary-dark transition mb-10 font-mono text-xs uppercase tracking-widest">
          <ArrowLeft className="h-4 w-4" /> Back to JalSathi
        </Link>

        <div className="flex items-center gap-2 mb-8">
          <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <Droplets className="h-5 w-5 text-deep" strokeWidth={2.4} />
          </span>
          <span className="font-display font-bold text-lg">JalSathi</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-4">Terms of Use</h1>
        <p className="text-muted mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-ink/80">
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Using JalSathi</h2>
            <p>JalSathi is an AI assistant that answers questions about water resources in Andhra Pradesh — reservoirs, MI tanks, groundwater, rainfall, river gauges, soil moisture and lift irrigation. By using the service you agree to these terms.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Informational use only</h2>
            <p>Answers are generated from official datasets and are provided for general information. They are not a substitute for official advisories. Always confirm with the relevant authority before acting on figures for irrigation, flood, or safety decisions.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Accuracy &amp; availability</h2>
            <p>We work to keep data current, but cannot guarantee uninterrupted availability or that every figure is error-free. Coverage and supported districts may change over time.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Acceptable use</h2>
            <p>Do not use JalSathi to attempt to overload the service, scrape it at scale without permission, or misrepresent its answers as official government statements.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Contact</h2>
            <p>For questions about these terms, write to hello@jalsathi.ai.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
