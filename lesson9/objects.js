// const person1 = new Object();

// person1.name = "John";
// person1.age = 33;

// console.log(person1);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const john = new Person("John", 30);
// delete john.age;

// console.log(john);

// const person3 = {
//     name: 'David',
//     age: 22,
//     sayHello: function () {
//         console.log('Hello, my name is ' + this.name);
//     },
//     sayHelloArrow: () => {
//         console.log('Hello, my name is ' + this.name);
//     },
//     sayInfo() {
//         return (`My name is ${this.name}, i am ${this.age} y.o`);
//     }
// };
// person3.age = 555;
// person3.city = 'New York';

// console.log(person3);


// const person = {
//     name: {
//         first: "John",
//         last: "Doe"
//     },
//     age: 30,
//     address: {
//         street: 'main Str',
//         phones: {
//             mobile: {
//                 number1: '33333',
//             }
//         }
//     }
// };

// console.log(person.address.phones.mobile.number1)

// const person = {
//     "name ": {
//         "First Name": "John",
//         last: "Doe",
//     },
//     age: 30
// };

// console.log(person["name "]["First Name"])


// const name = 'Peter';
// const age = 5;


// // const user = {
// //     name: name,
// //     age: age,
// // }


// const user = {
//     name,
//     age,
// }


// console.log(user);

// const prop = "age";

// const person = {
//     [prop]: 28
// };
// console.log(person); // 28


// const person = {
//     name: "John",
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     },
//     friends: [],
//     addFriend: function (friendName) {
//         this.friends.push(friendName)
//     }
// };

// person.greet(); // "Hello, my name is John"
// console.log(person.friends) // []
// person.addFriend("Stanislav");
// console.log(person.friends) // [ 'Stanislav' ]

// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };

// // Без оператора опціонального доступу
// const city = user && user.address && user.address.city;

// // З оператором опціонального доступу
// const cityOptional = user?.address?.city;

// console.log(city); // "New York"
// console.log(cityOptional); // "New York"

// А тепер спробуємо звернутися до неіснуючої властивості
//console.log(user.phones.mobile); // Помилка : TypeError: Cannot read properties of undefined (reading 'mobile')
// console.log(user.phones?.mobile); // undefined


// const user = {
//     email: 'useremailrandom@emal.com',
//     gender: null
// };

// const userEmail = user.email ?? 'default@email.com';
// const userName = user.name ?? 'Гість';
// const userGender = user.gender ?? 'Невідомо';

// console.log(userEmail); // "useremailrandom@emal.com"
// console.log(userName); // "Гість"
// console.log(userGender); // "Невідомо"

// // const baseURL = ENV.BASEURL ?? "google.com";


// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

//   for (let key in person) {
//     console.log(key + ': ' + person[key]);
//   }

// console.log(person.hasOwnProperty('name'));

// const animal = {
//     legs: 4,
// };

// const item = {
//     price: 500,
// }
// const dog = Object.create(animal);
// dog.name = "Duke";


// console.log(dog);// {name: 'Duke'}
// console.log(dog.name);// 'Duke'
// console.log(dog.legs);// 4

// const itemDog = Object.create(dog);
// console.log(itemDog);

// for (let key in itemDog) {
//     console.log(key + ': ' + itemDog[key]);
// }

// console.log(dog.hasOwnProperty('legs'));

// const keys = Object.keys(person);
// console.log(keys);

// const values = Object.values(person);
// console.log(values);

// const entries = Object.entries(person);
// console.log(entries);

// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Mike", age: 40 }
// ];

// people.push({ name: 'FirstName', age: 44 });

// console.log(people);

// for (const person of people) {
//     console.log(person.name);

// }
// people[2].name = 'NEW NAME'
// console.log(people[2].name);


// people.forEach(function (person) {
//     console.log(`${person.name} is ${person.age} years old`);
// });


// const person = {
//     name: "John",
//     age: 30,
//     gender: "male",
//     phone: '11111'
// };

// const { name: userName, age: userAge, gender: userGender, phone: userPhone = '33333333' } = person;

// console.log(userName); // "John"
// console.log(userAge); // 30
// console.log(userGender); // "male"
// console.log(userPhone);


// const people = [
//     { name: "John", age: 30, city: 'Kharkiv' },
//     { name: "Jane", age: 25 }
// ];

// for (const { name, age } of people) {
//     console.log(`${name} is ${age} years old`);
// }

// for (const { name, age } of people) {
//     console.log(`${name} is ${age} years old`);
// }

// const person = { name: 'John', age: 30 };

// function printUserInfo({ name, age, email = 'unknown' }) {
//     console.log(`User "${name}" is ${age} y.o. and has "${email}" email address.`);
// }

