import Reveal from '@/components/ui/Reveal'
import { IconArrowRight, IconQuote } from '@/components/ui/Icons'
import { reviews } from '@/data/reviews'
import { site } from '@/data/site'

const months: Record<string, string> = {
  январь: '01', февраль: '02', март: '03', апрель: '04',
  май: '05', июнь: '06', июль: '07', август: '08',
  сентябрь: '09', октябрь: '10', ноябрь: '11', декабрь: '12',
}

// «июль 2025» → «2025-07» для атрибута datetime. Данные в data/ не трогаем:
// машиночитаемая форма — дело разметки, а не содержимого.
function machineDate(date: string): string | undefined {
  const [month, year] = date.split(' ')
  const mm = months[month?.toLowerCase()]
  return mm && year ? `${year}-${mm}` : undefined
}

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
              <figure className="bg-card border-line hover-zoom-card flex h-full flex-col rounded-[14px] border px-6 py-7">
                <IconQuote className="text-accent/35 h-7 w-7" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">
                  «{review.excerpt}»
                </blockquote>
                <figcaption className="border-line mt-6 flex items-center gap-3 border-t pt-5">
                  {/* буква декоративная: aria-hidden убирает её у скринридеров,
                      select-none — из выделения, иначе копируется «ААлександр» */}
                  <span
                    aria-hidden="true"
                    className="bg-accent/10 text-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold select-none"
                  >
                    {review.author.charAt(0)}
                  </span>
                  <span>
                    <cite className="block text-[14px] font-semibold not-italic">
                      {review.author}
                    </cite>
                    <time
                      dateTime={machineDate(review.date)}
                      className="text-muted block text-[13px]"
                    >
                      {review.date}
                    </time>
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
            className="text-ink hover:text-accent group mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors lg:mt-10"
          >
            Смотреть отзывы на Яндексе
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
