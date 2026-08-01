import { site } from './site'

export type Review = {
  author: string
  date: string
  excerpt: string
  link: string
}

// Реальные отзывы с Яндекс Карт. Цитаты приведены дословно — не расширять.
export const reviews: Review[] = [
  {
    author: 'Александр',
    date: 'июль 2025',
    excerpt:
      'Подготовленные Jimny, лифтованные, но без перебора. В хорошем состоянии, ухоженные',
    link: site.yandexMaps,
  },
  {
    author: 'Кирилл Локк',
    date: 'июль 2025',
    excerpt: 'Супер машинки, идеально для просмотра близлежащих окрестностей',
    link: site.yandexMaps,
  },
  {
    author: 'Оля Ю',
    date: 'июнь 2025',
    excerpt: 'Новые классные Джимики, минимальный пробег, первый год в аренде',
    link: site.yandexMaps,
  },
]
