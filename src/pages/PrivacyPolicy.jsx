import { Link } from 'react-router-dom'
import { ArrowLeft, MessagesSquare } from 'lucide-react'

export default function PrivacyPolicy() {
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

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-ink/80">
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">What we collect</h2>
            <p>When you contact us through this site, we collect the details you submit — your name, email, phone number, and your message — so we can respond to your enquiry and scope your project.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">How we use it</h2>
            <p>We use your information only to reply to you, discuss and deliver the AI-agent work you ask about, and keep you updated on it. We do not sell your data or share it with third-party marketers.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Client data we build on</h2>
            <p>When we build an agent on your behalf, any data or documents you share for that purpose are used only to build and operate your agent, kept secure, and never resold. Ownership and handling are agreed in writing per project.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Storage &amp; security</h2>
            <p>Your information is stored securely and retained only as long as needed to serve your request. You may ask us to delete your data at any time by writing to the contact address on our homepage.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Contact</h2>
            <p>Questions about this policy? Reach us at hello@deshai.com.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
