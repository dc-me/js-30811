// =============================================================================
// Part 1: Refactoring Old Code
// The old code is not flexible, also the variables are not related, has no
// data structure, makes it hard to maintain.

// =============================================================================
// Part 2: Expanding Functionality
console.log(
  '========================= Part 2: Expanding Functionality ============================='
);

const str =
  'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let csv = [];
for (const row of str.split('\n')) {
  const cols = [];
  for (const col of row.split(',')) {
    cols.push(col);
  }
  csv.push(cols);
}
console.log(csv);

// =============================================================================
console.log(
  '========================= Part 3: Transforming Data ============================='
);
let keys = csv[0];
let csvObj = [];
for (let i = 1; i < csv.length; i++) {
  // data row
  const col = {};
  for (let j = 0; j < csv[i].length; j++) {
    col[keys[j].toLowerCase()] = csv[i][j];
  }
  csvObj.push(col);
}
console.log(csvObj);

// =============================================================================
console.log(
  '========================= Part 4: Sorting and Manipulating Data ============================='
);
csvObj.pop();
csvObj.splice(1, 0, {
  id: '48',
  name: 'Barry',
  occupation: 'Runner',
  age: '25',
});
csvObj.push({ id: '7', name: 'Bilbo', occupation: 'None', age: '111' });
console.log(csvObj);
let totalAge = 0;
for (col of csvObj) {
  totalAge += parseInt(col.age, 10);
}
console.log(`Average age: ${totalAge / csvObj.length}`);

// =============================================================================
console.log(
  '========================= Part 5: Full Circle ============================='
);
const header = Object.keys(csvObj[0]);
let csvStr = header.join(',');
for (col of csvObj) {
  csvStr += '\n';
  for (let i = 0; i < header.length; i++) {
    csvStr += col[header[i]] + ',';
  }
  csvStr = csvStr.substring(0, csvStr.length - 1);
}
console.log(`To CSV: \n ${csvStr}`);
