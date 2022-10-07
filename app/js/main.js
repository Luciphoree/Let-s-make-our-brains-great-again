// function points(games) {
//     let result = []
//     games.forEach(item => {
//         result = item.split(":");
//     })
//     return result


// }
// let footballGame = ['1:1']

// console.log(points(footballGame))

// console.log(points(footballGame))

// let str = ["TR:5", "TR:2"]

// let res = []
// str.forEach(item => {
//     item.slice(':')
//     res.push(item)
//     console.log(res)

// })
// let a = str.split(':')

// console.log(a)

// function points(games) {
//     let score = 0;
//     games.forEach(item => {
//         if (item[0] > item[2]) {
//             score += 2
//         } else if(item[0] < item[2]){
//             score += 0
//         } else if (item[0] == item[2]){
//             score += 1
//         }
//     })
//     return score

// }

// function points(games) {
//     let score = 0;
//     let result = [];

//     games.forEach(item => {
//         result = item.split(':')
//         if (result[0] > result[1]) {
//             score += 2
//         } else if (result[0] < result[1]) {
//             score += 0
//         } else if (result[0] == result[1]) {
//             score += 1
//         }
//     })
//     return score

// }

// let footballGame = ['1:15', '5:3', '2:2', '0:1']


// console.log(points(footballGame))

// function scramble(st1) {
//     let array = []
//     let stLength = 0;
//     for (i = 0; i < st1.length; i++) {
//         let tempStr = ""
//         for (j = 0; j < st1.length; j++) {

//         }
//     }
//     stLength = st1.length;
//     console.log(stLength)
//     return array

// }
// let str = "kek"
// console.log(scramble(str))

// function even_or_odd(number) {
//     let even = "Even"
//     let odd = "Odd"
//     if (number % 2 == 0) {
//         return even
//     } else {
//         return odd
//     }
// }

// console.log(even_or_odd(2))

let str = "kek"
let newStr = str.slice(1,-1)



console.log(newStr)
console.log(newStr[0])

// function removeChar(str) {
//     // if (!str) {
//     //     return str
//     // }
//     let strLength = str.length
//     for (i = strLength; i < str.length;i++){
//         str.slice(i)
//         console.log(str)
//     }
//   };

//   console.log(removeChar(str))