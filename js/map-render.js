import {useActivePageState, adAddress} from './form.js';
import {getRandomArbitrary} from './util.js';
import {createCustomPopup} from './popup.js';

const TOKYO_LAT = 35.68950;
const TOKYO_LNG = 139.69171;

const map = L.map('map-canvas')
  .on('load', () => {
    useActivePageState();
  })
  .setView({
    lat: 59.95830,
    lng: 30.31748,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO_LAT,
    lng: TOKYO_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (avatar, offer, point) => {
  const {lat, lng} = point;

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(
      createCustomPopup(avatar, offer),
      {
        keepInView: true,
      },
    );
};

const setMainPinCoords = (lat, lng) => {
  mainPinMarker
    .setLatLng({
      lat: lat,
      lng: lng,
    });
  adAddress.setAttribute('value', `${getRandomArbitrary(lat, 5)}, ${getRandomArbitrary(lng, 5)}`);
  adAddress.setAttribute('placeholder', `${getRandomArbitrary(lat, 5)}, ${getRandomArbitrary(lng, 5)}`);
};

setMainPinCoords(TOKYO_LAT, TOKYO_LNG);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  adAddress.setAttribute('value', `${getRandomArbitrary(evt.target.getLatLng().lat, 5)}, ${getRandomArbitrary(evt.target.getLatLng().lng, 5)}`);
  adAddress.setAttribute('placeholder', `${getRandomArbitrary(evt.target.getLatLng().lat, 5)}, ${getRandomArbitrary(evt.target.getLatLng().lng, 5)}`);
});

export {setMainPinCoords, createMarker, TOKYO_LAT, TOKYO_LNG};
