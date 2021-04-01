var homeBtn = document.getElementById('home');
homeBtn.onclick = function () {
    document.getElementById('heading').innerHTML = 'This is home heading';
    document.getElementById('para').innerHTML = 'This is home para';
    var divOne = document.getElementById('divOne');
    divOne.className = 'background';
};

var aboutBtn = document.getElementById('about');
aboutBtn.onclick = function () {
    document.getElementById('heading').innerHTML = 'This is about heading';
    document.getElementById('para').innerHTML = 'This is about para';
    var divOne = document.getElementById('divOne');
    divOne.className = 'background';
};

var contactBtn = document.getElementById('contact');
contactBtn.onclick = function () {
    document.getElementById('heading').innerHTML = 'This is contact heading';
    document.getElementById('para').innerHTML = 'This is contact para';
    var divOne = document.getElementById('divOne');
    divOne.className = 'background';
};