import { useState } from 'react'
import { menuCategories } from '../data/menu'

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id)
  const current = menuCategories.find((c) => c.id === active)

  return (
    <section id="menu" className="bg-olive-900 py-24 text-cream">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="section-label">Our Menu</p>
          <h2 className="font-display text-4xl font-700 sm:text-5xl">Crafted with the seasons</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            A rotating selection of small plates, hearty mains and house desserts. Ask your
            server about today’s specials.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wider transition ${
                active === c.id
                  ? 'bg-gold text-olive-900'
                  : 'border border-cream/25 text-cream/80 hover:border-gold hover:text-gold'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-12 gap-y-7 sm:grid-cols-2">
          {current.items.map((item) => (
            <div key={item.name} className="group">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-600 text-cream transition group-hover:text-gold">
                  {item.name}
                </h3>
                <span className="h-px flex-1 translate-y-[-2px] border-b border-dashed border-cream/25" />
                <span className="font-display text-lg text-gold">{item.price}</span>
              </div>
              <p className="mt-1 text-sm text-cream/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
