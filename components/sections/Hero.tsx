import Image from 'next/image'
import BookingButton from '@/components/ui/BookingButton'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex flex-col lg:block lg:min-h-[86vh]"
    >
      {/* Фото. На мобиле — отдельным блоком под текстом, кадр обрезан справа,
          машина остаётся целиком. На десктопе — фон всей секции. */}
      <div className="relative order-2 aspect-[5/4] w-full min-[540px]:aspect-[16/9] lg:absolute lg:inset-0 lg:z-0 lg:aspect-auto lg:h-full">
        <Image
          src="/images/hero.jpg"
          alt="Suzuki Jimny Sierra на берегу у подножия вулкана на Камчатке"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />
        {/* стык градиента и фото: доводим небо кадра до цвета градиента */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#739AC4] via-[#739AC4]/55 to-transparent lg:hidden" />
        {/* скрим под текстом на десктопе */}
        <div className="from-paper/85 via-paper/25 absolute inset-0 hidden bg-gradient-to-l to-transparent lg:block" />
      </div>

      {/* Текст */}
      <div className="order-1 bg-gradient-to-b from-[#6A94C3] to-[#739AC4] px-5 pt-[92px] pb-9 sm:px-6 lg:relative lg:z-10 lg:bg-none lg:px-8 lg:pt-0 lg:pb-0">
        <div className="mx-auto flex w-full max-w-[1240px] lg:min-h-[86vh] lg:items-center lg:justify-end lg:pt-20">
          <div className="lg:max-w-[560px] lg:text-right">
            <h1 className="text-[40px] leading-[1.06] font-bold min-[540px]:text-[52px] lg:text-[64px] xl:text-[70px]">
              <span className="block">Твоя Камчатка</span>
              <span className="block">начинается</span>
              <span className="lg:text-clay block text-white">с Jimny</span>
            </h1>

            <p className="text-ink lg:text-muted mt-5 max-w-[420px] text-[15px] leading-relaxed lg:mt-6 lg:ml-auto lg:text-base">
              Свежие Suzuki Jimny Sierra для путешествий по одному из самых красивых мест
              на Земле.
            </p>

            <BookingButton size="lg" className="mt-7 lg:mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
