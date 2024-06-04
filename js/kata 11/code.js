var number = function(busStops){
    var index = 0;
    var total = 0;
    while(index < busStops.length) {
      total += busStops[index][0];
      total -= busStops[index][1];
      index++
    }
    return total;
  }

  // самый технологичный вариант
  const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);