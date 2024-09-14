// ================================================================
// Part 1: Fizz Buzz
console.log('=================== Fizz Buzz ====================');
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

// ================================================================
// Part 2: Prime Time
console.log('=================== Prime Time ====================');
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
let n = 50;
let lookingPrime = true;
n = n < 1 ? 2 : n; //1 and negative are not prime numbers.
while (lookingPrime) {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      n++;
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    lookingPrime = false;
    console.log(`Found prime number: ${n}`);
  }
}
