var btn = document.getElementById('btn');
btn.onclick = function () {
    var startingNumber = document.getElementById('startingNumber').value;
    var endingNumber = document.getElementById('endingNumber').value;
    var res='';
    for (var i=startingNumber; i<=endingNumber; i++){
        res = res+' '+i;
    }
    document.getElementById('result').innerHTML = res;
};

var red = document.getElementById('red');
red.onclick = function () {
    var div1 = document.getElementById('div1');
    div1.style.backgroundColor='red';
};

var green = document.getElementById('green');
green.onclick = function () {
    var div1 = document.getElementById('div1');
    div1.style.backgroundColor = 'green';
};
var blue = document.getElementById('blue');
blue.onclick = function () {
    var div1 = document.getElementById('div1');
    div1.style.backgroundColor = 'blue';
};
var normal = document.getElementById('normal');
normal.onclick = function () {
    var div1 = document.getElementById('div1');
    div1.style.backgroundColor = 'white';
    div1.style.border= '1px solid blueviolet';
};



var home = document.getElementById('home');
home.onclick = function () {
    document.getElementById('heading').innerHTML = 'HOME';
};
var about = document.getElementById('about');
about.onclick = function () {
    document.getElementById('heading').innerHTML = 'ABOUT';
};
var contact = document.getElementById('contact');
contact.onclick = function () {
    document.getElementById('heading').innerHTML = 'CONTACT';
};


var img1 = document.getElementById('img1');
img1.onclick = function () {
    var img1 = document.getElementById('img1').getAttribute('src');
    document.getElementById('main').setAttribute('src',img1);
};
var img2 = document.getElementById('img2');
img2.onclick = function () {
    var img2 = document.getElementById('img2').getAttribute('src');
    document.getElementById('main').setAttribute('src',img2);
};
var img3 = document.getElementById('img3');
img3.onclick = function () {
    var img3 = document.getElementById('img3').getAttribute('src');
    document.getElementById('main').setAttribute('src',img3);
};
var img4 = document.getElementById('img4');
img4.onclick = function () {
    var img4 = document.getElementById('img4').getAttribute('src');
    document.getElementById('main').setAttribute('src',img4);
};
var img5 = document.getElementById('img5');
img5.onclick = function () {
    var img5 = document.getElementById('img5').getAttribute('src');
    document.getElementById('main').setAttribute('src',img5);
};

