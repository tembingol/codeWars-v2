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

//task 7 +++
/*
8 kyu
Are You Playing Banjo?
*/
function areYouPlayingBanjo(name) {
  // Implement me
  return name.toLowerCase()[0] == "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
//task 7 ---

//task 8 +++
/*
7 kyu
Categorize New Member
*/
function openOrSenior(data) {
  let result = [];
  data.forEach((value) => {
    result.push(value[0] > 54 && value[1] > 7 ? "Senior" : "Open");
  });
  return result;
}
//task 8 ---

//task 9 +++
/*
8 kyu
Parse nice int from char problem
*/
function getAge(inputString) {
  return parseInt(inputString[0]);
}
//task 9 ---

//task 10 +++
/*
8 kyu
Is the string uppercase?
*/
String.prototype.isUpperCase = function () {
  //console.log(this)
  return this == this.toUpperCase();
};
//task 10 ---

//task 11 +++
/*
8 kyu
Reverse List Order
*/
function reverseList(list) {
  return list.reverse();
}
//task 11 ---

//task 12 +++
/*
7 kyu
Sum of odd numbers
*/
function rowSumOddNumbers(n) {
  return n ** 3;
}
//task 12 ---
