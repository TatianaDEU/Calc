//let a = prompt('Vvedite a:', '');
//let b = prompt('Vvedite b:', '');
//let method = prompt('Vvedite operaciu(+, -, *, /)');

function calc(a, b, method) {
    if (method == '+') {
        return a + b;
    } else if (method == '-') {
        return a - b;
    } else if (method == '*') {
        return a * b;
    } else if (method == '/') {
        return a / b;
    }
}

console.log(calc(2, 3, '*'));