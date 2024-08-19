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
