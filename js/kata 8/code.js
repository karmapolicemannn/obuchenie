function sumTwoSmallestNumbers(numbers) { 
    numbers.sort(function (a, b) {
      return a - b;
    });
    return numbers[0] + numbers[1];
} 

// вариантов которые понравились больше не увидел