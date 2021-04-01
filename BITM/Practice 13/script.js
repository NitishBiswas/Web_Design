var redBtn = document.getElementById('red');
redBtn.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.style.backgroundColor = 'red';
};

var greenBtn = document.getElementById('green');
greenBtn.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.style.backgroundColor = 'green';
};

var blueBtn = document.getElementById('blue');
blueBtn.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.style.backgroundColor = 'blue';
};

var defaultBtn = document.getElementById('default');
defaultBtn.onclick = function () {
    var divOne = document.getElementById('divOne');
    divOne.style.backgroundColor = '';
};