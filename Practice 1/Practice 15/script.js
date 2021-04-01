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