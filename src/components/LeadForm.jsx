import { useState } from 'react'
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'

/*
  Native, theme-matched lead form that submits straight to HubSpot's
  Forms Submission API (no iframe, no embed script) so it can be styled
  to match the site exactly while still feeding the same HubSpot CRM.

  The HubSpot API rejects field names that aren't on the form. If a test
  submission returns a "field does not exist" error, just edit the `name`
  values in HUBSPOT_FIELDS below to match your form's internal names.
*/
const PORTAL_ID = '246557995'
const FORM_GUID = 'cdb6fa93-c9a3-43a7-8b10-b4c3a83d44dd'
const SUBMIT_URL = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`

const HUBSPOT_FIELDS = [
  { name: 'firstname', label: 'First name', type: 'text', required: true, half: true },
  { name: 'lastname', label: 'Last name', type: 'text', required: false, half: true },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true },
  { name: 'phone', label: 'Phone', type: 'tel', required: false, half: true },
  { name: 'message', label: 'How can we help?', type: 'textarea', required: true,
    placeholder: 'Tell us what you want to build, your languages/channels, and any timeline…' },
]

const inputClass =
  'w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 ' +
  'focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body'
const labelClass = 'font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block'

export default function LeadForm({
  submitLabel = 'Send message',
  successTitle = 'Thanks — we got it',
  successText = 'We’ll be in touch shortly.',
}) {
  const [form, setForm] = useState(() =>
    Object.fromEntries(HUBSPOT_FIELDS.map((f) => [f.name, '']))
  )
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  const set = (name, value) => setForm((prev) => ({ ...prev, [name]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const fields = HUBSPOT_FIELDS
      .map((f) => ({ name: f.name, value: (form[f.name] || '').trim() }))
      .filter((f) => f.value !== '')

    const payload = {
      fields,
      context: {
        pageUri: typeof window !== 'undefined' ? window.location.href : '',
        pageName: typeof document !== 'undefined' ? document.title : '',
      },
    }

    try {
      const res = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setStatus('sent')
        return
      }
      const data = await res.json().catch(() => null)
      const detail = data?.errors?.[0]?.message || data?.message || `Request failed (${res.status})`
      setErrorMsg(detail)
      setStatus('error')
    } catch {
      setErrorMsg('Network error — please try again, or email us directly.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center py-12">
        <div className="h-16 w-16 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary-dark" />
        </div>
        <h3 className="font-display font-bold text-2xl text-ink mb-3">{successTitle}</h3>
        <p className="text-muted max-w-md mx-auto">{successText}</p>
      </div>
    )
  }

  const halfFields = HUBSPOT_FIELDS.filter((f) => f.type !== 'textarea')
  const textFields = HUBSPOT_FIELDS.filter((f) => f.type === 'textarea')

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-5">
        {halfFields.map((f) => (
          <div key={f.name}>
            <label className={labelClass} htmlFor={`lf-${f.name}`}>
              {f.label} {f.required && '*'}
            </label>
            <input
              id={`lf-${f.name}`}
              type={f.type}
              required={f.required}
              value={form[f.name]}
              onChange={(e) => set(f.name, e.target.value)}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      {textFields.map((f) => (
        <div className="mt-5" key={f.name}>
          <label className={labelClass} htmlFor={`lf-${f.name}`}>
            {f.label} {f.required && '*'}
          </label>
          <textarea
            id={`lf-${f.name}`}
            required={f.required}
            rows={5}
            placeholder={f.placeholder}
            value={form[f.name]}
            onChange={(e) => set(f.name, e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>
      ))}

      {status === 'error' && (
        <p className="mt-4 text-sm text-red-500" role="alert">{errorMsg}</p>
      )}

      <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-muted">We’ll reply as soon as we can. Fields marked * are required.</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="magnetic-btn inline-flex items-center gap-2 bg-primary text-deep font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-primary/30 disabled:opacity-60"
        >
          {status === 'sending' ? (
            <>
              Sending… <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              {submitLabel} <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
