// ===========================================================
// Part 1: Growing Pains
const PI = 3.1415;
const area = PI * 5 ** 2;
const area80 = area * 0.8; // reach 80% of area capacity
const area50 = area * 0.5; // reach 50% of area capacity
let week = 1;

// week 1
const week1Plants = week * 20;
const week1Area = week1Plants * 0.8;
if (week1Area > area80 && week1Area <= area) {
  console.log(`Week ${week} Pruned!`);
} else if (week1Area < area50) {
  console.log(`Week ${week} Planted!`);
} else {
  console.log(`Week ${week} Monitored!`);
}
week++;

// week2
const week2Plants = week1Plants * 2;
const week2Area = week2Plants * 0.8;
if (week2Area > area80 && week2Area <= area) {
  console.log(`Week ${week} Pruned!`);
} else if (week2Area < area50) {
  console.log(`Week ${week} Planted!`);
} else {
  console.log(`Week ${week} Monitored!`);
}
week++;

// week3
const week3Plants = week2Plants * 2;
const week3Area = week3Plants * 0.8;
if (week3Area > area80 && week3Area <= area) {
  console.log(`Week ${week} Pruned!`);
} else if (week3Area < area50) {
  console.log(`Week ${week} Planted!`);
} else {
  console.log(`Week ${week} Monitored!`);
}

// ===========================================================
// Part 2: Thinking Bigger
const spaceNeeded = Math.round(10 * 100 * 2 * 0.8);
console.log(`space needed: ${spaceNeeded}`);
console.log(
  `garden area radius: ${Math.round(Math.sqrt(spaceNeeded / PI))} meters`
);

// ===========================================================
// Part 3: Errors in Judgement
try {
  if (spaceNeeded > area) {
    throw 'no more space!';
  }
} catch (err) {
  console.log('I should have listened');
} finally {
  console.log("I've learned my lesson.");
}
