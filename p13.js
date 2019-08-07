const Numbers = (require('./p13.json'))


let sum = "00000000000000000000000000000000000000000000000000"

for (let num of Numbers) {
  console.log(sum)
  console.log(num)
  console.log('--------------------------------------------------')
  sum = getSum(sum, num)
  console.log(sum)
}

console.log(sum)
console.log({ans: sum.slice(0, 10)})

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