// const triangle = require('./p18.json')
const triangle = require('./p18.json')

function solution () {
  let buffer = triangle[triangle.length-1]

  for (let i = triangle.length - 1; i >= 1; i--) {
    buffer = evalLines(buffer, triangle[i-1])
  }

  console.log(`Answer: ${buffer[0]}`)
}

solution(triangle)

function evalLines (ar1, ar2) {

  let response = []

  for (let i = 0; i < ar2.length; i++) {
    let sum1 = ar2[i] + ar1[i]
    let sum2 = ar2[i] + ar1[i+1]
    let carry = Math.max(sum1, sum2)
    response.push(carry)
  }
  return response
}