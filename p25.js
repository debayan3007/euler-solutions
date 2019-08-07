const fs = require('fs')

let ref = require('./fibo_ref.json');
console.time('op')
console.log('answer -- > ', fibo(4782).length)
console.timeEnd('op')

fs.writeFile('./fibo_ref.json', JSON.stringify(ref), () => {
  console.log('file written')
})

function getSum(a,b) {
  let res = []
  let carry = 0
  a = a.split('').reverse().join('')
  b = b.split('').reverse().join('')

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let localSum = Number(a[i] || 0) + Number(b[i] || 0) + carry
    carry = Math.floor(localSum / 10)
    localSum = localSum % 10
    res[i] = localSum
  }
  if (carry > 0) {
    res.push(carry)
  }

  return res.reverse().join('')
}

function fibo (n) {
  if (n === 1 || n === 2) {
    return '1'
  } else if (n === 3) {
    return '2'
  } else if (ref[n]) {
    return ref[n]
  }
  let retVal = getSum(fibo(n-1), fibo(n-2))
  ref[n] = retVal
  return retVal
}