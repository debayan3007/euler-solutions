function solution () {
    let res = factorial(100)
    console.log(res)
}

function factorial (n) {
    let res = 1
    for (let i = 2; i <= n; i++) {
        // res *= i
        res = findProd(res+'', i)
        console.log(res)
    }

    let sum = 0;
    for (let el of res.split('')) {
        sum += +el
    }
    console.log(sum)
    return res
}

function findProd(a, b) {
    let res = []
    let carry = 0
    a = a.split('').reverse()
    for (let i = 0; i < a.length; i++) {
      let localProd = (a[i] * b) + carry
      carry = Math.floor(localProd/10)
      res[i] = localProd % 10
    }
    if (carry) {
      res.push(carry)
    } 
    return res.reverse().join('')
  }

solution()