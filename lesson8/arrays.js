const namesList = ['John', 'Alex', 'Olha'];

//const namesList2 = new Array('John', 'Alex', 'Olha');

const differentTypes = ['John', 'Alex', 'Olha', 5, true, false, null, 'Test'];

// console.log(differentTypes[differentTypes.length - 1]);

// const name = differentTypes[0];

// const result = 10 + differentTypes[3];

// console.log(result);
// console.log(differentTypes);
// differentTypes[0] = 'NEW VALUE';
// console.log(differentTypes);

// const fruits = ['apple', 'banana', 'orange'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Index: ${i}, value: ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//     console.log(fruit);
// }


// const givenArray = [1, 2, 3, 4, true, 'abc', 5, 6, 7, 'test'];
// const resultArray = [];


// for (let i = 0; i < givenArray.length; i++) {
//     if (typeof givenArray[i] === 'number') {
//         resultArray[resultArray.length] = givenArray[i];
//     }
// }

// console.log(resultArray);
// resultArray[100] = 999;
// console.log(resultArray);

// const arrayNames1 = ['John', 'Alex', 'Olha'];
// const arrayNames2 = [];

// for (const name of arrayNames1) {
//     arrayNames2[arrayNames2.length] = name.toUpperCase();

// }

// console.log(arrayNames1);
// console.log(arrayNames2);


// const sentence = "Це речення, має кілька слів";
// const words = sentence.split(" ");
// console.log(words); // ["Це", "речення", "має", "кілька", "слів"]

// const fruits = ['apple', 'banana', 'orange'];
// const fruitsString = fruits.join(' ');
// console.log(fruitsString)

// const numbers = [10, 20, 30, 40, 50];
// const index = numbers.indexOf(555);
// console.log(index); // 2

// const colors = ["червоний", "зелений", "синій"];
// const hasGreen = colors.includes("test");
// console.log(hasGreen); // true

// const stack = [1, 2];
// stack.push(3, 4, 5, 6, 7);
// console.log(stack); // [1, 2, 3, 4]

// const stack = [1, 2, 3, 4];
// const poppedValue = stack.pop();
// console.log(poppedValue); // 4
// console.log(stack); // [1, 2, 3]

// const queue = ["A", "B", "C"];
// const shiftedValue = queue.shift();
// console.log(shiftedValue); // "A"
// console.log(queue); // ["B", "C"]

// const queue = ["B", "C"];
// queue.unshift("A");
// console.log(queue); // ["A", "B", "C"]


// const numbers = [1, 2, 3, 4, 5];
// const slicedArray = numbers.slice(2, -1);

// console.log(slicedArray);

// const colors = ["червоний", "зелений", "синій"];
// colors.splice(1, 1, "жовтий", "оранжевий");
// console.log(colors); // ["червоний", "жовтий", "оранжевий", "зелений", "синій"]

// const array1 = [1, 2];
// const array2 = [3, 4];
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray); // [1, 2, 3, 4]

// let str = 'The quick brown fox jumps over the lazy dog';
// let alphabet = 'qazwsxedcrfvtgbyhnujmikolp';

// let includesAllLetters = true;

// for (let letter of alphabet) {
//     if (!str.includes(letter)) {
//         includesAllLetters = false;
//         console.log(letter);
//         break;

//     }
// }

// console.log(includesAllLetters);

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//     console.log(number * 2);
// });

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);


// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find((number) => number % 2 === 0);

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);

// const numbers = [1, 2, 3, 4, 5];
// //const doubledNumbers = numbers.map((number) => number * 2);
// const doubledNumbers2 = numbers.map((number) => {
//     if (number % 2 === 0) {
//         return number * 2;
//     }
//     return number;
// }
// )
// console.log(doubledNumbers2);

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// matrix.forEach((level1, indexL1) => {
//     level1.forEach((level2, indexL2) => {
//         console.log(`${indexL1}, ${indexL2} : ${level2}`);
//     })
// })
//   console.log(matrix[0][0]); // 1
//   console.log(matrix[1][2]); // 6
//   console.log(matrix[2][1]); // 8
//   console.log(matrix[0][3][1][1]);

//   const students = [
//     ['Alice', 25, 'CS'],
//     ['Bob', 22, 'Math'],
//     ['Carol', 28, 'Physics'],
//   ];

//   console.log(students[0][0]); // 'Alice'
//   console.log(students[1][2]); // 'Math'
//   console.log(students[2][1]); // 28



// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flatArray = nestedArray.flat(); // [1, 2, 3, 4, 5, 6]
// console.log(flatArray);

// const numbers = [1, 2, 3];
// const doubledAndFlattened = numbers.flatMap((number) => [number * 2, number * 3]); // [2, 3, 4, 6, 6, 9]
// console.log(doubledAndFlattened);


// const fruits = [1, 2, 3, 45, 8, 6, 7, 45];
// fruits.sort(function (a, b) {
//     return a - b;
// });
// fruits.sort();
// console.log(fruits);

// const numbersArray1 = [1, 2, 3, 4, 5, 4, 3, 1];

// const numbersArrayResult = numbersArray1.map((number) => {
//     const temp = [];
//     temp.push(number);
//     console.log(temp)
//     if (!temp.includes(number)) {
//         console.log(number);
//     }
//     return number;
// })
// console.log(numbersArrayResult);

// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // [5, 4, 3, 2, 1]

// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 10); // 15
// console.log(sum)

// let seven = 7;
// let eight = 8;
// eight = seven;
// eight = 20;
// console.log(eight);
// console.log(seven);


// const array1 = [10, 20, 30];
// const array2 = array1;

// console.log(array1);
// console.log(array2);
// array1[1] = true;
// console.log(array1);
// console.log(array2);

// const set = new Set(); // Порожній об'єкт Set
// const setFromArray = new Set([1, 2, 3, 3, 4, 4, 5]); // Створення з масиву
// console.log(setFromArray);


const numbersArray1 = [1, 2, 3, 4, 5, 4, 3, 1];
const uniqArray1 = numbersArray1.filter((item, index) => {
    return numbersArray1.indexOf(item) === index;
})

console.log(uniqArray1);
