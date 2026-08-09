import Image from 'next/image'
import BookingButton from '@/components/ui/BookingButton'

export default function FooterCta() {
  return (
    <section className="relative isolate flex flex-col lg:block lg:min-h-[76vh]">
      {/* Фото. На мобиле — под текстом, кадр обрезан слева, машина в кадре целиком.
          На десктопе — фон баннера во всю ширину. */}
      <div className="relative order-2 aspect-[5/4] w-full min-[540px]:aspect-[16/9] lg:absolute lg:inset-0 lg:z-0 lg:aspect-auto lg:h-full">
        <Image
          src="/images/footer-cta.jpg"
          alt="Suzuki Jimny Sierra на берегу океана на закате"
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* стык градиента и фото */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#85807F] via-[#85807F]/55 to-transparent lg:hidden" />
        {/* скрим под текстом на десктопе */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-black/60 via-black/25 to-transparent lg:block" />
      </div>

      {/* Текст */}
      <div className="order-1 bg-gradient-to-b from-[#7C7B7F] to-[#85807F] px-5 py-12 sm:px-6 lg:relative lg:z-10 lg:bg-none lg:px-8 lg:py-0">
        <div className="mx-auto flex w-full max-w-[1240px] lg:min-h-[76vh] lg:items-center">
          <div className="lg:max-w-[560px]">
            <h2 className="text-[32px] leading-[1.1] font-bold text-white min-[540px]:text-[40px] lg:text-[52px]">
              <span className="block">Камчатка ждёт.</span>
              <span className="block">Выберите даты</span>
              <span className="block">и отправляйтесь в путь</span>
            </h2>
            {/* кнопка лежит на фото — белая рамка отделяет её от кадра.
                Горизонтальные отступы срезаны на толщину рамки (28 → 27.5),
                чтобы габариты остались прежними: высоту рамка не меняет,
                у всех элементов box-sizing: border-box.
                Ширина задана произвольным свойством: `border-[0.6px]`
                Tailwind 4 разбирает как цвет и молча выкидывает.
                Компенсируем 0.5, а не 0.6: субпиксельную рамку браузер
                прижимает к целому пикселю устройства и в раскладке
                использует 0.5px — то, что реально рисуется. */}
            <BookingButton
              size="lg"
              className="mt-7 border-white [border-width:0.6px] px-[27.5px] lg:mt-9"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
