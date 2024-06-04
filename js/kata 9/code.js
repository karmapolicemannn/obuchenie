function findSmallestInt(arr) {
    arr.sort(function (a, b) {
      return a - b;
    });
    return arr[0];
  }

// чуть более правильное решение на мой взгляд

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }