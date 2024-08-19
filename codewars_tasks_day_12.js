//task 1 +++
/*
6 kyu
Take a Ten Minutes Walk
*/
function isValidWalk(walk) {
  let countN = 0;
  let countS = 0;
  let countW = 0;
  let countE = 0;
  if (walk.length != 10) {
    return false;
  }
  walk.forEach((val) => {
    if (val == "n") {
      countN++;
    }
    if (val == "s") {
      countS++;
    }
    if (val == "w") {
      countW++;
    }
    if (val == "e") {
      countE++;
    }
  });

  return countN == countS && countW == countE;
}
//task 1 ---

//task 2 +++
/*
8 kyu
Sum Mixed Array
*/
function sumMix(x) {
  return x.reduce((total, amount) => parseInt(total) + parseInt(amount));
}
//task 2 ---

//task 3 +++
/*
7 kyu
Odd or Even?
*/
function oddOrEven(array) {
  if (array.length == 0) return "even";
  return array.reduce((total, amount) => total + amount) % 2 == 0
    ? "even"
    : "odd";
}
//task 3 ---

//task 4 +++
/*
8 kyu
Cat years, Dog years
*/
var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears == 1) {
    return [humanYears, 15, 15];
  }
  if (humanYears == 2) {
    return [humanYears, 24, 24];
  }
  return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
};
//task 4 ---

//task 5 +++
/*
8 kyu
Twice as old
*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
  result = dadYearsOld - sonYearsOld * 2;
  return result < 0 ? result * -1 : result;
}
//task 5 ---

//task 6 +++
/*
5 kyu
Extract the domain name from a URL
*/
function domainName(url) {
  let sourceString = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(/[/?#]/)[0];
  let domain = sourceString.split(".")[0];
  return domain;
}
//task 6 ---
