import {getRandomArrayElement, getRandomInt, getRandomArbitrary} from './util.js';
const OFFER = {
  TITLES: [
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
  PRICE: {
    min: 20000,
    max: 80000,
  },
  TYPES: [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel',
  ],
  ROOMS: {
    min: 1,
    max: 4,
  },
  GUESTS: {
    min: 1,
    max: 10,
  },
  CHECKINS: [
    '12:00',
    '13:00',
    '14:00',
  ],
  CHECKOUTS: [
    '12:00',
    '13:00',
    '14:00',
  ],
  FEATURES: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ],
  DESCS: [
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
  PHOTOS: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};

const LOCATION = {
  lat: {
    min: 35.65000,
    max: 35.70000,
  },
  lng: {
    min: 139.70000,
    max: 139.80000,
  },
};

const GUESTS = ['гостя', 'гостей'];
const ROOMS = ['комната', 'комнаты', 'комнат'];
const SIMILAR_ADS_COUNT = 10;

const createAdvertising = () => ({
    author: {
      avatar: 'img/avatars/user{{xx}}.png',
    },
    OFFER: {
      title: getRandomArrayElement(OFFER.TITLES),
      address: [
        LOCATION.lat,
        LOCATION.lng,
      ],
      price: getRandomInt(OFFER.PRICE.min, OFFER.PRICE.max),
      type: OFFER.TYPES[getRandomInt(0, OFFER.TYPES.length - 1)],
      rooms: getRandomInt(OFFER.ROOMS.min, OFFER.ROOMS.max),
      guests: getRandomInt(OFFER.GUESTS.min, OFFER.GUESTS.max),
      checkin:OFFER.CHECKINS[getRandomInt(0, OFFER.CHECKINS.length - 1)],
      checkout: OFFER.CHECKOUTS[getRandomInt(0, OFFER.CHECKOUTS.length - 1)],
      features: OFFER.FEATURES[getRandomInt(0, OFFER.FEATURES.length - 1)],
      description: getRandomArrayElement(OFFER.DESCS),
      photos: OFFER.PHOTOS[getRandomInt(0, OFFER.PHOTOS.length - 1)],
    },
    location: {
      lat: getRandomArbitrary(LOCATION.lat.min, LOCATION.lat.max, 5),
      lng: getRandomArbitrary(LOCATION.lng.min, LOCATION.lng.max, 5),
    },
});

const createAds = () => new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAdvertising());
createAds;
export {createAds, createAdvertising};
export {OFFER, LOCATION, GUESTS, ROOMS, SIMILAR_ADS_COUNT};
