//task 1 +++
/*
6 kyu
Persistent Bugger.
*/
function persistence(num) {
  let counter = 0;
  let res = num;

  let flag = true;
  if (num < 10) return counter;
  //code me
  while (flag) {
    res = res
      .toString()
      .split("")
      .reduce((acc, rec) => acc * rec);
    resLength = res.toString().split("").length;
    if (resLength <= 1) {
      flag = false;
    }
    counter++;
  }
  return counter;
}
//task 1 ---
