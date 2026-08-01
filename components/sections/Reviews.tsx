import Reveal from '@/components/ui/Reveal'
import { IconArrowRight, IconQuote } from '@/components/ui/Icons'
import { reviews } from '@/data/reviews'
import { site } from '@/data/site'

export default function Reviews() {
  return (
    <section id="reviews" className="pb-16 lg:pb-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">Отзывы наших путешественников</p>
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10 lg:gap-6">
          {reviews.map((review, index) => (
            <Reveal key={review.author} delay={index * 80} className="h-full">
              <figure className="bg-card border-line flex h-full flex-col rounded-[14px] border px-6 py-7">
                <IconQuote className="text-clay/35 h-7 w-7" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">
                  «{review.excerpt}»
                </blockquote>
                <figcaption className="border-line mt-6 flex items-center gap-3 border-t pt-5">
                  <span
                    aria-hidden="true"
                    className="bg-moss/10 text-moss flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                  >
                    {review.author.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-[14px] font-semibold">{review.author}</span>
                    <span className="text-muted block text-[13px]">{review.date}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a
            href={site.yandexMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink hover:text-clay group mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors lg:mt-10"
          >
            Смотреть отзывы на Яндексе
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
