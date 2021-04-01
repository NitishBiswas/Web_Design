function watch() {
    var timeDate = new Date();
    var hours = timeDate.getHours();
    var minutes = timeDate.getMinutes();
    var seconds = timeDate.getSeconds();
    if(hours>=12){
        var amPm = 'PM';
    }else{
        var amPm = 'AM';
    }
    hours = hours % 12;
    if (hours<=9){
        hours='0'+hours;
    }
    if(minutes<=9){
        minutes='0'+minutes;
    }
    if(seconds<=9){
        seconds='0'+seconds;
    }
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('amPm').innerHTML = amPm;
}

setInterval(watch, 1000);

var picture = ['Images/IMG_9279.JPG','Images/FB_IMG_1577195415799.jpg','Images/53646075_2170694413241112_7282304791978442752_n.jpg','Images/Sajek-Valley-Rangamati-Bangladesh-1.jpg','Images/images.jpg'];
var index = 1;
function pictures() {
    document.getElementById('main').setAttribute('src', picture[index]);
    index++;
    if(index>=picture.length){
        index=0;
    }
}
setInterval(pictures, 2000);
