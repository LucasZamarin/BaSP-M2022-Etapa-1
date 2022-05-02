var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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

function validatePass(validation) {
    var abcB = false;
    var numB = false;
    for (var i = 0; i < validation.length; i++) {
        for (let j = 0; j < specialCharacters.length; j++) {
            if (validation[i] == specialCharacters[j]) {
                return false;
            }
        }
    }
    for (var i = 0; i < validation.length; i++) {
        if (!numB) {
            for (let j = 0; j < num.length; j++) {
                if (validation[i] == num[j]) {
                    numB = true;
                    break;
                }
            }
        }
        if (!abcB) {
            for (let j = 0; j < letters.length; j++) {
                if (validation[i] == letters[j]) {
                    abcB = true;
                    break;
                }
            }
        }
        if (numB && abcB) {
            break;
        }
    }
    if (numB && abcB) {
        return true;
    }
    else {
        return false;
    }
}

function loginClick(e) {
    var message = 'The data is ';
    var newline = '\r\n';
    if (!emailB && passB) {
        message += 'correct. Login successful.';
        alert(message);
        alert('Username: ' + email.value + 'Password: ' + password.value );
        sendRequest();
    }
    else {
        message += 'incorrect. Please check the following items: '
        if (emailB) {
            message += newline + 'User email: Please enter a valid email.'
        }
        if (!passB) {
            message += newline + 'Password: Please enter a valid password. It should only contain' +
                ' letters and numbers';
        }
        alert(message);
    }
}

function sendRequest() 
{
    const usp = new URLSearchParams (
        {
            email : email.value,
            password : pass.value
        }
    );

    const request = 'https://basp-m2022-api-rest-server.herokuapp.com/login?'+ usp;
    
    fetch(request)
        .then(function (response) {
           
            return response.json();
        })
        .then(function (response) {
            if(!response.success){
                throw new Error (response.msg)
            }
            alert('Request Succesful');
            alert(response.msg);
        })
        .catch(error=> {
          alert('There has been a problem.' + '\n' +  error);
        })
    }

// function sendRequest() {
//     const usp = new URLSearchParams(
//         {
//             email: email.value,
//             password: pass.value
//         }
//     );

//     const url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?' + usp;
//     fetch(url)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             alert(response.msg)
//         })
//         .catch(function (responseError) {
//             alert(responseError.errors[0].msg)
//         })
// }



// function loginClick(e) {
//     var a = validateEmail();
//     var b = validatePass();
//     var emailData = email.value;
//     var passwordData = pass.value;
//     if (validateEmail() && validatePass()) {
//         window.alert('Email: ' + emailData + '\n' + 'Password: ' + passwordData);
//         // sendRequest();
//     }
//     else if (!validateEmail() && validatePass()) {
//         window.alert('Invalid email.');
//     }
//     else if (validateEmail() && !validatePass()) {
//         window.alert('Invalid password.');
//     }
//     else {
//         window.alert('Email and password are invalid, incorrect format.');
//     }
// }


// function sendRequest() {
//     var usp = new URLSearchParams(
//         {
//             email: email.value,
//             password: pass.value
//         }
//     );

//     var request = 'https://basp-m2022-api-rest-server.herokuapp.com/login?' + usp;

//     fetch(request)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (responseJson) {
//             if (responseJson.success) {
//                 alert('Request successful\n' + responseJson.msg);
//             } else {
//                 alert('Error\n' + responseJson.msg);
//             }
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }