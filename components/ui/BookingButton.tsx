import { site } from '@/data/site'

type Variant = 'primary' | 'outline' | 'moss'
type Size = 'sm' | 'md' | 'lg'

type BookingButtonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children?: React.ReactNode
}

const base =
  'inline-flex items-center justify-center rounded-[10px] font-semibold whitespace-nowrap transition-colors duration-200'

const variants: Record<Variant, string> = {
  primary: 'bg-clay text-white hover:bg-[#c46231]',
  outline: 'border border-line bg-card/90 text-ink hover:border-moss/40 hover:bg-card',
  moss: 'bg-moss text-white hover:bg-[#3c4a29]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-[52px] px-7 text-base',
}

/**
 * Главный CTA сайта — единственная точка входа в бронирование.
 * Прямые tel:-ссылки на страницах не использовать.
 */
export default function BookingButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children = 'Выбрать даты',
}: BookingButtonProps) {
  return (
    // TODO: заменить на открытие модалки календаря бронирования
    <a
      href={site.phoneHref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  )
}
