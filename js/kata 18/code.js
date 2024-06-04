function removeExclamationMarks(s) {
    return s.split('!').join('');
}

//сложностей не возникло, решение нашёл простое, но была альтернатива с помощью .replace()

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}