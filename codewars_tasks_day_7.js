//task 1 +++
/*
8 kyu
Area or Perimeter
*/
const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : (l + w) * 2;
};
//task 1 ---

//task 2 +++
/*
6 kyu
Find the odd int
*/
function findOdd(A) {
  let buffer = [];
  //happy coding!
  A.forEach((value, index) => {
    console.log(value);
    let ind = buffer.indexOf(value);
    console.log(ind);
    if (ind == -1) {
      buffer.push(value);
    }
    if (ind !== -1) {
      buffer.splice(ind, 1);
    }
  });
  console.log("buffer " + buffer);
  return buffer.pop();
}
//task 2 ---

//task 3 +++
/*
8 kyu
Count by X
*/
function countBy(x, n) {
  let z = [];
  for (let i = 1; i < n + 1; i++) {
    z.push(i * x);
  }
  console.log(z);
  return z;
}
//task 3 ---

//task 4 +++
/*
8 kyu
Count by X
*/
function countBy(x, n) {
  let z = [];
  for (let i = 1; i < n + 1; i++) {
    z.push(i * x);
  }
  console.log(z);
  return z;
}
//task 4 ---

//task 5 +++
/*
7 kyu
Exes and Ohs
*/
function XO(str) {
  str = str.toLowerCase();

  let xArray = str.split("o").join("");
  let oArray = str.split("x").join("");

  return xArray.length == oArray.length;
}
//task 5 ---

//task 6 +++
/*
7 kyu
Get the Middle Character
*/
function getMiddle(s) {
  if (s.length == 1) {
    return s;
  }
  if (s.length % 2 == 0) {
    return s
      .split("")
      .splice(s.length / 2 - 1, 2)
      .join("");
  }
  return s
    .split("")
    .splice(s.length / 2, 1)
    .join("");
}
//task 6 ---

//task 7 +++
/*
7 kyu
Get the Middle Character
*/
var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};
//task 7 ---
