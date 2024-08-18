//task 1 +++
/*
6 kyu
Mexican Wave
*/
function wave(str) {
  resultArr = [];
  arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (str[i] == " ") continue;
    resultArr.push(replaceAt(str, i, str[i].toUpperCase()));
  }

  return resultArr;
}

function replaceAt(str, index, replacement) {
  return (
    str.substr(0, index) + replacement + str.substr(index + replacement.length)
  );
}
//task 1 ---

//task 2 +++
/*
6 kyu
Detect Pangram
*/
function isPangram(string) {
  let alphabet = "qwertyuiopasdfghjklzxcvbnm";
  let locString = string.toLowerCase();
  for (i = 0; i < alpfabet.length; i++) {
    if (locString.indexOf(alphabet[i]) == -1) {
      return false;
    }
  }

  return true;
}
//task 2 ---

//task 3 +++
/*
7 kyu
Complementary DNA
*/
function dnaStrand(dna) {
  let map = {
    T: "A",
    A: "T",
    G: "C",
    C: "G",
  };
  let resultStr = dna;
  dna.split("").forEach((val, index) => {
    resultStr =
      resultStr.substr(0, index) + map[val] + resultStr.substr(index + 1);
  });
  return resultStr;
}
//task 3 ---

//task 4 +++
/*
8 kyu
Beginner Series #1 School Paperwork
*/
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}
//task 4 ---

//task 5 +++
/*
8 kyu
Invert values
*/
function invert(array) {
  return array.map((value) => value * -1);
}
//task 5 ---

//task 6 +++
/*
7 kyu
Sum of two lowest positive integers
*/
function sumTwoSmallestNumbers(numbers) {
  let sortedArr = numbers.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}
//task 6 ---

//task 7 +++
/*
8 kyu
Correct the mistakes of the character recognition software
*/
function correct(string) {
  resultStr = string.replace(/5/g, "S");
  resultStr = resultStr.replace(/0/g, "O");
  resultStr = resultStr.replace(/1/g, "I");

  return resultStr;
}
//task 7 ---

//task 8 +++
/*
8 kyu
Correct the mistakes of the character recognition software
*/
function correct(string) {
  resultStr = string.replace(/5/g, "S");
  resultStr = resultStr.replace(/0/g, "O");
  resultStr = resultStr.replace(/1/g, "I");

  return resultStr;
}
//task 8 ---
