const stats = [
  { value: '10+', label: 'Years of craft' },
  { value: '48', label: 'Seasonal dishes' },
  { value: '4.9', label: 'Average rating' },
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80"
            alt="Chef plating a dish in the Olivea kitchen"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-olive-700 px-7 py-5 text-cream shadow-lg sm:block">
            <p className="font-display text-3xl font-700">est. 2014</p>
            <p className="text-xs uppercase tracking-widest text-cream/80">family owned</p>
          </div>
        </div>

        <div>
          <p className="section-label">Our Story</p>
          <h2 className="font-display text-4xl font-700 leading-tight text-olive-900 sm:text-5xl">
            A taste of the coast, in the heart of the city
          </h2>
          <p className="mt-6 text-olive-800/80">
            Olivea began with a simple idea: bring the honest, sun-soaked cooking of the
            Mediterranean to a table where everyone feels at home. Our chefs work with local
            growers and small producers to build a menu that changes with the seasons.
          </p>
          <p className="mt-4 text-olive-800/80">
            From wood-fired mains to house-made desserts, every plate is made with care — and
            best enjoyed slowly, with good company and a glass of something special.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-olive-100 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-700 text-olive-700">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-olive-800/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
