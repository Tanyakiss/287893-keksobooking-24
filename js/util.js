function getRandomInt(min, max) {
  if ((max < min) || (max < 0) || (min < 0)) {
    return ('переданы неккоректные данные');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export {getRandomInt};

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getRandomArbitrary(min, max, numberRound) {
  if ((max < min) || (max < 0) || (min < 0) || (numberRound < 0)) {
    return ('переданы неккоректные данные');
  }
  const result = Math.random() * (max - min) + min;
  return (+result.toFixed(numberRound)); // с помощью + преобразую строку в число, т.к. toFixed возвращает string
}

export {getRandomArbitrary};

const getRussianCase = (integer, russianWord) => {
  const remainder = integer % 10;
  if (integer > 10 && integer < 20) {
    return russianWord[2];
  }
  if (remainder > 1 && remainder < 5) {
    return russianWord[1];
  }
  if (remainder === 1) {
    return russianWord[0];
  }
  return russianWord[2];
};

export {getRussianCase};

const getRussianGenitiveCase = (integer, russianWord) => {
  const remainder = integer % 10;
  return remainder === 1 && integer !== 11 ? russianWord[0] : russianWord[1];
};

export {getRussianGenitiveCase};

const getAccommodationType = (type) => {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};

export {getAccommodationType};

const getRandomArray = (parentArray) => {
  const arrayCopy = parentArray.slice();
  const deletedElementsCount = getRandomInt(0, arrayCopy.length);
  for (let counter = 0; counter < deletedElementsCount; counter++) {
    arrayCopy.splice(getRandomInt(0, arrayCopy.length - 1), 1);
  }
  return arrayCopy;
};

export {getRandomArray};

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

export {getRandomArrayElement};

const createAdvertising = (offer) => {
  return {
    author: {
      avatar: 'img/avatars/user{{xx}}.png',
    },
    offer: {
      title: getRandomArrayElement(offer.TITLES),
      address: [
        LOCATION.lat,
        LOCATION.lng,
      ],
      price: getRandomInt(offer.PRICE.min, offer.PRICE.max),
      type: offer.TYPES[getRandomInt(0, offer.TYPES.length - 1)],
      rooms: getRandomInt(offer.ROOMS.min, offer.ROOMS.max),
      guests: getRandomInt(offer.GUESTS.min, offer.GUESTS.max),
      checkin:offer.CHECKINS[getRandomInt(0, offer.CHECKINS.length - 1)],
      checkout: offer.CHECKOUTS[getRandomInt(0, offer.CHECKOUTS.length - 1)],
      features: offer.FEATURES[getRandomInt(0, offer.FEATURES.length - 1)],
      description: getRandomArrayElement(offer.DESCS),
      photos: offer.PHOTOS[getRandomInt(0, offer.PHOTOS.length - 1)],
    },
    location: {
      lat: getRandomArbitrary(LOCATION.lat.min, LOCATION.lat.max, 5),
      lng: getRandomArbitrary(LOCATION.lng.min, LOCATION.lng.max, 5),
    },
  };
};

const createAds = () => new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAdvertising());
createAds;
export {createAds, createAdvertising};
