import Reveal from '@/components/ui/Reveal'
import {
  IconChecklist,
  IconInfo,
  IconTag,
  IconTruck,
} from '@/components/ui/Icons'

const tiles = [
  {
    Icon: IconTag,
    title: 'Тарифы',
    items: ['от 3 до 5 суток — 7 500 ₽ в сутки', 'от 5 суток — 7 000 ₽ в сутки'],
  },
  {
    Icon: IconChecklist,
    title: 'Что входит',
    items: ['Полный бак', 'Чистая машина', 'Комплект в багажнике'],
  },
  {
    Icon: IconTruck,
    title: 'Доставка',
    items: ['Привезём в аэропорт или по городу'],
  },
  {
    Icon: IconInfo,
    title: 'Важно знать',
    items: [
      'Оплата наличными',
      'Есть список запрещённых маршрутов — обсуждаем при бронировании',
    ],
  },
]

export default function Terms() {
  return (
    <section id="terms" className="pb-16 lg:pb-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">Условия</p>
          <h2 className="mt-4 text-[30px] leading-[1.14] font-semibold lg:text-[38px]">
            Всё честно и заранее
          </h2>
        </Reveal>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-11 lg:grid-cols-4 lg:gap-5">
          {tiles.map(({ Icon, title, items }, index) => (
            <Reveal key={title} delay={index * 80} className="h-full">
              <article className="bg-card border-line flex h-full flex-col rounded-[14px] border px-6 py-7">
                <Icon className="text-accent" />
                <h3 className="mt-5 text-[17px] font-semibold">{title}</h3>
                <ul className="text-muted mt-3.5 flex flex-col gap-2.5 text-[14px] leading-relaxed">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="bg-accent/70 mt-[9px] h-[3px] w-[3px] shrink-0 rounded-full"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
