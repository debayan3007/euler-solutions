let number = require('./number.json').num
number = number.split('')
// console.log(number)

function solution(n = 4) {
    let max = 0
    let setMax = []
    for (let i = 0; i < number.length - n + 1; i++) {
        let sum = 1
        let set = []
        for (let j = 0; j < n; j++) {
            // console.log(i + j)
            sum *= Number(number[i + j])
            set.push(number[i + j])
        }
        if (sum > max) {
            max = sum
            setMax = set
        }
    }
    console.log(max)
}

solution(13)