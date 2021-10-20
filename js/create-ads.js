//описываю функцию, кот создает одно объявление
import {getRandomInt, getRandomArbitrary, getRandomArrayElement} from './util.js';
import {LOCATION, OFFER} from './data.js';

const SIMILAR_ADS_COUNT = 10;

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

function createAds() {
  return new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createAdvertising(OFFER));
}
createAds;
export {createAds, createAdvertising};


