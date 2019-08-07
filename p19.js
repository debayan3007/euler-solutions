let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function solution() {
  const date = {
    year: 1901,
    month: 0,
    day: 2
  }
  let count = 0
  console.log(date)

  while (date.year <= 2000) {
    //adjust day
    if (ifLeapYear(date.year)) {
      days[1] = 29
    } else {
      days[1] = 28
    }

    date.day += days[date.month]
    console.log(date.day, days[date.month], date.month)
    date.day %= 7
    if (date.day === 0) {
      count++
    }
    // increase month
    date.month++
    // adjust year
    if (date.month === 12) {
      date.month = 0;
      date.year++;
    }
    
    console.log(date)
  }
  console.log(`Result: ${count}`)
  return count
}

function ifLeapYear (year) {
  if (year % 4 === 0 || year % 400 === 0) {
    return true
  }
}

solution()