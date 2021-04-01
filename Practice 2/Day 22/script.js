
$('#btn').click(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var fullName = firstName+' '+lastName;
    $('#fullName').val(fullName);
});

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
    var fullName = firstName+' '+lastName;
    $('#res3').text(fullName);
});
var firstScroll = 0;
$('#scroll').scroll(function () {
    var position = $('#scroll').scrollTop();
    $('#h3').text(position);
    $('#h3').css('display','block').fadeOut(1000);
    if(position>firstScroll){
        $('#h2').text('Scrolling Down');
        $('#h2').css('display','block').fadeOut(1000);
    }else{
        $('#h2').text('Scrolling Up');
        $('#h2').css('display','block').fadeOut(1000);
    }
    firstScroll=position;
});

var positionDiv = $('#helloDiv').position();
$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    if(scrollPosition>=positionDiv.top){
        $('#helloDiv').css({
            'position':'fixed',
            'top':'0px'
        });
    }else{
        $('#helloDiv').css({
            'position':'relative',
            'top':'0px'
        });
    }
});