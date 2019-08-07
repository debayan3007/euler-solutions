function solution () {
  let list = [];
  for (let i = 1; i < 10000; i++) {
    sum1 = sumProperDivisors(i)
    sum2 = sumProperDivisors(sum1)

    if (i === sum2 && i !== sum1) {
      if (list.indexOf(i) === -1) {
        list.push(i)
      }
      if (list.indexOf(sum2) === -1) {
        list.push(sum2)
      }
    }
  }
  console.log(list)

  let sum = list.reduce((acc, el) => acc+el, 0)
  console.log({sum})
}

function sumProperDivisors (n) {
  let sum = 0
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i
    }
  }
  return sum
}

solution()