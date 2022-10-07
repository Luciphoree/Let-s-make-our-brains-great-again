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

function points(games) {
    let score = 0;
    let result = [];

    games.forEach(item => {
        result = item.split(':')
        if (result[0] > result[1]) {
            score += 2
        } else if (result[0] < result[1]) {
            score += 0
        } else if (result[0] == result[1]) {
            score += 1
        }
    })
    return score

}

let footballGame = ['1:15', '5:3', '2:2', '0:1']


console.log(points(footballGame))