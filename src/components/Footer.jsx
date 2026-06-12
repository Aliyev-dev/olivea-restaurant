export default function Footer() {
  return (
    <footer className="bg-olive-900 text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <p className="font-display text-2xl font-700 text-cream">Olivea<span className="text-gold">.</span></p>
          <p className="mt-3 max-w-xs text-sm text-cream/60">
            Modern Mediterranean dining, made from the freshest seasonal ingredients.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Hours</h4>
          <ul className="space-y-1 text-sm">
            <li>Tue – Thu · 12:00 – 22:00</li>
            <li>Fri – Sat · 12:00 – 23:00</li>
            <li>Sunday · 12:00 – 21:00</li>
            <li>Monday · Closed</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Visit</h4>
          <ul className="space-y-1 text-sm">
            <li>24 Harbour Lane</li>
            <li>Old Town</li>
            <li>+1 (555) 018-2240</li>
            <li>hello@olivea.test</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Follow</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="transition hover:text-gold">Instagram</a></li>
            <li><a href="#home" className="transition hover:text-gold">Facebook</a></li>
            <li><a href="#home" className="transition hover:text-gold">TripAdvisor</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Olivea Restaurant. All rights reserved.</p>
          <p>Designed &amp; built by Ali A. · Demo project</p>
        </div>
      </div>
    </footer>
  )
}
