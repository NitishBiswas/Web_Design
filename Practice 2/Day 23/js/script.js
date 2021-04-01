
var menuPosition = $('#menu').position();
$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    if(scrollPosition >= menuPosition.top){
        $('#menu').css({
            'position' : 'fixed',
            'top' : '0px'
        });
    }else{
        $('#menu').css({
            'position' : 'relative',
            'top' : '0px'
        });
    }
});

function firstName() {
    var firstName = $('#firstName').val();
    var firstNameError = /^[a-zA-Z .-]{2,10}$/;
    if(firstNameError.test(firstName)){
        $('#firstNameError').text(' ');
    }else{
        $('#firstNameError').text('first name should be 2 to 10 character');
    }
}

$('#firstName').keyup(function () {
    firstName();
});

function lastName() {
    var lastName = $('#lastName').val();
    var lastNameError = /^[a-zA-Z .-]{2,10}$/;
    if(lastNameError.test(lastName)){
        $('#lastNameError').text(' ');
    }else{
        $('#lastNameError').text('last name should be 2 to 10 character');
    }
}

$('#lastName').keyup(function () {
    lastName();
});

function emailAddress() {
    var emailAddress = $('#emailAddress').val();
    var emailAddressError = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(emailAddressError.test(emailAddress)){
        $('#emailAddressError').text(' ');
    }else{
        $('#emailAddressError').text('Invalid email');
    }
}

$('#emailAddress').keyup(function () {
    emailAddress();
});

function password() {
    var password = $('#password').val();
    var passwordError = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(passwordError.test(password)){
        $('#passwordError').text(' ');
    }else{
        $('#passwordError').text('password should be lower case upper case special character minimum length 8')
    }
}

$('#password').keyup(function () {
    password();
});

function conformPassword() {
    var conformPassword = $('#conformPassword').val();
    var conformPasswordError = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(conformPasswordError.test(conformPassword)){
        $('#conformPasswordError').text(' ');
    }else{
        $('#conformPasswordError').text('password does not match');
    }
}

$('#conformPassword').keyup(function () {
    conformPassword();
});