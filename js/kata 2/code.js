function countSheeps(sheep) {
    let counter = 0;
    sheep.forEach((item) => {
      if(item === true) {
        counter++;
      }
    })
    return counter;
  }

// интересное решение, новый для меня метод .filter()
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }