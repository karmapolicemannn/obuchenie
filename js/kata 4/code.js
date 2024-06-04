function repeatStr (n, s) {
    if(n > 0) {
      var string = '';
      var counter = 0;
      while (counter < n) {
        counter++;
        string += s;
      }
    }
    
    return string;
  }

// решение которое понравилось (логичная оптимизачия) и новый метод .repeat()
function repeatStr (n, s) {
    return s.repeat(n);
  }