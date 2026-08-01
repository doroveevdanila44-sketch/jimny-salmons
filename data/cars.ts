export type Car = {
  id: string
  name: string
  year: string
  engine: string
  transmission: string
  drive: string
  status: string
  image: string
}

export const cars: Car[] = [
  {
    id: 'jimny-1',
    name: 'Jimny Sierra №1',
    year: '2024 год',
    engine: '1.5 л / 102 л.с.',
    transmission: 'АКПП',
    drive: 'Полный привод',
    status: 'Доступен',
    image: '/images/jimny-1.jpg',
  },
  {
    id: 'jimny-2',
    name: 'Jimny Sierra №2',
    year: '2024 год',
    engine: '1.5 л / 102 л.с.',
    transmission: 'АКПП',
    drive: 'Полный привод',
    status: 'Доступен',
    image: '/images/jimny-2.jpg',
  },
  {
    id: 'jimny-3',
    name: 'Jimny Sierra №3',
    year: '2024 год',
    engine: '1.5 л / 102 л.с.',
    transmission: 'АКПП',
    drive: 'Полный привод',
    status: 'Доступен',
    image: '/images/jimny-3.jpg',
  },
]
