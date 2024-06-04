function openOrSenior(data){
    var result = [];
    data.forEach((item) => {
      if(item[0] >= 55) {
        item[1] > 7 ? result.push('Senior'): result.push('Open');
      } else {
        result.push('Open');
      }
    })
    return result;
  }

  // техничный вариант решения

  function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }