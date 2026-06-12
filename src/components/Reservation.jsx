import { useState } from 'react'

const guestOptions = ['1', '2', '3', '4', '5', '6+']

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '19:00', guests: '2' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    // Front-end demo only: no backend. Shows a confirmation state.
    setSubmitted(true)
  }

  return (
    <section id="reserve" className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-olive-900/80" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="text-cream">
          <p className="section-label">Reservations</p>
          <h2 className="font-display text-4xl font-700 leading-tight sm:text-5xl">
            Book your table
          </h2>
          <p className="mt-5 max-w-md text-cream/75">
            We recommend booking ahead, especially on weekends. For parties of seven or more,
            please call us directly and we’ll take care of the rest.
          </p>
          <div className="mt-8 space-y-2 text-sm text-cream/80">
            <p><span className="text-gold">Open</span> · Tue–Sun, 12:00 – 23:00</p>
            <p><span className="text-gold">Call</span> · +1 (555) 018-2240</p>
            <p><span className="text-gold">Find us</span> · 24 Harbour Lane, Old Town</p>
          </div>
        </div>

        <div className="rounded-2xl bg-cream p-8 shadow-2xl">
          {submitted ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-olive-700 text-cream">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-700 text-olive-900">Thank you, {form.name || 'guest'}!</h3>
              <p className="mt-2 text-olive-800/70">
                Your request for {form.guests} guest(s) on {form.date || 'your chosen date'} at {form.time} has
                been received. We’ll confirm by email shortly.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-outline mt-6">
                Make another booking
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <h3 className="font-display text-2xl font-700 text-olive-900">Reserve in seconds</h3>
              <div>
                <label className="mb-1 block text-sm font-medium text-olive-800">Full name</label>
                <input
                  name="name" value={form.name} onChange={update} required
                  className="w-full rounded-lg border border-olive-100 bg-white px-4 py-2.5 text-olive-900 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-olive-800">Email</label>
                <input
                  type="email" name="email" value={form.email} onChange={update} required
                  className="w-full rounded-lg border border-olive-100 bg-white px-4 py-2.5 text-olive-900 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  placeholder="jane@email.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-olive-800">Date</label>
                  <input
                    type="date" name="date" value={form.date} onChange={update} required
                    className="w-full rounded-lg border border-olive-100 bg-white px-4 py-2.5 text-olive-900 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-olive-800">Time</label>
                  <input
                    type="time" name="time" value={form.time} onChange={update} required
                    className="w-full rounded-lg border border-olive-100 bg-white px-4 py-2.5 text-olive-900 outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-olive-800">Guests</label>
                <div className="flex flex-wrap gap-2">
                  {guestOptions.map((g) => (
                    <button
                      type="button" key={g} onClick={() => setForm((f) => ({ ...f, guests: g }))}
                      className={`h-10 w-10 rounded-full text-sm font-semibold transition ${
                        form.guests === g ? 'bg-olive-700 text-cream' : 'bg-white text-olive-800 ring-1 ring-olive-100 hover:ring-gold'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn-primary w-full">Confirm booking</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
