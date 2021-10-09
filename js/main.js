import {getRandomInt, getRandomArbitrary} from '../util.js';
import {offer, LOCATION} from '../data.js';
const TOTAL_ADS = 10;


//описываю функцию, кот создает одно объявление
const createAdvertising = () => {
  const randomTitlesIndex = getRandomInt(0, offer.TITLES.length - 1);
  const randomDescsIndex = getRandomInt(0, offer.DESCS.length - 1);

  return {
    author: {
      avatar: 'img/avatars/user{{xx}}.png',
    },
    offer: {
      title: offer.TITLES[randomTitlesIndex],
      address: [
        LOCATION.lat,
        LOCATION.lng,
      ],
      price: getRandomInt(offer.PRICE.min, offer.PRICE.max),
      type: offer.TYPES[getRandomInt(0, offer.TYPES.length - 1)],
      rooms: getRandomInt(offer.ROOMS.min, offer.ROOMS.max),
      guests: getRandomInt(offer.GUESTS.min, offer.GUESTS.max),
      checkin: offer.CHECKINS[getRandomInt(0, offer.CHECKINS.length - 1)],
      checkout: offer.CHECKOUTS[getRandomInt(0, offer.CHECKOUTS.length - 1)],
      features: offer.FEATURES[getRandomInt(0, offer.FEATURES.length - 1)],
      description: offer.DESCS[randomDescsIndex],
      photos: offer.PHOTOS[getRandomInt(0, offer.PHOTOS.length - 1)],
    },
    location: {
      lat: getRandomArbitrary(LOCATION.lat.min, LOCATION.lat.max, 5),
      lng: getRandomArbitrary(LOCATION.lng.min, LOCATION.lng.max, 5),
    },
  };
};

const ADSARRS = [];
for (let count = 0; count < TOTAL_ADS; count++) {
  ADSARRS[count] = createAdvertising(count);
}


