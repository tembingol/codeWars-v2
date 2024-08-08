//task 1 +++
/*
8 kyu
Double Char
*/
function doubleChar(str) {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}
//task 1 ---

//task 2 +++
/*
8 kyu
Convert a string to an array
*/
function stringToArray(string) {
  return string.split(" ");
}
//task 2 ---

//task 3 +++
/*
6 kyu
Counting Duplicates
*/
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
//task 3 ---

//task 4 +++
/*
8 kyu
Sum without highest and lowest number
*/
function sumArray(array) {
  let sum = 0;
  if (array == null) {
    return sum;
  }

  array.sort((a, b) => b - a);

  array.slice(1, -1).forEach((val) => (sum += val));

  return sum;
}
//task 4 ---
