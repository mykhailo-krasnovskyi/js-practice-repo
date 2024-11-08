// function calculateSum(num1, num2) {
//     console.log(num1);
//     console.log(num2);
//     console.log(`The sum is ${num1 + num2}`);
// }
// calculateSum(10, 20);
// calculateSum('43034', '4343');
// calculateSum(1000, 2000);


// function sayHi() {
//     console.log('Hi');
// }


// // sayHi();


// function calculateSum(num1, num2) {
//     console.log(num1);
//     console.log(num2);
//     // const result = num1 + num2;
//     // return result;
//     return num1 + num2;

//     console.log('AFTER RETURN');
// }

// let number = 10;
// const result = calculateSum(number, 20);
// console.log(result);

// console.log(calculateSum(10, 20));


// const greet = function (name) {
//     console.log(`Hi, my name is ${name}`);
// }


// greet('Oleh');


// foo1();
// function foo1() {
//     console.log('test1');
// }

// foo2(); // не працює
// const foo2 = function () {
//     console.log('test2');

// }



// const add = (a, b) => {
//     return a + b;
// }


// console.log(add(3, 10));


// const multiplySelf = num => {
//     return num * num;
// }

// console.log(multiplySelf(10));


// const multiplySelf = num => num * num + 20;

// console.log(multiplySelf(10));


// // Function Declaration
// function add1(num1, num2) {
//     return num1 + num2;
// }

// // Function Expression

// const add2 = function (num1, num2) {
//     return num1 + num2;
// }


// // Arrow Function
// const add3 = (num1, num2) => num1 + num2;




// Task1 - Напишіть функцію, яка приймає 2 параметри - Min та Max і повертає рандомне число в цьому діапозоні


// function getRandomNumberByMinMax(minNumber, maxNumber) {
//     return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
// }

// console.log(getRandomNumberByMinMax(100, 200));



// function divideNumbers(num1, num2) {

//     if (num2 === 0) {
//         return 'Error: Dividing by zero';
//     }
//     return num1 / num2;


// }

// console.log(divideNumbers(20, 10));
// console.log(divideNumbers(50, 0)); 


// function greet(name = 'Anonymous') {
//     console.log(`Hello, ${name}`);

// }


// greet('Stas');
// greet();


// function sum(num1 = 5, num2 = 10) {
//     return num1 + num2;
// }

// console.log(sum(20));

//let numbers = [1, 2, 4, 6, 7];
// function sum(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// console.log(sum(1, 2, 3, 10, 20, 30)); // 6


// function printNames(...names) {
//     for (let i = 0; i < names.length; i++) {
//         console.log(names[i]);
//     }
// }
// printNames('John', 'Alex', 'Sandra'); // 6

// function sum() {
//     let total = 0;

//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }

//     return total;
// }

// console.log(sum(2, 4, 6)); // виведе 12


// let globalVariable = 'Im global';

// //console.log(globalVariable);
// function someFoo() {
//     let localVariable = 'Im local';

//     globalVariable = 20;
//     console.log(globalVariable);
// }



// console.log(globalVariable);

// //console.log(localVariable);

// someFoo();

// console.log(globalVariable);


// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведення операції введіть суму більшу за нуль");
//     } else if (amount > balance) {
//         console.log("Недостатньо коштів на рахунку");
//     } else {
//         console.log("Операція зняття коштів проведена успішно");
//     }
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена успішно"


// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведення операції введіть суму більшу за нуль");
//         return;
//     }
//     if (amount > balance) {
//         console.log("Недостатньо коштів на рахунку");
//         return;
//     }
//     console.log("Операція зняття коштів проведена");
//     return amount + balance;
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена"

// console.log(withdraw(0, 300));


// function foo() {

//     foo();
// }


// foo();


// while (true) { 
//     console.log('2');
// }