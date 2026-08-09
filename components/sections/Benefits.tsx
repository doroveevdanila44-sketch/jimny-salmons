import Reveal from '@/components/ui/Reveal'
import {
  IconPlane,
  IconRuble,
  IconShieldCheck,
  IconSupport,
} from '@/components/ui/Icons'
import { site } from '@/data/site'

const benefits = [
  { Icon: IconRuble, title: site.priceFrom, subtitle: 'в сутки' },
  { Icon: IconPlane, title: 'Доставка', subtitle: 'в аэропорт' },
  { Icon: IconSupport, title: 'Поддержка', subtitle: '24/7' },
  { Icon: IconShieldCheck, title: 'Свежие', subtitle: 'автомобили' },
]

export default function Benefits() {
  return (
    <section className="relative z-20 -mt-10 lg:-mt-16">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          {/* фон-разделитель: gap-px проявляет цвет --line между ячейками */}
          <div className="bg-line border-line grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border shadow-[0_10px_40px_-24px_rgba(31,33,25,0.35)] lg:grid-cols-4">
            {benefits.map(({ Icon, title, subtitle }) => (
              <div
                key={title}
                className="bg-card flex items-center gap-3.5 px-5 py-6 sm:gap-4 sm:px-7 lg:py-7"
              >
                <Icon className="text-accent h-[26px] w-[26px]" />
                <div className="min-w-0">
                  <p className="text-[15px] leading-tight font-semibold sm:text-base">
                    {title}
                  </p>
                  <p className="text-muted mt-0.5 text-[13px] leading-tight sm:text-sm">
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
