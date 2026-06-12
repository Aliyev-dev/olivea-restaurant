export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-olive-900/65" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
        <p className="section-label animate-fadeUp">Modern Mediterranean · Est. 2014</p>
        <h1 className="animate-fadeUp font-display text-5xl font-700 leading-tight sm:text-6xl md:text-7xl">
          Where every dish<br />tells a story
        </h1>
        <p className="mx-auto mt-6 max-w-xl animate-fadeUp text-base text-cream/85 sm:text-lg">
          Seasonal plates, sun-drenched flavours, and warm hospitality — crafted from the
          freshest ingredients of the Mediterranean coast.
        </p>
        <div className="mt-9 flex animate-fadeUp flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#reserve" className="btn-primary">Reserve a Table</a>
          <a href="#menu" className="btn-outline border-cream text-cream hover:bg-cream hover:text-olive-900">
            View the Menu
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/70 transition hover:text-cream"
        aria-label="Scroll down"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
