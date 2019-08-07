function solution(limit = Infinity) {
  let i = 1
  let prevNFactors = 1
  let num = 1
  let nF = 1, nF1 = 1
  while (num <= limit) {
    let n = i++
    let n1 = n + 1
    nF = nF1
    if (n1 % 2 === 0) {
      nF1 = getDivisors(n1/2)[0]
    } else {
      nF1 = getDivisors(n1)[0]
    }
    if (nF1 * nF > 500) {
      console.log('answer number --> ', n*n1/2)
      console.log({n})
      break
    }
  }
}

solution(100)

function getDivisors (n) {
    let divisors = 0
    let set = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            set.push(i)
            divisors++
        }
    }
    // console.log({set, divisors})
    return [divisors, set]
}

// console.log(getDivisors(125))