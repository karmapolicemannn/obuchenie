function rowSumOddNumbers(n) {
	var triangle = [[1]];
  var currNumber = 1;
  var verticalIndex = 0;
  var horizontalIndex = 0;
  while(triangle.length < n) {
    var currHorizontal = 0;
    
    var finalHorizontal = horizontalIndex + 2
    var triangleRow = [];
    while(currHorizontal < (finalHorizontal)) {
      currNumber += 2;
      
      triangleRow.push(currNumber);
      currHorizontal++;
    }
    
    verticalIndex++;
    triangle[verticalIndex] = triangleRow;
    horizontalIndex++;
  }
  var result = 0;
  triangle[n - 1].forEach((item) => {
    result += item;
  })
  return result;
}

// я слишком буквально понял задание, а там было супер простое решение
// но всё таки не считаю свой вариант неправильным, так как в задании сказано именно считать сумму определённой строки в треугольнике

function rowSumOddNumbers(n) {
	return n**3
}