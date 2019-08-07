function isPrime(n) {
    let lim = n
    for (let i = 2; i < lim; i++) {
        // console.log({i, lim})
        if (n % i === 0) return false
        else lim = n / i

    }
    return true
}

function solution () {
    let sum = 0
    let i
    let last
    for (i = 2; i < 2000000; i++) {
        if (isPrime(i)) {
            sum += i
            last = i
            // console.log(i)
        }
    }
    console.log({last, sum})
}

solution()
// console.log(isPrime(25))