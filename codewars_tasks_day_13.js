//task 1 +++
/*
8 kyu
Powers of 2
*/
function powersOfTwo(n) {
  let result = [];
  for (i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}
//task 1 ---

//task 2 +++
/*
7 kyu
Sort array by string length
*/
function sortByLength(array) {
  // Return an array containing the same strings,
  // ordered from shortest to longest
  return array.sort((a, b) => a.length - b.length);
}
//task 2 ---

//task 3 +++
/*
7 kyu
Count the divisors of a number
*/
function getDivisorsCnt_old(n) {
  var count = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}
function getDivisorsCnt(n) {
  let num = n;
  let count = 1;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      // num делится на i. Значит, i - простое.
      // Если бы оно не было простым, то состояло бы из других простых,
      // более мелких. Но ведь их выкинули из num на предыдущих итерациях.
      let pow = 1;
      let ipow = i;

      // определяем степень для простого числа i
      for (
        let ipowNext = i * i;
        num % ipowNext === 0;
        ipowNext = ipowNext * i
      ) {
        pow++;
        ipow = ipowNext;
      }

      count = count * (pow + 1);
      num = num / ipow; // теперь в составе num нет простого числа i
    }
  }

  return count;
}
//task 3 ---
