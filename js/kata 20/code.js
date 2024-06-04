function descendingOrder(num){
    var toStr = String(num);
    var str = toStr.split('')
    str.reverse()
    str.sort(function (a, b) {
      return b - a;
    });
  
    var str2 = str.join('');
  
    return parseInt(str2);
}

// Другие варианты решения не получилось посмотреть, codewars сломался немного (500 ошибка)