//task 1 +++
/*
6 kyu
Bouncing Balls
*/
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;

  let result = 0;
  // your code here
  while (h > window) {
    result += 2;
    h = h * bounce;
  }
  return result - 1;
}
//task 1 ---

//task 2 +++
/*
8 kyu
Convert number to reversed array of digits
*/
function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((val) => parseInt(val));
}
//task 2 ---

//task 3 +++
/*
7 kyu
Round up to the next multiple of 5
*/
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
//task 3 ---
