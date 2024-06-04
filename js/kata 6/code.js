function sumMix(x){
    var result = 0;
    x.forEach((item) => {
      result += parseInt(item);
    })
    return result;
}

// опять же как мне кажется эталонное решение, снова метод .map() и преобразование в число с помощью .reduce()

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }