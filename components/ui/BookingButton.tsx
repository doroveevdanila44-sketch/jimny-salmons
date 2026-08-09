import { site } from '@/data/site'

type Variant = 'primary' | 'outline' | 'moss'
type Size = 'sm' | 'md' | 'lg'

type BookingButtonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children?: React.ReactNode
}

const base = [
  'inline-flex items-center justify-center rounded-[10px] font-semibold whitespace-nowrap',
  // именно `scale`, а не `transform`: утилиты scale-* в Tailwind 4 пишут
  // в самостоятельное CSS-свойство scale, и по transform переход не поедет
  'transition-[scale,background-color,border-color] duration-200 ease-out',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  // `hover:` в Tailwind 4 уже завёрнут в @media (hover: hover) — на тач-устройствах
  // не сработает. `motion-safe:` — это @media (prefers-reduced-motion: no-preference),
  // поэтому при выключенной анимации трансформаций не будет вовсе.
  'motion-safe:hover:scale-[1.04]',
  'motion-safe:active:scale-[0.98] motion-safe:active:duration-100',
].join(' ')

// После перехода на единый акцент `primary` и `moss` совпадают.
// Имена вариантов оставлены — это публичная сигнатура компонента.
const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-[var(--accent-dark)]',
  outline:
    'border border-line bg-card/90 text-ink hover:border-accent/40 hover:bg-[var(--card-hover)]',
  moss: 'bg-accent text-white hover:bg-[var(--accent-dark)]',
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
