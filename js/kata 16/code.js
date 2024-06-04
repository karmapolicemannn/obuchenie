function addBinary(a,b) {
    var sum = a + b;
    return sum.toString(2)
}
// вариант самый краткий, я так изначально и пробовал но видимо где то допустил ошибку и у меня не сработало

function addBinary(a,b){
    return (a+b).toString(2)
}