function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0) {
      return [];
    } else {
      var result = [0,0];
      input.forEach((item)=>{
        item > 0 ? result[0]++ : result[1] += item;
      })
    }
    return result;
  }