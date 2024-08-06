//task 1 +++
/*
8 kyu
Reversed sequence
*/
const reverseSeq = (n) => {
  let myArray = [];
  for (let i = n; i > 0; i--) {
    myArray.push(i);
  }
  return myArray;
};
//task 1 ---

//task 2 +++
/*
8 kyu
Quarter of the year
*/
const quarterOf = (month) => {
  return Math.ceil(month / 3);
};
//task 2 ---

//task 2 +++
/*
8 kyu
Convert boolean values to strings 'Yes' or 'No'.
*/
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
//task 2 ---
