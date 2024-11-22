// class Car {

//     #carNumber;

//     constructor(brand, speed, litersInside, number) {
//         this.carBrand = brand;
//         this.carSpeed = speed;
//         this.carLiters = litersInside;
//         this.#carNumber = number;
//     }

//     turnOn() {
//         console.log(`Car ${this.carBrand} with number ${this.carNumber} is turned on`);

//     }

//     turnOff() {
//         console.log(`Car ${this.carBrand} is turned off`);
//     }

//     fillPetrol(liters) {
//         console.log(`${liters} liters of petrol filled`);
//         this.carLiters += liters;
//         console.log(`Now it has ${this.carLiters}`);
//     }

//     printNumber() {
//         console.log(`Number is ${this.#carNumber}`);
//     }

//     set carNumber(number) {
//         if (number.length < 4) {
//             console.log('Wrong number');
//         } else {
//             this.#carNumber = number;
//         }
//     }

//     get carNumber() {
//         return this.#carNumber;
//     }



// }

// const bmw = new Car();
// bmw.turnOn();
// bmw.fillPetrol(30);
// bmw.turnOff();
// console.log(bmw.color);
// bmw.color = 'green';
// console.log(bmw.color);
// const audi = new Car('audi', 150, 20, 'ABC12345');
// // console.log(audi);

// // audi.turnOn();
// // audi.fillPetrol(15);
// // audi.turnOff();
// audi.turnOn();
// audi.carNumber = '12345678910';

// // audi.printNumber();
// // console.log(audi);
// audi.printNumber();

// audi.carNumber = '123';
// // audi.printNumber();
// console.log(audi.carNumber);


// class Calculator {
//     static add(a, b) {
//         return a + b;
//     }

//     static subtract(a, b) {
//         return a - b;
//     }

// }

// console.log(Calculator.add(10, 20));


// class SystemMessages {

//     static MESSAGE_404 = 'Page is not found';
// }


// SystemMessages.MESSAGE_404


// class Shape {
//     color;

//     constructor(color) {
//         this.color = color;
//     }

//     set color(color) {
//         this.color = color;
//     }
//     get color() {
//         return `Color is ${this.color}`;
//     }

//     area() {
//         throw new Error('Method area() should be implemented');
//     }

// }

// class Circle extends Shape {

//     constructor(color, radius) {
//         super(color);
//         this.radius = radius;
//     }

//     area() {
//         return Math.PI * this.radius ** 2;
//     }

// }


// const circle1 = new Circle('blue', 50);

// const circle2 = new Circle('red', 5);

// const circle3 = new Circle('white', 20);


// console.log(circle1.area());
// console.log(circle2.area());
// console.log(circle3.area());

// console.log(circle1.color);
// console.log(circle2.color);
// console.log(circle3.color);


// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color);
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }

// }

// const rectangle = new Rectangle('yellow', 20, 20);

// console.log(rectangle.area());


// console.log(rectangle.color);


// class subCircle extends Circle {

//     constructor(color, radius, length) {
//         super(color, radius);
//         this.length = length;
//     }

//     printInfo() {
//         console.log(Math.PI * this.radius);
//     }

// }


// const subCircle1 = new subCircle('black', 25, 100);
// console.log(subCircle1);

// console.log(subCircle1.area());
// subCircle1.printInfo();




// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     makeSound() {
//         console.log(`Some sound`);
//     }
// }


// class Dog extends Animal {
//     makeSound() {
//         console.log('Woof woof');
//     }
// }

// class Cat extends Animal {

//     makeSound() {
//         console.log('Meow Meow');
//     }
// }

// const animal = new Animal();
// const cat = new Cat();
// const dog = new Dog();

// animal.makeSound();
// cat.makeSound();
// dog.makeSound();

// console.log(cat.hasOwnProperty('name'));

// const person = {
//     name: 'John',
//     age: 42
//   };
  
// //   console.log(person.hasOwnProperty('age')); // true
// //   console.log(person.hasOwnProperty('toString')); // false
//   console.log(Object.getOwnPropertySymbols(person));

// class Car {
//     #brand;
//     #model;
//     constructor(brand, model) {
//         this.#brand = brand;
//         this.#model = model;
//     }

//     drive() {
//         console.log(`Car ${this.#brand} ${this.#model} is driving`);
//         console.log('DEBUG 1');
//         console.log('DEBUG 2');

//     }
// }


// const car = new Car('', 'Camry');
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.__proto__);