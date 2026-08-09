import Image from 'next/image'
import BookingButton from '@/components/ui/BookingButton'
import Reveal from '@/components/ui/Reveal'
import {
  IconAllWheel,
  IconCalendar,
  IconGauge,
  IconGearbox,
} from '@/components/ui/Icons'
import { cars, type Car } from '@/data/cars'

export default function Fleet() {
  return (
    <section id="fleet" className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        {/* 768–1023: общая сетка 2×2 — текст занимает первую ячейку, карточка №1
            встаёт справа от него, №2 и №3 уходят во второй ряд.
            1024–1280: текст снова над карточками, иначе боковая колонка съедает
            ширину и характеристики переносятся. */}
        {/* auto-rows-fr — чтобы оба ряда были равной высоты: иначе они
            считаются независимо и карточки расходятся на пиксель */}
        <div className="md:grid md:auto-rows-fr md:grid-cols-2 md:gap-5 lg:block xl:grid xl:auto-rows-auto xl:grid-cols-[minmax(220px,250px)_1fr] xl:items-start xl:gap-10">
          <Reveal>
            <div className="xl:sticky xl:top-28">
              <p className="eyebrow">Автопарк</p>
              <h2 className="mt-4 text-[32px] leading-[1.12] font-semibold lg:text-[40px] xl:text-[34px]">
                Три Jimny.
                <br />
                Один правильный выбор.
              </h2>
              <p className="text-muted mt-5 max-w-[420px] leading-relaxed">
                Все автомобили свежие, ухоженные и полностью готовы к дорогам Камчатки.
              </p>
            </div>
          </Reveal>

          {/* на md контейнер — display:contents, чтобы карточки стали ячейками
              внешней сетки 2×2 и попали в один ряд с текстом */}
          <div className="mt-10 grid grid-cols-1 items-stretch gap-4 md:contents lg:grid lg:grid-cols-3 lg:gap-5 xl:mt-0 xl:gap-6">
            {cars.map((car, index) => (
              <Reveal key={car.id} delay={index * 90} className="h-full">
                <CarCard car={car} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CarCard({ car }: { car: Car }) {
  const specs = [
    { Icon: IconCalendar, label: car.year },
    { Icon: IconGauge, label: car.engine },
    { Icon: IconGearbox, label: car.transmission },
    { Icon: IconAllWheel, label: car.drive },
  ]

  return (
    <article className="bg-card border-line group flex h-full flex-col overflow-hidden rounded-[14px] border transition-shadow duration-300 hover:shadow-[0_16px_44px_-26px_rgba(31,33,25,0.5)]">
      <div className="flex items-center justify-between gap-3 px-4 pt-4 pb-3">
        <h3 className="text-[15px] font-semibold">{car.name}</h3>
        <span className="text-accent bg-accent/10 rounded-full px-2.5 py-1 text-[11px] font-semibold">
          {car.status}
        </span>
      </div>

      {/* 2:3 — ровно пропорции исходников 1024×1536, кроп нулевой.
          shrink-0, чтобы флекс-колонка карточки не сплющила кадр по высоте. */}
      <div className="relative mx-4 aspect-[2/3] shrink-0 overflow-hidden rounded-[10px]">
        <Image
          src={car.image}
          alt={`${car.name} — Suzuki Jimny Sierra`}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 46vw, (max-width: 1280px) 33vw, 290px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 px-4">
        {specs.map(({ Icon, label }) => (
          <li key={label} className="flex min-w-0 items-center gap-2 xl:gap-1.5">
            <Icon className="text-muted h-[18px] w-[18px] xl:h-4 xl:w-4" />
            <span className="text-[13px] leading-tight lg:whitespace-nowrap xl:text-[12px]">
              {label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto p-4">
        <BookingButton variant="moss" className="w-full">
          Выбрать
        </BookingButton>
      </div>
    </article>
  )
}
