function evenOrOdd(number) {
    let result = number / 2;
    if(Number.isInteger (result) == true) {
      return "Even"
    } else {
      return "Odd"
    }
  }

  //решение которое понравилось, и является по факту логическим сокращением моего

  function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }