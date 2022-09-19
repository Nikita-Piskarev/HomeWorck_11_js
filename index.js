"use strict";
// Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций.
const returnLengNum = (...data) => console.log(data.length);

returnLengNum(24, 43, 132, 45, "Ivan", 465, "Valick");

// Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию.
const numbers = [3, 6];
const calculator = (sing, ...num) => {
  if (sing === "+") {
    return num.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  }
  if (sing === "-") {
    return num.reduce(
      (previousValue, currentValue) => previousValue - currentValue
    );
  }
  if (sing === "*") {
    return num.reduce(
      (previousValue, currentValue) => previousValue * currentValue
    );
  }
  if (sing === "/") {
    return num.reduce(
      (previousValue, currentValue) => previousValue / currentValue
    );
  }
};
console.log(calculator('+',...numbers));

// Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.

const arrNum = [2,4,5,76,98,3,46,65];
const maxNum = (...arr) => console.log(Math.max(...arr));
maxNum(...arrNum);