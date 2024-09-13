// ================================================================
// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by neither 3 or 5, log the number.
for (let i = 1; i <= 100; i++) {
  let isFizz = false,
    isBuzz = false;
  if (i % 3 === 0) {
    isFizz = true;
    console.log(`Number: ${i} Fizz.`);
  }
  if (i % 5 === 0) {
    isBuzz = true;
    console.log(`Number: ${i} Buzz.`);
  }
  if (isFizz && isBuzz) {
    console.log(`Number: ${i} Fizz Buzz.`);
  }
  if (!(isFizz || isBuzz)) {
    console.log(`Number: ${i} Neither Fizz or Buzz.`);
  }
}
