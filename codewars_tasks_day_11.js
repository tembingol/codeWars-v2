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
