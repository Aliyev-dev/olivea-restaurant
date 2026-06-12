import { galleryImages, testimonials } from '../data/menu'

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="section-label">Gallery</p>
          <h2 className="font-display text-4xl font-700 text-olive-900 sm:text-5xl">A look inside Olivea</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((src, i) => (
            <div key={i} className="group aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={`Olivea dish and interior ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-olive-100">
              <div className="mb-4 text-gold">★★★★★</div>
              <blockquote className="font-display text-lg italic leading-relaxed text-olive-900">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold text-olive-800">{t.author}</p>
                <p className="text-sm text-olive-800/60">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
