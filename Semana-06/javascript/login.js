var email = document.getElementById('email');

var pass = document.getElementById('pass');

var newUser = document.getElementById('new-user');

var login = document.getElementById('login');

email.addEventListener('focus', focusEmailValidation);

email.addEventListener('blur', blurEmailValidation);

pass.addEventListener('focus', focusPasswordValidation);

pass.addEventListener('blur', blurPasswordValidation);

login.addEventListener('click', loginClick);
  
function blurEmailValidation(){
    var validate = validateEmail();

    if (!validate){
        var b = document.getElementById('email-div');
        b.firstElementChild.textContent='This email format is invalid';
        email.style.borderColor='#F00';
    }
    else {
        email.style.borderColor='#0F0';
    }
}

function focusEmailValidation(){
    var b = document.getElementById('email-div');
    email.style.borderColor='#FFF';
    b.firstElementChild.textContent='';
}

function blurPasswordValidation(){
    var validate1 = validatePass();

    if (!validate1){
        let b = document.getElementById('pass-div');
        pass.style.borderColor = '#F00'
        b.firstElementChild.textContent='This password format is invalid';
    }
    else if (validate1 = true){
        pass.style.borderColor = '#0F0';
    }
}

function focusPasswordValidation(){
    var b = document.getElementById('pass-div');

    b.firstElementChild.textContent = '';
}

function validateEmail(){
    var mailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var validation = document.getElementById('email').value;
    if (validation.match(mailformat)){
        return true;
    }
    else {
        return false;
    }
}

function validatePass(){
    var passFormat =/^[A-Za-z]+[0-9]+$/;
    var passValidation = document.getElementById('pass').value;

    if (passValidation.match(passFormat)){
        return true;
    }
    else {
        return false;
    }
}

function loginClick(e){
    var a = validateEmail();
    var b = validatePass();
    var emailData = email.value;
    var passwordData = pass.value;
    if (validateEmail() && validatePass()) {
        window.alert(alert('Email: ' + emailData + '\n' + 'Password: ' + passwordData));
    }
    else if (!validateEmail() && validatePass()){
        window.alert('Invalid email.');
    }
    else if (validateEmail() && !validatePass()){
        window.alert('Invalid password.');
    }
    else{
        window.alert('Email and password are invalid, incorrect format.');
    }
}
