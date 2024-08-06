//task 1 +++
/*
7 kyu
Descending Order
*/
function descendingOrder(n) {
  return Number([...String(n)].sort((a, b) => b - a).join(""));
}
//task 1 ---

//task 2 +++
/*
6 kyu
Replace With Alphabet Position
*/
function alphabetPosition(text) {
  return text
    .split("")
    .filter((e) => /[a-zA-Z]/.test(e))
    .map((e) => e.toLowerCase().charCodeAt(0) - 96)
    .join(" ");
}
//task 2 ---

//task 3 +++
/*
6 kyu
Write Number in Expanded Form
*/
function expandedForm(num) {
  let numStr = num.toString().split("");

  for (let i = 0; i < numStr.length; i++) {
    for (let y = numStr.length - i; y > 1; y--) {
      numStr[i] += "0";
    }
  }

  numStr = numStr.filter((value) => !value.startsWith(0));
  return numStr.join(" + ");
}
//task 3 ---
