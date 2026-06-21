import { Link } from 'react-router-dom'
import { ArrowLeft, Droplets } from 'lucide-react'

export default function PrivacyPolicy() {
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

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-ink/80">
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">What we collect</h2>
            <p>When you contact us or request access, we collect the details you submit — your name, email, phone number, organization or district, and your message. When you query the JalSathi agent, we may log the text of your question to improve answer quality and language detection.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">How we use it</h2>
            <p>We use your information only to respond to your enquiry, provide access to JalSathi, and improve the accuracy of our water-data answers across Telugu, Tenglish and English. We do not sell your data or share it with third-party marketers.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Data sources</h2>
            <p>JalSathi reports figures drawn from publicly available Andhra Pradesh government water and irrigation datasets. We strive for accuracy and currency, but the figures are provided for informational purposes and should be verified against official sources for critical decisions.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Storage &amp; security</h2>
            <p>Your information is stored securely and retained only as long as needed to serve your request. You may ask us to delete your data at any time by writing to the contact address on our homepage.</p>
          </section>
          <section>
            <h2 className="font-display font-bold text-xl text-ink mb-2">Contact</h2>
            <p>Questions about this policy? Reach us at hello@jalsathi.ai.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
