function solution() {
    let a, b
    for (let i = 100; i <= 900; i++) {
        for (let j = 100; j <= 900; j++) {
            a = i
            b = j
            c = Math.sqrt(a*a + b*b)
            if (c % 1 !== 0) {
                continue
            }
            console.log({a,b,c})
            if (a+b+c === 1000) {
                console.log("FOUND")
                console.log('****', {a,b,c,  res: a*b*c})
                return
            }
        }
    }
}

solution()