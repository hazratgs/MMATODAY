import { } from '../constants/News'

const initialState = {
  data: [ 
    {
      id: 32,
      style: 'big',
      title: 'Дана Уайт опроверг информацию о возвращении Нейта Диаза',
      description: 'Не так давно интернет вновь наполнили слухи о том, что знаменитый американский легковес Нейт Диаз, наконец, собирается вернуться в октагон.',
      type: 'UFC',
      img: 'http://karate.ru/media/images/content/2016/8/21/104_Nate_Diaz_vs_Conor_McGregor.0.jpg',
      views: 321,
      comments: 21,
      date: '59 минут назад',
      author: {
        img: 'https://leonardo.osnova.io/94ff37dd-361a-1148-e620-4adae912308a/-/scale_crop/32x32/center/',
        name: 'Никита Лихачёв'
      },
      like: -23,
      slider: true
    },
    {
      id: 33,
      style: 'big',
      title: 'Расул Мирзаев: Не стану отрицать - конфликт с Хабибом у нас произошел',
      description: 'За последнее время произошло очень много событий, которые я не комментировал. На что-то хотелось бы пролить ясность, а на остальное даже тратить сил не хочется.',
      type: 'UFC',
      img: 'http://cdn.iz.ru/sites/default/files/styles/900x506/public/article-2017-07/A37K2123.jpg?itok=IHV6Ayy-',
      views: 321,
      comments: 21,
      date: '59 минут назад',
      author: {
        img: 'https://leonardo.osnova.io/94ff37dd-361a-1148-e620-4adae912308a/-/scale_crop/32x32/center/',
        name: 'Никита Лихачёв'
      },
      like: -23,
      slider: true
    },
    {
      id: 29,
      style: 'small',
      title: 'Тони Фергюсон начал восстановление после операции на колене',
      description: 'Бывший временный чемпион UFC в легкой весовой категории Тони Фергюсон успешно прошел через операцию на связках колена и сообщил в инстаграм, что начал путь по восстановлению.',
      type: 'UFC',
      img: 'https://mma-today.ru/public/upload/695879a2851b39e55ba8cd7cb14ea1a175af0521.jpg',
      views: 321,
      comments: 21,
      date: '59 минут назад',
      author: {
        img: 'https://leonardo.osnova.io/94ff37dd-361a-1148-e620-4adae912308a/-/scale_crop/32x32/center/',
        name: 'Никита Лихачёв'
      },
      like: -23
    },
    {
      id: 24,
      style: 'big',
      title: 'Джо Роган: «UFC сложно дисциплинировать Макгрегора, потому что он стоит кучу денег»',
      description: 'Комментатор UFC Джо Роган считает, что Макгрегору все сходит с рук из-за его невероятной прибыльности.',
      type: 'UFC',
      img: 'https://assets.change.org/photos/5/ww/qr/QTwWqRRittJsyUB-800x450-noPad.jpg?1479336948',
      views: 865,
      comments: 23,
      date: '54 минуты назад',
      author: {
        img: 'https://leonardo.osnova.io/94ff37dd-361a-1148-e620-4adae912308a/-/scale_crop/32x32/center/',
        name: 'Никита Лихачёв'
      },
      like: 43
    },
    {
      id: 27,
      style: 'big',
      title: 'Эдсон Барбоза: Не могу назвать Хабиба Нурмагомедова лучшим, любой из топ 10 может одолеть его',
      description: 'Топовый боец легкого веса Эдсон Барбоза не может назвать чемпиона дивизиона Хабиба Нурмагомедова лучшим бойцом, считая, что уровень в UFC настолько высок, что любой из топов способен одолеть непобежденного россиянина.',
      type: 'Bellator',
      img: 'https://neulionmdnyc-a.akamaihd.net/u/ufc/thumbs/2016/06/02/14683_ex.jpg',
      views: 321,
      comments: 21,
      date: '59 минут назад',
      author: {
        img: 'https://leonardo.osnova.io/94ff37dd-361a-1148-e620-4adae912308a/-/scale_crop/32x32/center/',
        name: 'Никита Лихачёв'
      },
      like: -23
    }
  ]
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
