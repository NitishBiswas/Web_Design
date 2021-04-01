
function timeZone() {
    var timeData = new Date();
    var hours = timeData.getHours();
    var minutes = timeData.getMinutes();
    var seconds = timeData.getSeconds();
    var date = timeData.setFullYear(2019,9, 13);
    var amPm = hours >= 12 ? 'PM':'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('amPm').innerHTML = amPm;

}
setInterval(timeZone,1000);

