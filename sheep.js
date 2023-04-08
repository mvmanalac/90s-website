// var countSheep = function (num) {
//     for (let num = 0; num > 10; i++) {
//         console.log(num);
//     }
// }

// console.log(countSheep(1))

// for (let i = 1; i < 10; i++) {
//     if (i % 3 !== 0) continue;
//     console.log(i);
// }



// Matt Solution

// var countSheep = function (num) {
//     let result = '';
//     for (let i=1; i <= num; i++) {
//         result += `${i} sheep...`;
//     }
//     return result;
// }

// countSheep(2);
// console.log(countSheep(2))

// we're using "let" because it allows us to reassign
// += take whatever we have, and add to it

// Working Solution

// var CountSheep = function (num) {
//     let result = '';
//     for (let i = 1; i <= num; i++) {
//         console.log(`${i} sheep...`)
//         result += `${i} sheep...`;
//     }
//     return result;
// };

// console.log(CountSheep(10))

// Look later

var CountSheep = function (num) {
    for (let num = 1; num < 10; num++) {
        if (num % 1 !== 0) continue;
        console.log(num++, 'sheep...');
    }
};

CountSheep()