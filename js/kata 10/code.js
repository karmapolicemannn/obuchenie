var summation = function (num) {
    const arr = Array.from(
      {length: num},
      (_, index) => index + 1
    );
    console.log(arr);
    var total = 0;
    arr.forEach((item) => { total += item })
    return total;
}

// вариант который показался логичнее чем мой
var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
}

// самый правильный на мой взгляд (нашёл закономерность и использовал, всё гениальное просто)
function summation(num) {
    return num * (num + 1) / 2
  }