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
