// Общий источник навигации для шапки и футера.
// Вынесено из Header.tsx: тот помечен 'use client', и сервер получал бы
// не массив, а client-reference прокси.
export const navLinks = [
  { label: 'Главная', href: '/#hero' },
  { label: 'Автопарк', href: '/#fleet' },
  { label: 'Маршруты', href: '/routes' },
  { label: 'Условия', href: '/#terms' },
  { label: 'Отзывы', href: '/#reviews' },
  { label: 'Контакты', href: '/#contacts' },
]
