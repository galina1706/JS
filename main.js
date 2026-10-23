console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних');

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
var myNum = 10;
// ім'я змінної: myStr, значення: 'some string'
var myStr = 'some string';
// ім'я змінної: myBool, значення: true
var myBool = true;
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
var myArr = [1, 2, 3, 4, 5];
// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'
var myObj = {first: 'First Name', last: 'Last Name'};

/*
 * #2
 *
 * Відформатуйте ціле число, збережене у змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 *
 */

// decimal2
var decima12 = 5;
var decimal2 = myNum.toFixed(2);

console.log(decimal2);

/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 і запишіть у ту саму змінну.
 */

// myBigInt
var myBigInt = 123n;
myBigInt = myBigInt + 1n;

console.log(myBigInt);