// printUserInfo(person); // User "John" is 30 y.o. and has "unknown" email address.

// const person = {
//     name: "John",
//     age: 30,
//     address: {
//       city: "New York",
//       country: "USA"
//     }
//   };

//   const { name, address: { city, country } } = person;

//   console.log(name); // "John"
//   console.log(city); // "New York"
//   console.log(country); // "USA"



// function printUserInfo({ name, age, email = 'unknown' }) {
//     console.log(`User "${name}" is ${age} y.o. and has "${email}" email address.`);
// }

// printUserInfo({ age: 22, name: 'Test' });

// const numbers = [1, 2, 3, 4, 5, 6];

// const [first, second, third, fourth, , sixth] = numbers;

// console.log(first); // 1
// console.log(second); // 2
// console.log(third); // 3
// console.log(fourth);
// console.log(sixth);

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a); // 2
// console.log(b); // 1


// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers); // [1, 2, 3, 4, 5]

// const person = { name: "John", age: 30 };
// const newPerson = { ...person, gender: "male" };

// console.log(newPerson);
// // { name: "John", age: 30, gender: "male" }


// function sum(...numbers) {
//     console.log(numbers)
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10

const person1 = {
    name: 'Julia',
    age: 18
}


// // const person2 = person1;

// //const person2 = { ...person1 };
// const person2 = Object.assign({}, person1);

// console.log(person1);
// console.log(person2);

// person2.name = 'Anonimus';

// console.log(person1);
// console.log(person2);

//const originalObject = { name: 'John', age: 30 };
// const person2 = {};
// for (let key in person1) {
//     person2[key] = person1[key];
// }
// const person2 = structuredClone(person1);

// console.log(person1);
// console.log(person2);
// const myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set(true, 'value2');

// console.log(myMap);


// const obj = {
//     prop1: 'test',
//     prop2: 'test2'
// }

// Object.freeze(obj);

// obj.prop1 = 200;
// console.log(obj)


// Створити shop, який буде містити список товарів і мати методи addItem, printOneItem, printAllItems


// const shop = {
//     itemList: [],
//     addItem(itemName, itemPrice, itemId) {
//         this.itemList.push({ itemName, itemPrice, itemId });
//     },
//     printOneItem(itemId) {
//         console.log('Product: ' + itemId);
//         console.log(this.itemList.find(item => item.itemId === itemId))
//     },
//     printAllItems() {
//         console.log('All products: ');
//         console.log(this.itemList);
//     }
// }
// shop.addItem('Apple', 20, 1);
// shop.addItem('Pineapple', 30, 2);
// shop.addItem('Orange', 14, 3);

// shop.printOneItem(2);
// shop.printAllItems();


car_data = {
    'Mercedes': ['silver', 2019, 1.8, 'sedan', 50000],
    'Audi': ['black', 2020, 2.0, 'sedan', 55000],
    'BMW': ['white', 2018, 3.0, 'suv', 70000],
    'Lexus': ['gray', 2016, 2.5, 'coupe', 45000],
    'Toyota': ['blue', 2021, 1.6, 'hatchback', 25000],
    'Honda': ['red', 2017, 1.5, 'sedan', 30000],
    'Ford': ['green', 2019, 2.3, 'suv', 40000],
    'Chevrolet': ['purple', 2020, 1.4, 'hatchback', 22000],
    'Nissan': ['pink', 2018, 1.8, 'sedan', 35000],
    'Volkswagen': ['brown', 2021, 1.4, 'hatchback', 28000],
    'Hyundai': ['gray', 2019, 1.6, 'suv', 32000],
    'Kia': ['white', 2020, 2.0, 'sedan', 28000],
    'Volvo': ['silver', 2017, 1.8, 'suv', 45000],
    'Subaru': ['blue', 2018, 2.5, 'wagon', 35000],
    'Mazda': ['red', 2019, 2.5, 'sedan', 32000],
    'Porsche': ['black', 2017, 3.0, 'coupe', 80000],
    'Jeep': ['green', 2021, 3.0, 'suv', 50000],
    'Chrysler': ['gray', 2016, 2.4, 'sedan', 22000],
    'Dodge': ['yellow', 2020, 3.6, 'suv', 40000],
}
let car_data_sorted = [];
for (const key in car_data) {
    const carPrice = car_data[key][4];
    if (carPrice > 50000) {
        car_data_sorted.push({ name: key, color: car_data[key][0], price: car_data[key][4] })
    }

    // console.log(`${key}, ${car_data[key][4]}`);
}

console.log(car_data_sorted);