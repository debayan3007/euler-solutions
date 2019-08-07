console.time('exec')

let ref = {}
let maxVal = 0
let maxIndex = 0

for (let i = 2; i < 1000000; i++) {
  let returnVal = calculateChainLength(i)
  if (maxVal < returnVal) {
    maxVal = returnVal
    maxIndex = i
  }
  ref[i] = returnVal
}

console.log({ maxVal, maxIndex })

function calculateChainLength(n) {
  let len = 1
  while (n != 1) {
    if (ref[n]) {
      return len + ref[n] - 1
    }
    len++
    if (n % 2 === 0) {
      n /= 2
    } else {
      n = 3 * n + 1
    }
  }
  return len
}

console.timeEnd('exec')
