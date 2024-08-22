//task 1 +++
/*
6 kyu
Title Case
*/
function titleCase(title, minorWords = "") {
  if (title.length == 0) return "";
  let titleArr = title.toLowerCase().split(" ");
  let minorArr = minorWords.toLowerCase().split(" ");

  titleArr[0] = titleArr[0].charAt(0).toUpperCase() + titleArr[0].substring(1);

  for (let i = 1; i < titleArr.length; i++) {
    if (minorArr.indexOf(titleArr[i]) == -1) {
      titleArr[i] =
        titleArr[i].charAt(0).toUpperCase() + titleArr[i].substring(1);
    }
  }

  //text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()

  return titleArr.join(" ");
}
//task 1 ---
