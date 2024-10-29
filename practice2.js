// const userName = 'John';
// let userAge = 15;
// let userLastName
// console.log(userAge);
// userAge = 20;

// console.log(userName);
// console.log(userAge);
// console.log('name');

// userAge = 'Twenty';
// console.log(userAge);


// Number
let age = 25;
console.log(typeof age);

//String

let userName = 'Ivan';
console.log(typeof userName);

//Boolean
let isUserLoggedIn = true;
let isUserPostedPhoto = false;

console.log(typeof isUserLoggedIn);
console.log(typeof isUserPostedPhoto);

//Undefined
let undefinedVariable;

console.log(undefinedVariable);
console.log(typeof undefinedVariable);

//NaN
let result = "text" / 2;
console.log(result);

//Infinity
console.log(10 / 0);

//BigInt
const bigValue = 123456789101234567891012345678910123456789101234567891012345678910;

console.log(bigValue);

const bigValueOptimized = 123456789101234567891012345678910123456789101234567891012345678910n;
console.log(bigValueOptimized + 10n);

//Symbol
const uniqValue = Symbol('value1');
const uniqValue2 = Symbol('value1');

console.log(uniqValue === uniqValue2);

//Object
const person = {
    age: 15,
    name: 'Patrick'
}

//Null
let newAge = null;
console.log(newAge);
console.log(typeof newAge);

console.log(typeof Date.now());
