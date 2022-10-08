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

// function toNum(value) {
//     let oldStr = ""
//     for (i = 0; i < value.length; i++) {
//         if (+value[i] >= 0) {
//             oldStr += value[i] + ""

//         } else if (+i == isNaN){
//             i++
//         }
//     }
//     return oldStr
// }

// console.log(toNum('a123b'))






// function wordsToMarks(string) {
//     let result = 0;
//     let number;
//     for (index = 0; index < string.length; index++) {
//         number = string.charCodeAt(index)
//         result += number
//     } 
//     return result
// }

// console.log(wordsToMarks("friends"))

// function sameCase(a, b){
//     if(a.toUpperCase && b.toLowerCase){
//       return 0
//     }
//     if((a.toUpperCase && b.toUppercase) || (a.toLowerCase && b.toLowerCase)){
//       return 1;
//     }
//     if(a.toString || b.toString){
//       return -1
//     }
//   }

//   if(a.toUpperCase && b.toLowerCase){
//     return 0
//   }
//   if((a.toUpperCase && b.toUppercase) || (a.toLowerCase && b.toLowerCase)){
//     return 1;
//   } else if(a.toString || b.toString){
//     return -1
//   } return 0


// function maskify(cc) {
//     let newStr = ""
//     for (i = 0; i < cc.length + 4; i++) {
//         newStr += "#" + cc[i]

//     }return newStr
// }
// console.log(maskify('4555532'))

// let str = "fdfdf tre qw23 2"
// console.log(str.split(" ").join(""))

// function typeOfSum(a, b) {
//     let sum = a + b
//     if (typeof (sum) == "number") {
//         return "number"
//     }
//     if(typeof(sum) == "string"){
//         return "string"
//     }
// }

// console.log(typeOfSum(3,'e'))


// function massiveCheck(arr) {
//     let newArray = []
//     newArray = arr.map((item,index) => `${index + 1}:` + item)
//     return newArray

// }

// console.log(massiveCheck(['a', 'b', 'c']))


// function countSheeps(arrayOfSheep) {
//     let sum = 0;
//     arrayOfSheep.forEach(item => {

//         if (item == true) {
//             sum += 1

//         } else if (item == false) {
//             sum += 0
//         }
//         return sum
//     })

// }

// console.log(countSheeps([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]))


// function basicOp(operation, value1, value2) {
//     if(operation == "+"){
//         return value1 + value2
//     }
//     if(operation == "-"){
//         return value1 - value2
//     }
//     if(operation == "*"){
//         return value1 * value2
//     }
//     if(operation == "/"){
//         return value1 / value2
//     }

// }

// console.log(basicOp('+', 4, 7))


function getSum( a,b )
{
  return a + b
}

console.log(getSum(337,499))
