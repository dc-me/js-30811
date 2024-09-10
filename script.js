// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

// ==========================================================================================
// PART 1 Math Problems

// Check if all numbers are divisible by 5. Cache the result in a variable.
const divisibleFive = [n1 % 5 === 0, n2 % 5 === 0, n3 % 5 === 0, n4 % 5 === 0];
console.log('total number divisible by 5 is:' + divisibleFive.length);

// Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;
console.log(`is first number larger then the last: ${isFirstLargerThanLast}`);

// Accomplish the following arithmetic chain:
//  Subtract the first number from the second number.
//  Multiply the result by the third number.
//  Find the remainder of dividing the result by the fourth number.
console.log(`remainder is: ${((n2 - n1) * n3) % n4}`);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate
const isNotOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`there is number that is less than 25: ${isNotOver25}`);

// ==========================================================================================
// PART 2 Practical Math
const gasPG = 3; // gas price per gallon
const totalMoney = 175; // the money you have
const totalMiles = 1500; // total distance
const mph55p1g = 30; // at 55 mph 1 gallon can travel 30 miles
const mph60p1g = 28; // at 60 mph 1 gallon can travel 28 miles
const mph75p1g = 23; // at 75 mph 1 gallon can travel 23 miles
const mph55Gallons = Math.round(totalMiles / mph55p1g); // at 55 mph you need how many gallons
const mph60Gallons = Math.round(totalMiles / mph60p1g); // at 60 mph you need how many gallons
const mph75Gallons = Math.round(totalMiles / mph75p1g); // at 75 mph you need how many gallons

console.log(`at 55 mph you will need ${mph55Gallons} gallons`);
console.log(`at 60 mph you will need ${mph60Gallons} gallons`);
console.log(`at 75 mph you will need ${mph75Gallons} gallons`);
console.log(
  `at 55 mph you have enough moeny to fuel: ${
    mph55Gallons * gasPG <= totalMoney ? 'yes' : 'no'
  }`
);
console.log(
  `at 65 mph you have enough moeny to fuel: ${
    mph60Gallons * gasPG <= totalMoney ? 'yes' : 'no'
  }`
);
console.log(
  `at 75 mph you have enough moeny to fuel: ${
    mph75Gallons * gasPG <= totalMoney ? 'yes' : 'no'
  }`
);
console.log(`at 55 mph your trip take: ${totalMiles / 55} hours`);
console.log(`at 60 mph your trip take: ${totalMiles / 60} hours`);
console.log(`at 75 mph your trip take: ${totalMiles / 75} hours`);

console.log(
  `based the money you have, you can travel at 55 or 60 mph, if you want save time pick 60 mph`
);

// ==========================================================================================
// PART 3 Future Exploration

function go(speed) {
  console.log(`${speed} you are good to go.`);
}
// traveling at 75
if (mph75Gallons * gasPG > totalMoney) {
  console.log('current speed is 75 mph run out of money, change speed');
  if (mph60Gallons * gasPG > totalMoney) {
    console.log(
      'current speed is 60 mph run out of money again, change speed.'
    );
  } else {
    go('60 mph');
  }
} else {
  go('75 mph');
}
