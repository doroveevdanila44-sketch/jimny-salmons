import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { IconArrowRight } from '@/components/ui/Icons'
import { routes, type Route } from '@/data/routes'

export default function Routes() {
  return (
    <section id="routes" className="pb-16 lg:pb-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="eyebrow">Куда поехать на Jimny</p>
            <Link
              href="/routes"
              className="text-ink hover:text-accent group inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              Смотреть все маршруты
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {routes.map((route, index) => (
            <Reveal key={route.slug} delay={(index % 3) * 80} className="h-full">
              <RouteCard route={route} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RouteCard({ route, priority }: { route: Route; priority?: boolean }) {
  return (
    <article className="bg-card border-line group flex h-full flex-col overflow-hidden rounded-[14px] border transition-shadow duration-300 hover:shadow-[0_16px_44px_-26px_rgba(31,33,25,0.5)]">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={route.image}
          alt={route.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 py-5">
        <h3 className="text-[17px] leading-snug font-semibold">{route.title}</h3>
        <p className="text-accent mt-1.5 text-[13px] font-medium">{route.distance}</p>
        <p className="text-muted mt-3 text-[14px] leading-relaxed">{route.description}</p>
      </div>
    </article>
  )
}
