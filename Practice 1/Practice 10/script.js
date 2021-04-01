var plusBtn = document.getElementById('plus');
plusBtn.onclick = function () {
    var btn = document.getElementById('btn').value = '+';
};

var minusBtn = document.getElementById('minus');
minusBtn.onclick = function () {
    var btn = document.getElementById('btn').value = '-';
};

var multiplicationBtn = document.getElementById('multiplication');
multiplicationBtn.onclick = function () {
    var btn = document.getElementById('btn').value = '*';
};

var divisionBtn = document.getElementById('division');
divisionBtn.onclick = function () {
    var btn = document.getElementById('btn').value = '/';
};

var equalBtn = document.getElementById('equal');
equalBtn.onclick = function () {
    var operator = document.getElementById('btn').value;
    var result = makeResult(operator);
    document.getElementById('result').value = result;
};

var clearBtn = document.getElementById('clear');
clearBtn.onclick = function () {
    document.getElementById('firstNumber').value = ' ';
    document.getElementById('lastNumber').value = ' ';
    document.getElementById('btn').value = ' ';
    document.getElementById('result').value = ' ';
}










function makeResult(operator) {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var lastNumber = Number(document.getElementById('lastNumber').value);
    switch (operator) {
        case '+':
            var result = firstNumber+lastNumber;
            break;
        case '-':
            var result = firstNumber-lastNumber;
            break;
        case '*':
            var result = firstNumber*lastNumber;
            break;
        case '/':
            var result = firstNumber/lastNumber;
            break;

    }
    return result;
}