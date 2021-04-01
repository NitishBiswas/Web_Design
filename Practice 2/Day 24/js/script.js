
function checkFirstName() {
    var firstNameError = $('#firstName').val();
    var reg = /^[a-zA-Z .-]{2,10}$/;
    if(reg.test(firstNameError)){
        $('#firstNameError').text(' ');
        return true;
    }else{
        $('#firstNameError').text('Please Enter Your First Name Correctly');
        return false;
    }
}
$('#firstName').keyup(function () {
    checkFirstName();
});

function checkLastName() {
    var lastNameError = $('#lastName').val();
    var reg = /^[a-zA-Z .-]{2,10}$/;
    if(reg.test(lastNameError)){
        $('#lastNameError').text(' ');
        return true;
    }else{
        $('#lastNameError').text('Please Enter Your Last Name Correctly');
        return false;
    }
}
$('#lastName').keyup(function () {
    checkLastName();
});

function checkEmailAddress() {
    var emailAddress = $('#emailAddress').val();
    var emailAddressError = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(emailAddressError.test(emailAddress)){
        $('#emailAddressError').text(' ');
        return true;
    }else{
        $('#emailAddressError').text('Invalid email');
        return false;
    }
}

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});

function checkPassword() {
    var password = $('#password').val();
    var passwordError = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(passwordError.test(password)){
        $('#passwordError').text(' ');
        return true;
    }else{
        $('#passwordError').text('password should be lower case upper case special character minimum length 8');
        return false;
    }
}

$('#password').keyup(function () {
    checkPassword();
});

function checkConformPassword() {
    var conformPassword = $('#conformPassword').val();
    var conformPasswordError = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(conformPasswordError.test(conformPassword)){
        $('#conformPasswordError').text(' ');
        return true;
    }else{
        $('#conformPasswordError').text('password does not match');
        return false;
    }
}

$('#conformPassword').keyup(function () {
    checkConformPassword();
});

function showPassword() {
    var attrValue = $('#password').attr('type');
    if(attrValue=='password'){
        $('#password').attr('type','text');
    }else{
        $('#password').attr('type','password');
    }
}
$('#passwordCheck').click(function () {
    showPassword();
});


function checkGenderInfo() {
    var genderInfo = $('input[type="radio" ]:checked').val();
    if(genderInfo == 'male' || genderInfo == 'female'){
        $('#genderError').text(' ');
        return true;
    }else{
        $('#genderError').text('Please Select Your Gender Info');
        return false;
    }
}

function checkDistrict() {
    var district = $('#districtName').val();
    if(district == " "){
        $('#districtError').text('Please Select Your District');
        return false;
    }else{
        $('#districtError').text(' ');
        return true;
    }
}


$('#form').submit(function () {
    if(checkFirstName()==true && checkLastName() == true && checkEmailAddress() == true && checkPassword() == true && checkConformPassword() == true && checkGenderInfo() == true && checkDistrict() == true) {
        return true;
    }else {
        return false;
    }
});
