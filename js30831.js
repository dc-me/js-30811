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
let n = 1427;
let lookingPrime = true;
//1 and negative are not prime numbers, add 1 just for the next prime number(if n is 5 it would print the next prime number 7).
n = n < 1 ? 2 : n + 1;
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

// ================================================================
// Part 3: Feeling Loopy
// comment out code are for exact match of the requirement.
console.log('=================== Feeling Loopy ====================');
const str =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let cell = '';
let cell1, cell2, cell3, cell4;
cell1 = cell2 = cell3 = cell4 = cell;
for (let i = 0, j = 1; i < str.length; i++) {
  if (str[i] === ',') {
    // next cell
    cell += '       ';
    // switch (j) {
    //   case 1:
    //     cell1 = cell;
    //     break;
    //   case 2:
    //     cell2 = cell;
    //     break;
    //   case 3:
    //     cell3 = cell;
    //     break;
    //   default:
    //     throw `out of index, only support 4 cells`;
    // }
    // cell = '';
    j++; // cell number
  } else {
    cell += str[i];
  }
  if (str[i] === '\n') {
    // next row
    console.log(cell);
    j = 1;
    // cell4 = cell;
    // console.log(cell1, cell2, cell3, cell4);
    cell = '';
  }
}
