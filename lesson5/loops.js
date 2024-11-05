
// for (const i = 0; i < 10; i++) {
//     console.log('Hello ' + i);
// }


// for (let i = 10; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i = 20; i >= 10; i--) {
//     console.log(i);
// }


//break
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         break;
//     }

//     console.log(i);
// }

//continue

// for (let i = 0; i < 10; i++) {
//     if (i === 3 || i === 5) {
//         continue;
//     }

//     console.log(i);
// }

// for (let a = 0, b = 10; a < 10 && b < 15; a++, b++) {
//     console.log(`a=${a}, b=${b}`);
// }

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);



// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i, j);
//     }
// }

// let output = '';

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//         output += ' ' + i * j;
//         if (i * j < 10) {
//             output += ' ';
//         }
//     }

//     output = '';
// }

// console.log('TEST'+output);


//const number = 5;

// let result = '';

// for (let number = 1; number <= 10; number++) {
//     for (let i = 1; i <= 10; i++) {
//         result += `${number} x ${i}= ${number * i}`;
//         result += '\n';
//     }
//     result += '\t';
// }

// console.log(result);

let a = 20;


try {
    if (a === 20) {
        throw new Error('Custom error message');
    }
    console.log('Try block');
} catch (error) {
    console.log('This is an error' + error);
} finally {
    console.log('Finally block');
}

console.log('434224');
