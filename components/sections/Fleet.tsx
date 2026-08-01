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
        <div className="lg:grid lg:grid-cols-[minmax(240px,300px)_1fr] lg:items-start lg:gap-14">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Автопарк</p>
              <h2 className="mt-4 text-[32px] leading-[1.12] font-semibold lg:text-[40px]">
                Три Jimny.
                <br />
                Один правильный выбор.
              </h2>
              <p className="text-muted mt-5 max-w-[380px] leading-relaxed">
                Все автомобили свежие, ухоженные и полностью готовы к дорогам Камчатки.
              </p>
            </div>
          </Reveal>

          {/* мобайл — горизонтальная карусель, десктоп — три колонки */}
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
            {cars.map((car, index) => (
              <Reveal
                key={car.id}
                delay={index * 90}
                className="w-[78vw] max-w-[320px] shrink-0 snap-start lg:w-auto lg:max-w-none"
              >
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
        <span className="text-moss bg-moss/10 rounded-full px-2.5 py-1 text-[11px] font-semibold">
          {car.status}
        </span>
      </div>

      <div className="relative mx-4 aspect-[2/3] overflow-hidden rounded-[10px]">
        <Image
          src={car.image}
          alt={`${car.name} — Suzuki Jimny Sierra`}
          fill
          sizes="(max-width: 1024px) 78vw, 260px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 px-4">
        {specs.map(({ Icon, label }) => (
          <li key={label} className="flex items-center gap-2">
            <Icon className="text-muted h-[18px] w-[18px]" />
            <span className="text-[13px] leading-tight">{label}</span>
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
