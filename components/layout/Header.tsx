'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BookingButton from '@/components/ui/BookingButton'
import { navLinks } from '@/components/layout/nav'
import { site } from '@/data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-paper/92 border-line border-b backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center gap-6 px-5 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          aria-label={`${site.name} — на главную`}
          className="shrink-0"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={352}
            height={360}
            sizes="52px"
            priority
            className="h-11 w-auto lg:h-[52px]"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-accent text-[15px] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 lg:ml-0 lg:gap-6">
          <a
            href={site.phoneHref}
            className="hover:text-accent hidden items-center gap-2 text-[15px] font-semibold transition-colors md:inline-flex"
          >
            <PhoneIcon />
            {site.phone}
          </a>
          {/* обёртка, а не className: `hidden` в className проиграло бы
              собственному `inline-flex` кнопки — приоритет решает порядок в CSS */}
          <span className="hidden sm:inline-flex">
            <BookingButton />
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            className="border-line bg-card/80 flex h-10 w-10 items-center justify-center rounded-[10px] border lg:hidden"
          >
            <span className="relative block h-[14px] w-[18px]">
              <span
                className={`bg-ink absolute left-0 block h-[1.5px] w-full transition-all duration-300 ${
                  open ? 'top-[6px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`bg-ink absolute top-[6px] left-0 block h-[1.5px] w-full transition-opacity duration-200 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`bg-ink absolute left-0 block h-[1.5px] w-full transition-all duration-300 ${
                  open ? 'top-[6px] -rotate-45' : 'top-[12px]'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* мобильное меню */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="bg-paper/98 border-line h-[calc(100dvh-72px)] border-t backdrop-blur-md lg:hidden"
      >
        <nav className="flex flex-col px-5 py-3 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-line/70 border-b py-4 text-[17px] font-medium last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-4 px-5 pt-3 sm:px-6">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-[17px] font-semibold"
          >
            <PhoneIcon />
            {site.phone}
          </a>
          <span className="block sm:hidden">
            <BookingButton size="lg" className="w-full" />
          </span>
        </div>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-accent"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  )
}
