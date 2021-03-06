import {setMainPinCoords, TOKYO_LAT, TOKYO_LNG} from './map-render.js';
import {openErrorModal} from './modal.js';
import {sendData} from './server.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_ROOM_NUMBER = 100;
const MIN_BUNGALOW_PRICE = 0;
const MIN_FLAT_PRICE = 1000;
const MIN_HOTEL_PRICE = 3000;
const MIN_HOUSE_PRICE = 5000;
const MIN_PALACE_PRICE = 10000;

const adForm = document.querySelector('.ad-form');
const adFormFields = Array.from(adForm.querySelectorAll('fieldset'));
const adTitle = adForm.querySelector('#title');
const adPrice = adForm.querySelector('#price');
const adAccommodationType = adForm.querySelector('#type');
const adCkeckin = adForm.querySelector('#timein');
const adCkeckout = adForm.querySelector('#timeout');
const adRoomNumber = adForm.querySelector('#room_number');
const adGuestNumber = adForm.querySelector('#capacity');
const filterForm = document.querySelector('.map__filters');
const adAddress = adForm.querySelector('#address');

const filterFormFields = Array.from(filterForm.children);

const useInactivePageState = () => {
  adForm.classList.add('ad-form--disabled');
  filterForm.classList.add('map__filters--disabled');
  adFormFields.forEach((item) => {
    item.disabled = true;
  });
  filterFormFields.forEach((item) => {
    item.disabled = true;
  });
};

const getSameTimeIn = () => {
  adCkeckin.value = adCkeckout.value;
};

const getSameTimeOut = () => {
  adCkeckout.value = adCkeckin.value;
};

const onSelectRoomChange = () => {
  const roomsValue = adRoomNumber.value;
  const guestValue = adGuestNumber.value;
  if (parseInt(roomsValue, 10) === MAX_ROOM_NUMBER && parseInt(guestValue, 10) !== 0) {
    adGuestNumber.setCustomValidity('Такое здание не для приема гостей');
  } else if (guestValue > roomsValue) {
    adGuestNumber.setCustomValidity('Количество гостей не может превышать количество комнат');
  } else {
    adGuestNumber.setCustomValidity('');
  }

  adGuestNumber.reportValidity();
};

adTitle.addEventListener('input', () => {
  const valueLength = adTitle.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Добавьте ещё ${MIN_TITLE_LENGTH - valueLength} символов в заголовок`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    adTitle.setCustomValidity(`Уберите ${valueLength - MAX_TITLE_LENGTH} символов из заголовка`);
  } else {
    adTitle.setCustomValidity('');
  }

  adTitle.reportValidity();
});

adPrice.addEventListener('input', () => {
  const value = adPrice.value;
  if (value < MIN_PRICE) {
    adPrice.setCustomValidity(`Цена не может быть меньше ${MIN_PRICE}`);
  } else if (value > MAX_PRICE) {
    adPrice.setCustomValidity(`Цена не может превышать ${MAX_PRICE}`);
  } else {
    adPrice.setCustomValidity('');
  }

  adPrice.reportValidity();
});

adAccommodationType.addEventListener('change', () => {
  switch (adAccommodationType.value) {
    case 'flat':
      adPrice.setAttribute('min', MIN_FLAT_PRICE);
      adPrice.setAttribute('placeholder', MIN_FLAT_PRICE);
      break;
    case 'bungalow':
      adPrice.setAttribute('min', MIN_BUNGALOW_PRICE);
      adPrice.setAttribute('placeholder', MIN_BUNGALOW_PRICE);
      break;
    case 'house':
      adPrice.setAttribute('min', MIN_HOUSE_PRICE);
      adPrice.setAttribute('placeholder', MIN_HOUSE_PRICE);
      break;
    case 'palace':
      adPrice.setAttribute('min', MIN_PALACE_PRICE);
      adPrice.setAttribute('placeholder', MIN_PALACE_PRICE);
      break;
    case 'hotel':
      adPrice.setAttribute('min', MIN_HOTEL_PRICE);
      adPrice.setAttribute('placeholder', MIN_HOTEL_PRICE);
      break;
  }
});

adGuestNumber.querySelector('option[value="1"]').setAttribute('selected', 'selected');

adRoomNumber.addEventListener('change', onSelectRoomChange);
adGuestNumber.addEventListener('change', onSelectRoomChange);

adCkeckin.addEventListener('change', getSameTimeOut);
adCkeckout.addEventListener('change', getSameTimeIn);

useInactivePageState();
useInactivePageState();

const resetUserForm = () => {
  setMainPinCoords(TOKYO_LAT, TOKYO_LNG);
};

const sendUserForm = () => {
  adForm.reset();
  setMainPinCoords(TOKYO_LAT, TOKYO_LNG);
};

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => openErrorModal(),
      new FormData(evt.target),
    );
  });
};

export {useInactivePageState, adAddress, resetUserForm, sendUserForm, setUserFormSubmit};
