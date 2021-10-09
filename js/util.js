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