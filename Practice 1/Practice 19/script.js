
var image = ['Images/1.jpg','Images/2.jpg','Images/3.png','Images/4.jpg','Images/5.jpg'];
var index = 0;

function imageData() {
    var mainImage = document.getElementById('mainImage').setAttribute('src',image[index]);
    index++;
    if (index>=image.length){
        index = 0;
    }
};
setInterval(imageData,2000);




var img1 = document.getElementById('img1');
img1.onclick = function () {
    var img1 = document.getElementById('img1').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img1);
};

var img2 = document.getElementById('img2');
img2.onclick = function () {
    var img2 = document.getElementById('img2').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img2);
};

var img3 = document.getElementById('img3');
img3.onclick = function () {
    var img3 = document.getElementById('img3').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img3);
};

var img4 = document.getElementById('img4');
img4.onclick = function () {
    var img4 = document.getElementById('img4').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img4);
};

var img5 = document.getElementById('img5');
img5.onclick = function () {
    var img5 = document.getElementById('img5').getAttribute('src');
    document.getElementById('mainImage').setAttribute('src',img5);
};
