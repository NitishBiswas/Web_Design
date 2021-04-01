var pulsBtn = document.getElementById('plus');
pulsBtn.onclick = function () {
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

var remainderBtn = document.getElementById('remainder');
remainderBtn.onclick = function () {
    var btn = document.getElementById('btn').value = '%';
};

var equalBtn = document.getElementById('equal');
equalBtn.onclick = function () {
    var btn = document.getElementById('btn').value;
    var result = makeResult(btn);
    document.getElementById('result').value = result;
};

var clearBtn = document.getElementById('ac');
clearBtn.onclick = function () {
    var firstNumber = document.getElementById('firstNumber').value = ' ';
    var btn = document.getElementById('btn').value = ' ';
    var lastNumber = document.getElementById('lastNumber').value = ' ';
    var result = document.getElementById('result').value = ' ';
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
        case'*':
            var result = firstNumber*lastNumber;
            break;
        case '/':
            var result = firstNumber/lastNumber;
            break;
        case '%':
            var result = firstNumber%lastNumber;
            break;
    }
    return result;
}