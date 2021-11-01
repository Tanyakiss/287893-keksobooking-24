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

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {isEscEvent};

const isEnterEvent = (evt) => evt.key === 'Enter';

export {isEnterEvent};

const showAlert = (modal) => {
  const alertContainer = modal.cloneNode(true);

  document.body.append(alertContainer);
};

export {showAlert};

const getRandomFloatNumber = (min, max, numeralCount) => {
  let count = 1;
  for (let counter = 0; counter < numeralCount; counter++) {
    count *= 10;
  }
  if (min >= 0 && max >= 0) {
    return (min > max) ? (Math.floor((Math.random() * (min - max) + max) * count) / count) : (Math.floor((Math.random() * (max - min) + min) * count) / count);
  }
  throw 'Одно из чисел меньше 0';
};

export {getRandomFloatNumber};
