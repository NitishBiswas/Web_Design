
var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var startingNumber = document.getElementById('startingNumber').value;
    var endingNumber = document.getElementById('endingNumber').value;
    for (var i = startingNumber; i<=endingNumber; i++) {
        document.getElementById('result').innerHTML += i+' ';
    }

};