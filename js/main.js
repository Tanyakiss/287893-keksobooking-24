const TOTAL_ADS = 10;

const offer = {
  TITLES:[
    'Уютная квартира на Невском проспекте',
    'Парнас наше все',
    'Общежитие для студента',
    'Двушка для молодой семьи',
    'Просторная трешка',
    'Уютная квартира на Невском проспекте',
    'Парнас наше все',
    'Общежитие для студента',
    'Двушка для молодой семьи',
    'Просторная трешка',
  ],
  PRICE:{
    min: 20000,
    max: 80000,
  },
  TYPES:[
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ],
  ROOMS:{
    min:1,
    max:4,
  },
  GUESTS:{
    min:1,
    max:10,
  },
  CHECKINS:[
    '12:00',
    '13:00',
    '14:00',
  ],
  CHECKOUTS:[
    '12:00',
    '13:00',
    '14:00',
  ],
  FEATURES:[
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
  DESCS:[
    'Продается отличная 3-к квартира с ликвидной планировкой - на разные стороны, площадью 99/56/14 и плюс лоджия 9м (на кухню и комнату), просторный холл 20м, без отделки, с/у раздельные, высота потолков 2,80м. Вид на Волгу и на город. Смотрите расположение квартир по сторонам света.',
    'Собственник! Сдам в аренду на длительный срок 2-комн. квартиру, полностью мебелированную. ',
    'Без комиссии, залог за один месяц, можно разбить оплату на два месяца. Ком услуги входят в стоимость.',
    'Продаю 1ком квартиру расположенную на 5 этаже 17 этажного дома. В квартире выполнен евроремонт из дорогостоящих качественных материалов. Всё комнаты выполнены в светлых тонах.',
    'Все необходимое для комфортного проживания. Большая кровать и 2-х спальный диван, ЖК телевизор, холодильник, стиральная машина, микроволновая печь, чайник, утюг, гладильная доска, фен, набор посуды для приготовления и приема пищи.',
    'Продается отличная 3-к квартира с ликвидной планировкой - на разные стороны, площадью 99/56/14 и плюс лоджия 9м (на кухню и комнату), просторный холл 20м, без отделки, с/у раздельные, высота потолков 2,80м. Вид на Волгу и на город. Смотрите расположение квартир по сторонам света.',
    'Собственник! Сдам в аренду на длительный срок 2-комн. квартиру, полностью мебелированную. ',
    'Без комиссии, залог за один месяц, можно разбить оплату на два месяца. Ком услуги входят в стоимость.',
    'Продаю 1ком квартиру расположенную на 5 этаже 17 этажного дома. В квартире выполнен евроремонт из дорогостоящих качественных материалов. Всё комнаты выполнены в светлых тонах.',
    'Все необходимое для комфортного проживания. Большая кровать и 2-х спальный диван, ЖК телевизор, холодильник, стиральная машина, микроволновая печь, чайник, утюг, гладильная доска, фен, набор посуды для приготовления и приема пищи.',
  ],
  PHOTOS:[
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
],
}

const LOCATION = {
  lat:{
    min:35.65000,
    max:35.70000,
  },
  lng:{
    min:139.70000,
    max:139.80000,
  },
}

//описываю функцию, кот создает одно объявление
const createAdvertising = () => {
  return{
    author: {
      avatar:'img/avatars/user{{xx}}.png',
    },
    offer:{
      title:offer.TITLES[i],
      address:[
        LOCATION.lat,
        LOCATION.lng,
      ],
      price:getRandomInt(offer.PRICE.min, offer.PRICE.max),
      type:offer.TYPES[getRandomInt(0, offer.TYPES.length - 1)],
      rooms:getRandomInt(offer.ROOMS.min, offer.ROOMS.max),
      guests:getRandomInt(offer.GUESTS.min, offer.GUESTS.max),
      checkin:offer.CHECKINS[getRandomInt(0, offer.CHECKINS.length - 1)],
      checkout:offer.CHECKOUTS[getRandomInt(0, offer.CHECKOUTS.length - 1)],
      features:offer.FEATURES[getRandomInt(0, offer.FEATURES.length - 1)],
      description:offer.DESCS[i],
      photos:offer.PHOTOS[getRandomInt(0, offer.PHOTOS.length - 1)],
    },
    location:{
      lat:getRandomArbitrary(LOCATION.lat.min, LOCATION.lat.max, 5),
      lng:getRandomArbitrary(LOCATION.lng.min, LOCATION.lng.max, 5),
    },
  };
};

let adsArr = [];
for (let i = 0; i < TOTAL_ADS; i++) {
  adsArr[i] = createAdvertising(i);
}

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getRandomInt(min, max) {
  if ((max < min) || (max < 0) || (min < 0)){
    return ('переданы неккоректные данные');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

getRandomInt();

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomArbitrary(min, max, numberRound) {
  if ((max < min) || (max < 0) || (min < 0) || (numberRound < 0)){
    return ('переданы неккоректные данные');
  }
  const result = Math.random() * (max - min) + min;
  return ( +result.toFixed(numberRound) ); // с помощью + преобразую строку в число, т.к. toFixed возвращает string
}

getRandomArbitrary();
