
var btn = document.getElementById('plus');
btn.onclick = function () {
    document.getElementById('operator').value = '+';
};
var btn = document.getElementById('minus');
btn.onclick = function () {
    document.getElementById('operator').value = '-';
};
var btn = document.getElementById('multiplication');
btn.onclick = function () {
    document.getElementById('operator').value = '*';
};
var btn = document.getElementById('division');
btn.onclick = function () {
    document.getElementById('operator').value = '/';
};

var equal = document.getElementById('equal');
equal.onclick = function () {
    var btn = document.getElementById('operator').value;
    var fullNumber = calculator(btn);
    document.getElementById('result').value = fullNumber;
};


function calculator(btn) {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    switch (btn) {
        case '+':
            var fullNumber = firstNumber + secondNumber;
            break;
        case '-':
            var fullNumber = firstNumber - secondNumber;
            break;
        case '*':
            var fullNumber = firstNumber * secondNumber;
            break;
        case '/':
            var fullNumber = firstNumber / secondNumber;
            break;

    }
    return fullNumber;
}