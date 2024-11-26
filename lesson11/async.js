// console.log('Start');
// console.log('Task 1: Calculating...');
// console.log(2 + 2);
// console.log('Task 2: Calculating...');
// console.log(2 * 2);
// console.log('Task 3: Calculating...');
// console.log(2 - 2);
// console.log('Finish');


// console.log('Start');
// setTimeout(function () {
//     console.log('Async operation is done');
// }, 0);
// console.log('Finish Program');


// function getData(callback) {
//     console.log('Request to DB sent...');
//     setTimeout(function () {
//         const data = "Data from server";
//         callback(data);
//     }, 2000);
// }

// function printData(data) {
//     console.log('Data: ' + data);
// }

// getData(printData);

// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve(10);
//     }, 4000);
// })

// newPromise.then(value => value += 10)
//     .then(value => value *= 10)
//     .then(value => console.log(value));

// function createRandomPromise(delay) {
//     return new Promise((resolve, reject) => {

//         setTimeout(function () {
//             const randomNumber = Math.random();
//             if (randomNumber < 0.5) {
//                 resolve(randomNumber);
//             } else {
//                 reject(randomNumber * 10);
//             }
//         }, delay);
//     })
// }


// randomPromise.then((result) => {
//     console.log('Operation is success, result:' + result)
// }).catch((error) => {
//     console.log('Operation is failed, error:' + error);
// }).finally(() => {
//     console.log('Finally');
// })

// const promises = [
//     createRandomPromise(5000),
//     createRandomPromise(3000),
//     // createRandomPromise(2000),
// ]

// Promise.all(promises)
//     .then(results => {
//         console.log('All resolved', results)
//     })
//     .catch(errors => {
//         console.log('All errors', errors)
//     })

// Promise.race(promises)
//     .then(results => {
//         console.log('All resolved', results)
//     })
//     .catch(errors => {
//         console.log('All errors', errors)
//     })


// function fetchPostById(id) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
// }
//undefined
// const response = fetchPostById(9);
// console.log(response);

// fetchPostById(9)
//     .then(response => response.json())
//     .then(responseJson => {
//         console.log('Інформація про пост:');
//         console.log('ID:' + responseJson.id);
//         console.log('UserId:' + responseJson.userId);
//         console.log('Title:' + responseJson.title);
//         console.log('Body:' + responseJson.body);
//         console.log('-------------');
//     });
// fetchPostById(15)
//     .then(response => response.json())
//     .then(responseJson => {
//         console.log('Інформація про пост:');
//         console.log('ID:' + responseJson.id);
//         console.log('UserId:' + responseJson.userId);
//         console.log('Title:' + responseJson.title);
//         console.log('Body:' + responseJson.body);
//     });

// async function fetchPostById(id) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const data = await response.json();
//     return data;
// }

// async function printData() {
//     const postData = await fetchPostById(10);
//     console.log(postData);
// }

// printData();



async function sendPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await response.json();
}
async function printData() {

    console.log(await sendPost());
}

printData();