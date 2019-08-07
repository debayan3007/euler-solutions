const { matrix: m } = require('./matrixp11.json')

function multiply(...args) {
  let res = 1
  // console.log({args})
  for (let num of args) {
    res *= Number(num)
  }
  return res
}


function solution() {
  let max = 1

  for (let i = 3; i <= 16; i++) {
    for (let j = 3; j <= 16; j++) {
      let set1 = multiply(m[i][j], m[i-1][j], m[i-2][j], m[i-3][j])
      let set2 = multiply(m[i][j], m[i+1][j], m[i+2][j], m[i+3][j])
      let set3 = multiply(m[i][j], m[i][j-1], m[i][j-2], m[i][j-3])
      let set4 = multiply(m[i][j], m[i][j+1], m[i][j+2], m[i][j+3])
      let set5 = multiply(m[i][j], m[i-1][j-1], m[i-2][j-2], m[i-3][j-3])
      let set6 = multiply(m[i][j], m[i+1][j+1], m[i+2][j+2], m[i+3][j+3])
      let set7 = multiply(m[i][j], m[i+1][j-1], m[i+2][j-2], m[i+3][j-3])
      let set8 = multiply(m[i][j], m[i-1][j+1], m[i-2][j+2], m[i-3][j+3])

      max = Math.max(set1, set2, set3, set4, set5, set6, set7, set8, max)
    }
  }

  console.log(max)
}

solution()