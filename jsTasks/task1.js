document.addEventListener("DOMContentLoaded", function() {
  function stringCounter(str) {
    const obj = {};

    str
      .toLowerCase()
      .split("")
      .forEach(item => {
        item in obj ? obj[item]++ : (obj[item] = 1);
      });
    let maxChar = str[0].toLowerCase();
    let maxNum = 1;
    for (key in obj) {
      if (obj[key] > maxNum) {
        maxChar = key;
        maxNum = obj[key];
      }
    }
    return maxChar;
  }

  console.log(stringCounter("Какая-то небольшая строка!"));
});
