//task 1 +++
/*
8 kyu
Switch it Up!
*/
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";

    case 1:
      return "One";

    case 2:
      return "Two";

    case 3:
      return "Three";

    case 4:
      return "Four";

    case 5:
      return "Five";

    case 6:
      return "Six";

    case 7:
      return "Seven";

    case 8:
      return "Eight";

    case 9:
      return "Nine";

    default:
      return "error";
  }
}
//task 1 ---

//task 2 +++
/*
6 kyu
Find the unique number
*/
function findUniq(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] != arr[i + 1] || arr[i] != arr[i + 2]) {
      let newArr = [arr[i], arr[i + 1], arr[i + 2]];
      console.log(newArr);
      return newArr.filter((a) => newArr.filter((b) => b === a).length == 1)[0];
    }
  }
}
//task 2 ---

//task 3 +++
/*
8 kyu
All Star Code Challenge #18
*/
function strCount(str, letter) {
  const matches = str.match(new RegExp(letter, "g"));
  return matches ? matches.length : 0;
}
//task 3 ---

//task 4 +++
/*
7 kyu
Testing 1-2-3
*/
var number = function (array) {
  return array.map(function (value, index) {
    return index + 1 + ": " + value;
  });
};
//task 4 ---

//task 5 +++
/*
8 kyu
Is it even?
*/
function testEven(n) {
  return n % 2 == 0;
}
//task 5 ---

//task 6 +++
/*
7 kyu
Beginner Series #3 Sum of Numbers
*/
function getSum(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  return ((max - min + 1) * (max + min)) / 2;
}
//task 6 ---

//task 7 +++
/*
8 kyu
You only need one - Beginner
*/
function check(a, x) {
  return a.indexOf(x) > -1;
}
//task 7 ---

//task 8 +++
/*
8 kyu
Volume of a Cuboid
*/
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
//task 8 ---

//task 9 +++
/*
7 kyu
The highest profit wins!
*/
function minMax(arr) {
  resultArr = arr.sort((a, b) => a - b);
  return [resultArr[0], resultArr[arr.length - 1]];
}

//task 9 ---

//task 10 +++
/*
7 kyu
Remove the minimum
*/
function removeSmallest(numbers) {
  let result = [...numbers];
  let min = Math.min(...numbers);

  result.splice(result.indexOf(min), 1);

  return result;
}
//task 10 ---
