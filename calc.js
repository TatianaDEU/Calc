let a = +prompt('Vvedite a:', '');
let b = +prompt('Vvedite b:', '');
let method = prompt('Vvedite operaciu(+, -, *, /)');

function calc() {
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

alert(calc());