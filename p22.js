const names = (require('./p22_names.json'))//.slice(0, 5)

function solution () {
  names.sort()
  let total = 0

  for (let i = 0; i<names.length; i++) {
    name = names[i]
    name = name.toLowerCase()
    let val = name.split('').reduce((acc, el, i) => acc + name.charCodeAt(i) - 96, 0)
    let score = val * (i+1)
    console.log(val, name, score)
    total += score
  }

  console.log(`Result: ${total}`)
  
}

solution()