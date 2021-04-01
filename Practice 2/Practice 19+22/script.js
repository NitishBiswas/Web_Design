
function clock() {
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    $('#h1').text(hours+" : "+minutes+" : "+seconds);
}
setInterval(clock,1000);

$('#firstName').keyup(function () {
    var firstName = $('#firstName').val();
    $('#res1').text(firstName);
});
$('#lastName').keyup(function () {
    var lastName = $('#lastName').val();
    $('#res2').text(lastName);
});
$('#lastName').blur(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    $('#res3').text(firstName+" "+lastName);
});

$('#div1').scroll(function () {
    var scroll = $('#div1').scrollTop();
    $('#h').text(scroll);
    var position = $('#div1').position();
    $('#h0').text(position.top);
});

var position = $('#div2').position();
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if(scroll>=position.top){
        $('#div2').css({
            'position':'fixed',
            'top':'0px'
        });
    }else {
        $('#div2').css({
            'position':'relative',
            'top':'0px'
        });
    }
});
