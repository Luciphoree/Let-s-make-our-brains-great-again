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

// let str = "kek"
// let newStr = str.slice(1,-1)



// console.log(newStr)
// console.log(newStr[0])

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
// let arrr = [1, 2, -3, 4, 5];

// function positiveSum(arr) {
//     let positiveNumbers = arr.map(item => {
//         if(Math.sign(item) == -1){
//             return 0
//         } else return item
//     })
//     let result = positiveNumbers.reduce((sum,current) => sum + current, 0)
//     return result
// }

// console.log(positiveSum(arrr))

function toNum(value) {
    let oldStr = ""
    for (i = 0; i < value.length; i++) {
        if (+value[i] >= 0) {
            oldStr += value[i] + ""

        } else if (+i == isNaN){
            i++
        }
    }
    return oldStr
}

console.log(toNum('a123b'))