

$('.heading').click(function () {
    $('.heading').css({
        'color' : 'red'
    });
});



function watch() {
    var timeDate = new Date();
    var hours = timeDate.getHours();
    var minutes = timeDate.getMinutes();
    var seconds = timeDate.getSeconds();
    var amPm = hours >= 12 ? 'pm':'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    document.getElementById('heading').innerHTML = hours+' : '+minutes+' : '+seconds+' '+amPm;
}

setInterval(watch,1000);



var images = ['Images/1.jpg', 'Images/2.jpg', 'Images/3.png', 'Images/4.jpg', 'Images/5.jpg'];
var index = 0;
function imagesData() {
    var mainImage = document.getElementById('mainImage');
    mainImage.setAttribute('src',images[index]);
    index++;
    if(index >= images.length){
        index = 0;
    }
}


setInterval(imagesData,2000);

var img1 = document.getElementById('img1');
img1.onclick = function () {
    var img1 = document.getElementById('img1').getAttribute('src');
    var mainImage = document.getElementById('mainImage').setAttribute('src',img1);
};
var img2 = document.getElementById('img2');
img2.onclick = function () {
    var img2 = document.getElementById('img2').getAttribute('src');
    var mainImage = document.getElementById('mainImage').setAttribute('src',img2);
};
var img3 = document.getElementById('img3');
img3.onclick = function () {
    var img3 = document.getElementById('img3').getAttribute('src');
    var mainImage = document.getElementById('mainImage').setAttribute('src',img3);
};
var img4 = document.getElementById('img4');
img4.onclick = function () {
    var img4 = document.getElementById('img4').getAttribute('src');
    var mainImage = document.getElementById('mainImage').setAttribute('src',img4);
};
var img5 = document.getElementById('img5');
img5.onclick = function () {
    var img5 = document.getElementById('img5').getAttribute('src');
    var mainImage = document.getElementById('mainImage').setAttribute('src',img5);
};


