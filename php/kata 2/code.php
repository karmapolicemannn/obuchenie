<?php 
function zeroFuel($distanceToPump, $mpg, $fuelLeft) {
  
  return ($distanceToPump / $mpg) <= $fuelLeft ? true : false;
  
}
  // такой тест был в JS, здесь решён точно также, и точно также решений лучше или компактнее нет, есть только с чуть другими расчётам
?>