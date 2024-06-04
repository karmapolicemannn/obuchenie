function fakeBin(x){
    var finalString = '';
    var fields = x.split('');
    fields.forEach((item) => {
      if(item < 5) {
        finalString += '0';
      } else if (item >= 5) {
        finalString += '1';
      }
    })
    
      return finalString;
  }

// варианты которые понравились

// просто прикольная реализация
function fakeBin(x){
    return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}

// как мне кажется эталонная реализация в одну строку с разбиением строки на массив, прогонкой по мапу и сборкой обратно в строку
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}