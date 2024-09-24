// Part 1: Thinking Functionally
const arr = [2, 4, 6];
console.log(arr);
function numberArraySum(arr) {
  let sum = 0;
  if (!arr instanceof Array) {
    throw `Expecting an arry: got ${typeof arr}`;
  }
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

console.log(`Sum: ${numberArraySum(arr)}`);

function numberArrayAvg(arr) {
  if (!arr instanceof Array) {
    throw `Expecting an arry: got ${typeof arr}`;
  }
  const sum = numberArraySum(arr);
  return sum / arr.length;
}

console.log(`Avg: ${numberArrayAvg(arr)}`);

const strArr = ['hello', 'world', 'test', 'this is cool'];
console.log(strArr);

function stringsLongerThan(arr, length) {
  return arr.filter((str) => str.length > length);
}
console.log('=== strings longer than ===');
console.log(stringsLongerThan(strArr, 5));

console.log(
  '== print every number between 1 and n recursively (two ways, check functions) =='
);
// two functions to do this
function print1ToN(n, n1 = 1) {
  if (n1 > n) {
    return;
  }
  console.log(n1);
  print1ToN(n, ++n1);
}

print1ToN(3);

function print1ToN1(n) {
  if (n > 0) {
    return print1ToN1(n - 1) + ' ' + n;
  }
  return '';
}

console.log(print1ToN1(20));

// Part 2: Thinking Methodically
let persons = [
  { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
  { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
  { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
  { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
  { id: '7', name: 'Bilbo', occupation: 'None', age: '111' },
];
persons.sort((a, b) => a.age - b.age);
console.log('==== sort by age ====');
console.log(persons);
console.log('remove entries with an age greater than 50');
persons = persons.filter((p) => p.age < 50);
console.log(persons);
console.log(
  'Map the array to change the “occupation” key to “job” and increment every age by 1.'
);
persons = persons.map((p) => {
  return {
    id: p.id,
    name: p.name,
    job: p.occupation,
    age: +p.age + 1,
  };
});
console.log(persons);

let sumAges = 0;
sumAges = persons.reduce(
  (accumulator, p) => accumulator + parseInt(p.age),
  sumAges
);
console.log(
  `sumAges: ${sumAges} avgAges: ${Math.round(sumAges / persons.length)}`
);

// Part 3: Thinking Critically
function passByRef(obj) {
  if (typeof obj !== 'object') {
    return null;
  }
  if (obj.age) {
    obj.age++;
  } else {
    obj.age = 0;
  }
  if (obj.updated_at) {
    obj.updated_at.setTime(Date.now());
  } else {
    obj.updated_at = new Date();
  }
  return obj;
}

function passByValue(obj) {
  if (typeof obj !== 'object') {
    return null;
  }
  const newObj = {
    ...obj,
  };
  if (newObj.age) {
    newObj.age++;
  } else {
    newObj.age = 0;
  }
  newObj.updated_at = new Date();
  return newObj;
}

const obj = { age: 12, updated_at: new Date() };
console.log('Pass by Value!');
console.log(obj);
setTimeout(() => {
  passByValue(obj);
  console.log(obj);
}, 2000);
