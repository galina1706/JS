/*
- #1
- Розробити функцію, яка використовує метод reduce масиву для обчислення суми усіх елементів масиву чисел.
*/

function sumArray(numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

// Використання функції
const numbers = [1, 2, 3, 4, 5]
const sum = sumArray(numbers)
console.log('Сума елементів масиву:', sum) // Виведення суми


/*
- #2
- Розробити функцію, яка використовує метод map масиву для створення нового масиву, в якому кожен елемент буде вдвічі більшим за елементи вхідного масиву чисел.
*/

function doubleArrayElements(numbers) {
  return numbers.map(num => num * 2);
}

// Використання функції
const exampleArray = [1, 2, 3, 4, 5]
const doubledArray = doubleArrayElements(exampleArray)
console.log('Подвоєні елементи масиву:', doubledArray) // Виведення подвоєних елементів


/*
- #3
- Розробити клас `SkillsManager`, що відповідає за управління списком навичок.
*/

class SkillsManager {
  constructor() {
    this.skills = [];
  }

  addSkill(skill) {
    // Перевірка, чи є аргумент рядком і чи довжина не менше 2 символів
    if (typeof skill === 'string' && skill.trim().length >= 2) {
      this.skills.push(skill);
      return skill;
    }
    return null;
  }

  getAllSkills() {
    return this.skills;
  }
}

 const skillsManager = new SkillsManager()
console.log(skillsManager.addSkill('JavaScript'))
console.log(skillsManager.addSkill('CSS'))
console.log(skillsManager.getAllSkills())


/*
- #4
- Задача: Калькулятор дат (функція-конструктор DateCalculator).
*/

function DateCalculator(initialDate) {
  // Зберігаємо дату як об'єкт Date всередині конструктора
  this.currentDate = new Date(initialDate);

  this.addDays = function(days) {
    // Додаємо дні до поточної дати (шляхом модифікації UTC або локального часу)
    this.currentDate.setDate(this.currentDate.getDate() + days);
    return this;
  };

  this.subtractDays = function(days) {
    // Віднімаємо дні від поточної дати
    this.currentDate.setDate(this.currentDate.getDate() - days);
    return this;
  };

  this.getResult = function() {
    const year = this.currentDate.getFullYear();
    // Місяці у JS починаються з 0, тому додаємо 1 і форматуємо у двозначний вигляд
    const month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(this.currentDate.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };
}

// Демонстрація використання
const dateCalculator = new DateCalculator('2023-01-01')
dateCalculator.addDays(5)
console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів
//
dateCalculator.subtractDays(3)
console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів

export { doubleArrayElements, sumArray, SkillsManager, DateCalculator };