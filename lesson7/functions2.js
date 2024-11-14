// Callback


// const hof = (callback, message) => {
//     console.log('Inside HOF');
//     callback(message);
// }

// hof(function test(msg) { console.log(msg) }, 'test')

// const sayHi = () => {
//     console.log('Hi');
// }

// const sayBye = () => {
//     console.log('Bye');
// }

// const saySomething = (message) => {
//     console.log(message);

// }

// hof(sayHi);
// console.log('----------');
// hof(sayBye);
// console.log('----------');
// hof(saySomething, 'Test message');


// function processPayment(onSuccessCb, onFailureCb, orderId) {
//     const isPaymentSuccess = false;

//     if (isPaymentSuccess) {
//         onSuccessCb(orderId);
//     } else {
//         onFailureCb(orderId);
//     }
// }


// function onPaymentSuccess(orderId) {
//     console.log(`Order ${orderId} is successful`);
// }

// function onPaymentFailure(orderId) {
//     console.log(`Order ${orderId} is not successful`);
// }



// processPayment(onPaymentSuccess, onPaymentFailure, '#4325252');


// console.log(this);


// function greet(msg, msg2, msg3) {
//     console.log(`Hello, ${this.name}! ${msg}`);
// }

// greet();
// const person = { name: 'Alice' };
// const person2 = { name: 'Bob' };
// greet.call(person, 'TEXT'); // Виведе: Hello, Alice!
// greet.call(person2);

// function greet(timesOfDay, weather) {
//     console.log(`Good ${timesOfDay}, ${this.name}! It's ${weather} today.`);
// }

// const person = { name: 'Bob' };
// const person2 = { name: 'Alice' };

// // greet.apply(person, ['morning', 'sunny']); // Виведе: Good morning, Bob! It's sunny today.
// const greetPerson1 = greet.bind(person, 'morning', 'sunny');
// const greetPerson2 = greet.bind(person2);

// greetPerson1();
// greetPerson2();


//fun


// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     },
//     // Стрілочна функція не має власного контексту this, вона використовує контекст зовнішнього об'єкту (person)
//     printName: function() {
//       setTimeout(() => {
//         console.log(this.fullName());
//       }, 1000);
//     }
//   };

//   person.printName(); // Виведе "John Doe" після затримки 1 секунда


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log(`Hi, I am ${this.name} and I am ${this.age} y.o`)
//     }
// }

// const alice = new Person('Alice', 30);
// const bob = new Person('Bob', 10);
// console.log(alice.name);
// console.log(alice.age);
// console.log(bob.name);
// console.log(bob.age); 
// bob.sayHi();
// alice.sayHi();

// function counter() {
//     let count = 1;

//     return function () {
//         return count++;
//     }
// }

// let counter1 = counter();
// let counter2 = counter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());


// function multiplier(factor) {
//     return function (x) {
//         return x * factor;
//     };
// }

// let double = multiplier(2);
// let triple = multiplier(3);
// let quadruple = multiplier(4);


// console.log(double(5)); 
// console.log(double(10)); 

// console.log(triple(10)); 
// console.log(quadruple(10)); 


// function countToTen(startValue) {
//     for (let i = startValue; i <= 10; i++) {
//         console.log(i);
//     }
// }

// countToTen(5);
// console.log('-----');

// function countToTenRecursions(startValue) {

//     if (startValue <= 10) {
//         console.log(startValue);
//         startValue++;
//         countToTenRecursions(startValue);
//     }

// }

// countToTenRecursions(5);


// function traverse(node) {
//     console.log(node.value);
//     node.children.forEach(child => {
//         traverse(child); // Рекурсивний виклик для кожного дочірнього вузла
//     });
// }


// const tree = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: []
//         },
//         {
//             value: 3,
//             children: [
//                 {
//                     value: 4,
//                     children: []
//                 },
//                 {
//                     value: 5,
//                     children: []
//                 },
//                 {
//                     value: 6,
//                     children: []
//                 },
//                 {
//                     value: 7,
//                     children: [{
//                         value: 8,
//                         children: []
//                     }]
//                 }
//             ]
//         }
//     ]
// };

// traverse(tree);

// function outerFunction() {
//     const outerVariable = 'I am from outer function';

//     function innerFunction() {
//         const innerVariable = '';
//         console.log(outerVariable);
//     }

//     innerFunction();

// }

// outerFunction();

//IIFE
// (function sayHello(name) {
//     console.log('Hello, ' + name);

// })('Paul');

// function iterator(array) {
//     let nextIndex = 0
//     return {
//         next: function () {
//             if (nextIndex < array.length) {
//                 return {
//                     value: array[nextIndex++],
//                     done: false
//                 }
//             }
//             return {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }

const array = ['banana', 'apple', 'orange', 'kiwi', 'cherry']
const arrayIterator = array[Symbol.iterator]();

console.log(arrayIterator.next()) // { value: 'banana', done: false }
console.log(arrayIterator.next()) // { value: 'apple', done: false }
console.log(arrayIterator.next()) // { value: 'orange', done: false }
console.log(arrayIterator.next()) // { value: 'kiwi', done: false }
console.log(arrayIterator.next()) // { value: 'cherry', done: false }
console.log(arrayIterator.next()) // { value: undefined, done: true }