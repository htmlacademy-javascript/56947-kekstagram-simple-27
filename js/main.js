/**
    * Возвращающает случайное целое число из переданного диапазона
    * @param {number} min - минимальное значение
    * @param {number} max - максимальное значение
    * @returns {number} случайное число
    */
function getRandomIntegerNumber(min, max) {
  if (Number.isInteger(min) && Number.isInteger(max) && min < max && min >= 0 && max > 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return NaN;
}

/**
    * Проверка максимальной длины строки
    * @param {string} stringBeingChecked - минимальное значение
    * @param {number} maxLength - максимальное значение
    * @returns {bool} случайное число
    */
function checkingMaximumLengthOfString(stringBeingChecked, maxLength) {
  return stringBeingChecked.trim().length <= maxLength;
}
