import { Link } from 'react-router-dom'
import { ArrowLeft, MessagesSquare } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-muted hover:text-primary-dark transition mb-10 font-mono text-xs uppercase tracking-widest">
          <ArrowLeft className="h-4 w-4" /> Back to Desh AI
        </Link>

        <div className="flex items-center gap-2 mb-8">
          <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <MessagesSquare className="h-5 w-5 text-deep" strokeWidth={2.4} />
          </span>
          <span className="font-display font-bold text-lg">Desh AI</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-4">Terms of Use</h1>
        <p className="text-muted mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-ink/80">
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">About Desh AI</h2>
            <p>Desh AI designs and builds custom AI agents — multilingual chatbots, voice agents and automations for web and WhatsApp. This website presents our services and lets you get in touch. By using it you agree to these terms.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Enquiries &amp; quotes</h2>
            <p>Information on this site is for general guidance. Any project scope, pricing, timeline and deliverables are confirmed in a separate written agreement before work begins. Nothing here is a binding offer on its own.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Demos &amp; examples</h2>
            <p>Showcased work — including the JalSathi demo — is provided to illustrate our capabilities. Demo answers are for information only and should not be relied on for official, financial or safety-critical decisions.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Acceptable use</h2>
            <p>Don't attempt to overload, scrape or disrupt this site or our demos, or misrepresent our work or demo outputs as official statements of any third party.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Contact</h2>
            <p>For questions about these terms, write to hello@deshai.com.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
