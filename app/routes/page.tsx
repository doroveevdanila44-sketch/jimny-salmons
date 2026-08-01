import type { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'
import { RouteCard } from '@/components/sections/Routes'
import { routes } from '@/data/routes'

export const metadata: Metadata = {
  title: 'Маршруты по Камчатке — Jimny Salmons',
  description:
    'Куда поехать на Suzuki Jimny Sierra: Халактырский пляж, Малкинские источники, Вилючинский перевал, Гора Верблюд, Мыс Маячный, Вулкан Горелый.',
}

export default function RoutesPage() {
  return (
    <div className="pt-[112px] pb-16 lg:pt-[136px] lg:pb-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">Куда поехать на Jimny</p>
          <h1 className="mt-4 text-[34px] leading-[1.12] font-semibold lg:text-[46px]">
            Маршруты
          </h1>
          <p className="text-muted mt-5 max-w-[520px] leading-relaxed">
            Направления, до которых легко добраться на Jimny Sierra за один день.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {routes.map((route, index) => (
            <Reveal key={route.slug} delay={(index % 3) * 80} className="h-full">
              {/* первая карточка — LCP этой страницы */}
              <RouteCard route={route} priority={index === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="text-muted border-line mt-12 border-t pt-8 text-center text-sm">
            Маршруты ещё добавляются
          </p>
        </Reveal>
      </div>
    </div>
  )
}
