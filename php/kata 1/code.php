<?php
function nbYear($p0, $percent, $aug, $p) {
  $percent /= 100;
  $result = $p0;
  $n = 0;
  while($result < $p) {
    $result = $result + ($result * $percent) + $aug;
    $n++;
  };
  return $n;
}

// в задаче есть соманный тест, я смотрел комментарии, такая проблема у всех (проходит не все проверки, базовые в порядке, а при попытке сдать задание, ошибка)


?>