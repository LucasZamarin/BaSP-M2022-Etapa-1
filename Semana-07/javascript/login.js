var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 'ñ', "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ['+', '-', '_', '@', '*'];
var emailB = false, passB = false;

var email = document.getElementById('email');
var pass = document.getElementById('pass');
var newUser = document.getElementById('new-user');
var login = document.getElementById('login');

email.addEventListener('focus', focusEmailValidation);
email.addEventListener('blur', blurEmailValidation);
pass.addEventListener('focus', focusPasswordValidation);
pass.addEventListener('blur', blurPasswordValidation);
login.addEventListener('click', loginClick);
var validation = document.getElementById('email').value;

function blurEmailValidation() {
    var validate = validateEmail();
    if (!validate) {
        var b = document.getElementById('email-div');
        b.firstElementChild.textContent = 'This email format is invalid';
        email.style.borderColor = '#F00';
        emailB = true;
    }
    else {
        email.style.borderColor = '#0F0';
        emailB = false;
    }
}

function focusEmailValidation() {
    var b = document.getElementById('email-div');
    email.style.borderColor = '#FFF';
    b.firstElementChild.textContent = '';
}

function focusPasswordValidation() {
    var b = document.getElementById('pass-div');
    b.firstElementChild.textContent = '';
}

function validateEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var validation = document.getElementById('email').value;
    if (validation.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

function blurPasswordValidation() {
    var b = document.getElementById('pass-div');
    if (validatePass(document.getElementById('pass').value)) {
        pass.style.borderColor = '#0F0';
        passB = true;
    }
    else {
        pass.style.borderColor = '#F00'
        b.firstElementChild.textContent = 'This password format is invalid';
        passB = false;
    }
}

function validatePass(pass) {
    var letters = 0;
    var numbers = 0;
    if (pass.length < 7) {
        return false;
    } else {
        for (i = 0; i < pass.length; i++) {
            if (isNaN(pass[i])) {
                letters += 1;
            } else {
                numbers += 1;
            }
        }
    }
    return (letters !== 0 && numbers !== 0)
}

function loginClick(e) {
    e.preventDefault();
    if (emailB) {
        alert('Wrong email input, please try again.');
    }
    else if (!passB) {
        alert('Wrong password input, please try again.');
    } else {
        sendRequest();
    }
}

function sendRequest() {
    const request = `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${pass.value}`;
    fetch(request)
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            if (response.success) {
                console.log("Successful request!", response.msg);
                alert('Employee successfully logged in.');

            } else {
                console.log("It won't access, you're not the user.", response);
                alert('You cannot access, you are not the correct user.');
            }
        })
        .catch((err) => {
            alert(err);
        })
}