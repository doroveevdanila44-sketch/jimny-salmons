import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import {
  IconChair,
  IconCompressor,
  IconFirstAid,
  IconFuel,
  IconGift,
  IconGrill,
  IconRope,
  IconTable,
  IconUsb,
} from '@/components/ui/Icons'

const included = [
  { Icon: IconUsb, label: 'USB-зарядка' },
  { Icon: IconFirstAid, label: 'Аптечка' },
  { Icon: IconRope, label: 'Буксировочный трос' },
  { Icon: IconCompressor, label: 'Компрессор' },
  { Icon: IconFuel, label: 'Полный бак' },
]

const onRequest = [
  { Icon: IconTable, label: 'Столик' },
  { Icon: IconChair, label: '2 стула' },
  { Icon: IconGrill, label: 'Мангал' },
]

export default function Equipment() {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="border-line grid overflow-hidden rounded-[14px] border lg:grid-cols-[1.15fr_1fr]">
            <div className="bg-card px-6 py-10 sm:px-9 lg:px-11 lg:py-12">
              <p className="eyebrow">Всё для поездки уже внутри</p>
              <h2 className="mt-4 text-[30px] leading-[1.14] font-semibold lg:text-[38px]">
                Берите только
                <br />
                хорошее настроение
              </h2>
              <p className="text-muted mt-5 max-w-[420px] leading-relaxed">
                Мы позаботились обо всём необходимом для вашего путешествия.
              </p>

              <ul className="mt-9 grid grid-cols-3 gap-x-4 gap-y-7 sm:grid-cols-5">
                {included.map(({ Icon, label }) => (
                  <li key={label} className="flex flex-col items-center gap-2.5 text-center">
                    <Icon className="text-moss" />
                    <span className="text-[12px] leading-snug">{label}</span>
                  </li>
                ))}
              </ul>

              <div className="border-line bg-paper/70 mt-9 flex flex-col gap-4 rounded-[12px] border px-5 py-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="text-muted flex shrink-0 items-center gap-2.5 text-[13px]">
                  <IconGift className="text-moss h-5 w-5" />
                  По запросу бесплатно:
                </p>
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  {onRequest.map(({ Icon, label }) => (
                    <li key={label} className="flex items-center gap-2 text-[13px] font-medium">
                      <Icon className="text-muted h-[18px] w-[18px]" />
                      {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative order-first min-h-[240px] sm:min-h-[320px] lg:order-none lg:min-h-0">
              <Image
                src="/images/equipment.jpg"
                alt="Столик, стулья и мангал на берегу у Jimny"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
