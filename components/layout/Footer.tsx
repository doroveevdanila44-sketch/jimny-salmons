import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/components/layout/nav'
import { site } from '@/data/site'

const legalLinks = [
  { label: 'Пользовательское соглашение', href: '#' },
  { label: 'Политика конфиденциальности', href: '#' },
]

export default function Footer() {
  return (
    <footer id="contacts" className="border-line border-t">
      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
          <div className="flex gap-4">
            <Image
              src="/images/logo.png"
              alt=""
              width={352}
              height={360}
              sizes="56px"
              className="h-14 w-auto shrink-0"
            />
            <div>
              <p className="text-muted max-w-[280px] text-sm leading-relaxed">
                <span className="text-ink font-semibold">{site.name}</span> — прокат Suzuki
                Jimny Sierra на Камчатке. Путешествуйте свободно и с комфортом.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <SocialLink href={site.vk} label="ВКонтакте">
                  <VkIcon />
                </SocialLink>
                <SocialLink href={site.telegram} label="Telegram">
                  <TelegramIcon />
                </SocialLink>
              </div>
            </div>
          </div>

          <FooterColumn title="Контакты">
            <a
              href={site.phoneHref}
              className="hover:text-clay text-ink font-semibold transition-colors"
            >
              {site.phone}
            </a>
            <p className="text-muted">{site.city}</p>
            <p className="text-muted">{site.address}</p>
          </FooterColumn>

          <FooterColumn title="Меню">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-clay transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Документы">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted hover:text-clay transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.yandexMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-clay transition-colors"
            >
              Отзывы на Яндекс Картах
            </a>
          </FooterColumn>
        </div>

        <div className="border-line text-muted mt-12 flex flex-col gap-2 border-t pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Создано с любовью на Камчатке</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="eyebrow mb-4">{title}</h2>
      <div className="flex flex-col items-start gap-2.5 text-[15px]">{children}</div>
    </div>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="border-line text-muted hover:text-clay hover:border-clay/40 flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
    >
      {children}
    </a>
  )
}

function VkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 17.5c-5.4 0-8.9-3.8-9-9.9h2.7c.1 4.5 2.2 6.4 3.8 6.8V7.6h2.6v3.9c1.6-.2 3.3-2 3.8-3.9h2.5a7.6 7.6 0 0 1-3.4 5 7.9 7.9 0 0 1 4 4.9h-2.8c-.6-1.8-2.1-3.2-4.1-3.4v3.4H13Z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.7 3.4 2.9 10.6c-1 .4-1 1.8 0 2.2l4.6 1.6 1.8 5.5c.3.8 1.3 1 1.9.4l2.5-2.4 4.6 3.4c.7.5 1.7.1 1.9-.7l3.3-15.1c.2-.9-.7-1.7-1.6-1.3ZM8.9 14l9-5.6c.2-.1.4.2.2.3l-7.3 6.6c-.3.2-.4.5-.5.9l-.3 2c0 .1-.2.2-.3 0l-1-3.5c0-.3 0-.6.2-.7Z" />
    </svg>
  )
}
