var plusBtn = document.getElementById('plus');
    plusBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber+secondNumber;
    document.getElementById('result').value = result;
};

    var minusBtn = document.getElementById('minus');
    minusBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber-secondNumber;
    document.getElementById('result').value = result;
};

var multiplicationBtn = document.getElementById('multiplication');
multiplicationBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber*secondNumber;
    document.getElementById('result').value = result;
};

var divisionBtn = document.getElementById('division');
divisionBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber/secondNumber;
    document.getElementById('result').value = result;
};