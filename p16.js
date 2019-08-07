let prod = '1'
let lim = 1000

for (let i = 0; i < lim; i++) {
  prod = findProd(prod)
}

function findProd(a) {
  let res = []
  let carry = 0
  a = a.split('').reverse()
  for (let i = 0; i < a.length; i++) {
    let localProd = (a[i] * 2) + carry
    carry = Math.floor(localProd/10)
    res[i] = localProd % 10
  }
  if (carry) {
    res.push(carry)
  } 
  return res.reverse().join('')
}

const sum = prod.split('').reduce((acc, el) => {
  acc += Number(el)
  return acc
}, 0)

console.log({ prod, sum })
