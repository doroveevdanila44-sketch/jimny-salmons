/**
 * Тонкие линейные иконки, одна сетка 24×24, обводка 1.5 — по стилю макета.
 * Цвет наследуется от родителя через currentColor.
 */

type IconProps = {
  className?: string
}

function Svg({ className = '', children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-6 w-6 shrink-0 ${className}`}
    >
      {children}
    </svg>
  )
}

/* ---------- Преимущества ---------- */

export function IconRuble(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9 20.5V4h4.4a4.25 4.25 0 0 1 0 8.5H9" />
      <path d="M5.8 16.2h8.4" />
    </Svg>
  )
}

export function IconPlane(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.6c.9 0 1.6.8 1.6 1.8v4.3l7.4 4.2v2l-7.4-2.3v4.2l2.4 1.7v1.6L12 19l-4 1.1v-1.6l2.4-1.7v-4.2L3 14.9v-2l7.4-4.2V4.4c0-1 .7-1.8 1.6-1.8Z" />
    </Svg>
  )
}

export function IconSupport(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 13.2v-1.4a8 8 0 0 1 16 0v1.4" />
      <path d="M4 13h2.4a1 1 0 0 1 1 1v3.8a1 1 0 0 1-1 1H5.2a1.2 1.2 0 0 1-1.2-1.2Z" />
      <path d="M20 13h-2.4a1 1 0 0 0-1 1v3.8a1 1 0 0 0 1 1h1.2a1.2 1.2 0 0 0 1.2-1.2Z" />
      <path d="M20 18.8v.4a2.6 2.6 0 0 1-2.6 2.6H13" />
    </Svg>
  )
}

export function IconShieldCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.8 4.8 5.6v5.8c0 4.3 2.9 8.3 7.2 9.6 4.3-1.3 7.2-5.3 7.2-9.6V5.6Z" />
      <path d="m8.9 11.9 2.2 2.2 4.2-4.4" />
    </Svg>
  )
}

/* ---------- Характеристики машин ---------- */

export function IconCalendar(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.6h17M8 3v4M16 3v4" />
    </Svg>
  )
}

export function IconGauge(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.6 18.4a8.9 8.9 0 1 1 16.8 0" />
      <path d="m12.4 15.4 3.4-4.6" />
      <circle cx="11.7" cy="16.4" r="1.4" />
    </Svg>
  )
}

export function IconGearbox(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6.5 8v9.5M12 8v9.5M17.5 8v9.5M6.5 12.6h11" />
      <circle cx="12" cy="5.6" r="2.1" />
    </Svg>
  )
}

export function IconAllWheel(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="6.6" cy="6.6" r="2.6" />
      <circle cx="17.4" cy="6.6" r="2.6" />
      <circle cx="6.6" cy="17.4" r="2.6" />
      <circle cx="17.4" cy="17.4" r="2.6" />
      <path d="M9.2 6.6h5.6M9.2 17.4h5.6M12 6.6v10.8" />
    </Svg>
  )
}

/* ---------- Снаряжение ---------- */

export function IconUsb(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21V4.2" />
      <path d="m9.2 7 2.8-3 2.8 3" />
      <path d="m12 16.6-3.7-3" />
      <circle cx="7.2" cy="12.9" r="1.5" />
      <path d="m12 13.6 3.7-3" />
      <rect x="15.4" y="7.4" width="3.4" height="3.4" rx="0.5" />
    </Svg>
  )
}

export function IconFirstAid(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.6" y="6.6" width="18.8" height="13" rx="2.5" />
      <path d="M8.8 6.6V5.2a1.6 1.6 0 0 1 1.6-1.6h3.2a1.6 1.6 0 0 1 1.6 1.6v1.4" />
      <path d="M12 10.4v5.4M9.3 13.1h5.4" />
    </Svg>
  )
}

export function IconRope(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2.6 9.4c3.1 0 3.1 6.4 6.2 6.4s3.1-6.4 6.2-6.4" />
      <path d="M15 9.2a2.7 2.7 0 1 1 5.4 0v4.4a3.3 3.3 0 0 1-6.6 0" />
    </Svg>
  )
}

export function IconCompressor(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9.2" cy="9.2" r="5.6" />
      <path d="M9.2 6.4v2.8l2 1.5" />
      <path d="M13.4 13.1 17 16.7a2.2 2.2 0 0 0 3.1 0" />
      <path d="M5.6 20h7.2" />
    </Svg>
  )
}

export function IconFuel(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 20.4V5.6a2 2 0 0 1 2-2h5.4a2 2 0 0 1 2 2v14.8" />
      <path d="M2.6 20.4h12.2" />
      <path d="M13.4 10.2h3a2 2 0 0 1 2 2v4.7a1.8 1.8 0 0 0 3.6 0V8.6l-2.6-2.6" />
      <path d="M6.6 7.8h4.2" />
    </Svg>
  )
}

export function IconTable(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2.6 8.6h18.8" />
      <path d="M5.6 8.6 4.2 19.6M18.4 8.6l1.4 11M6.6 14.2h10.8" />
    </Svg>
  )
}

export function IconChair(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 4.2v9M17 4.2v9M7 8.6h10" />
      <path d="M5.4 13.2h13.2M7.8 13.2 6.6 19.8M16.2 13.2l1.2 6.6" />
    </Svg>
  )
}

export function IconGrill(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.8 9.6h16.4M6 13.4h12" />
      <path d="M6.6 9.6 4.6 19.8M17.4 9.6l2 10.2" />
      <path d="M8.4 6.2c0-1.2 1.1-1.5 1.1-2.7M12 6.2c0-1.2 1.1-1.5 1.1-2.7M15.6 6.2c0-1.2 1.1-1.5 1.1-2.7" />
    </Svg>
  )
}

export function IconGift(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.2" y="9.6" width="17.6" height="11.2" rx="1.6" />
      <path d="M2 9.6h20M12 9.6v11.2" />
      <path d="M12 9.6S10.6 4 8.2 4a2.8 2.8 0 0 0 0 5.6ZM12 9.6S13.4 4 15.8 4a2.8 2.8 0 0 1 0 5.6Z" />
    </Svg>
  )
}

/* ---------- Условия ---------- */

export function IconTag(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.6 11.4V4.6a1 1 0 0 1 1-1h6.8a1 1 0 0 1 .7.3l8.3 8.3a1 1 0 0 1 0 1.4l-6.8 6.8a1 1 0 0 1-1.4 0l-8.3-8.3a1 1 0 0 1-.3-.7Z" />
      <circle cx="8.1" cy="8.1" r="1.4" />
    </Svg>
  )
}

export function IconChecklist(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9.6 5.4h10.8M9.6 12h10.8M9.6 18.6h10.8" />
      <path d="m3.2 5.2 1.4 1.4L7.2 4M3.2 11.8l1.4 1.4L7.2 10.6M3.2 18.4l1.4 1.4L7.2 17.2" />
    </Svg>
  )
}

export function IconTruck(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2.8 6.4h10.6v10.2H2.8z" />
      <path d="M13.4 9.8h3.7l3.6 3.6v3.2h-7.3z" />
      <circle cx="7.2" cy="18.2" r="1.9" />
      <circle cx="16.8" cy="18.2" r="1.9" />
    </Svg>
  )
}

export function IconInfo(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11.2v5.4M12 7.6v.9" />
    </Svg>
  )
}

/* ---------- Прочее ---------- */

export function IconArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12h15M13.6 6.6 19.8 12l-6.2 5.4" />
    </Svg>
  )
}

export function IconQuote(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M9.6 6.4c-3 1.2-4.8 3.6-4.8 6.6v4.6h5.6v-5.4H7.8c0-1.9.8-3.2 2.6-4ZM19.2 6.4c-3 1.2-4.8 3.6-4.8 6.6v4.6H20v-5.4h-2.6c0-1.9.8-3.2 2.6-4Z" />
    </Svg>
  )
}
