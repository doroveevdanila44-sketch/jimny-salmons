export type Route = {
  slug: string
  title: string
  distance: string
  description: string
  image: string
}

export const routes: Route[] = [
  {
    slug: 'khalaktyrsky',
    title: 'Халактырский пляж',
    distance: '40 км от Петропавловска',
    description: 'Чёрный вулканический песок, Тихий океан и бескрайняя линия горизонта.',
    image: '/images/route-khalaktyrsky.jpg',
  },
  {
    slug: 'malkinskie',
    title: 'Малкинские источники',
    distance: '130 км от Петропавловска',
    description:
      'Горячие природные источники среди лесов — идеальное место для отдыха после дороги.',
    image: '/images/route-malkinskie.jpg',
  },
  {
    slug: 'vilyuchinsky',
    title: 'Вилючинский перевал',
    distance: '120 км от Петропавловска',
    description:
      'Панорамные виды на вулканы, снежники и одну из самых красивых дорог Камчатки.',
    image: '/images/route-vilyuchinsky.jpg',
  },
  {
    slug: 'verblyud',
    title: 'Гора Верблюд',
    distance: '80 км от Петропавловска',
    description:
      'Лёгкий маршрут к необычной вершине с потрясающими видами на домашние вулканы.',
    image: '/images/route-verblyud.jpg',
  },
  {
    slug: 'mayachny',
    title: 'Мыс Маячный',
    distance: '110 км от Петропавловска',
    description: 'Исторический маяк, отвесные скалы и мощные волны Тихого океана.',
    image: '/images/route-mayachny.jpg',
  },
  {
    slug: 'gorely',
    title: 'Вулкан Горелый',
    distance: '110 км от Петропавловска',
    description:
      'Кратеры с бирюзовыми озёрами и настоящий вулканический ландшафт без аналогов.',
    image: '/images/route-gorely.jpg',
  },
]
