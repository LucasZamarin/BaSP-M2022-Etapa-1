var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var dni = document.getElementById('dni');
var birthdate = document.getElementById('birthdate');
var phonenumber = document.getElementById('phonenumber');
var adress = document.getElementById('adress');
var location1 = document.getElementById('location');
var postalcode = document.getElementById('postalcode');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var passrepeat = document.getElementById('passrepeat');
var create = document.getElementById('button');
var signup = document.getElementById('signup');

var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var passwordRegex = /^[a-zA-Z0-9]+$/;
var nameRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
var numericRegex = /^[0-9-.]+$/;
var adressRegex = /^(?![\s.]+$)[a-zA-Z0-9\s.]*$/;
var locationRegex = /[A-Za-z0-9? ,_-]/;

firstname.addEventListener('blur', firstNameValidation);
lastname.addEventListener('blur', lastNameValidation);
dni.addEventListener('blur', dniValidation);
birthdate.addEventListener('blur', birthdateValidation);
phonenumber.addEventListener('blur', phoneValidation);
adress.addEventListener('blur', adressValidation);
location1.addEventListener('blur', locationValidation);
postalcode.addEventListener('blur', postalCodeValidation);
email.addEventListener('blur', emailValidation);
pass.addEventListener('blur', passValidation);
passrepeat.addEventListener('blur', passRepeatValidation);

signup.addEventListener('submit', signupsubmit);


function firstNameValidation(e) {
    e.preventDefault();
    var b = document.getElementById('firstname-div');
    if (e.target.value.match(nameRegex) && e.target.value.length >= 3) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient characters';
    }
}

function lastNameValidation(e) {
    e.preventDefault();
    var b = document.getElementById('lastname-div');
    if (e.target.value.match(nameRegex) && e.target.value.length >= 3) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient characters';
    }
}

function dniValidation(e) {
    e.preventDefault();
    var b = document.getElementById('dni-div');
    if (e.target.value.match(numericRegex) && e.target.value.length > 7) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient characters';
    }
}

function birthdateValidation(e) {
    e.preventDefault();
    var b = document.getElementById('birthday-div');
    if (e.target.value) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid date format';
    }
}

function phoneValidation(e) {
    e.preventDefault();
    var b = document.getElementById('phonenumber-div');
    if (e.target.value.match(numericRegex) && e.target.value.length == 10) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid number of characters';
    }
}

function adressValidation(e) {
    e.preventDefault();
    var b = document.getElementById('adress-div');
    if (e.target.value.match(adressRegex) && e.target.value.length >= 5) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient characters';
    }
}

function locationValidation(e) {
    e.preventDefault();
    var b = document.getElementById('location-div');
    if (e.target.value.match(locationRegex) && e.target.value.length >= 5) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient number of characters';
    }
}

function postalCodeValidation(e) {
    e.preventDefault();
    var b = document.getElementById('postalcode-div');
    if (e.target.value.match(numericRegex) && e.target.value.length >= 4 && e.target.value.length <= 5) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid number of characters';
    }
}

function emailValidation(e) {
    e.preventDefault();
    var b = document.getElementById('email-div');
    if (e.target.value.match(emailRegex)) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid data input';
    }
}

function passValidation(e) {
    e.preventDefault();
    var b = document.getElementById('pass-div');
    if (e.target.value.match(passwordRegex) && e.target.value.length >= 8) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid data input';
    }
}

function passRepeatValidation(e) {
    e.preventDefault();
    var b = document.getElementById('passrepeat-div');
    if (e.target.value === pass.value) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'The passwords do not match';
    }
}

firstname.addEventListener('focus', focusFirstName);

lastname.addEventListener('focus', focusLastName);

dni.addEventListener('focus', focusDni);

birthdate.addEventListener('focus', focusBirthdate);

phonenumber.addEventListener('focus', focusPhone);

adress.addEventListener('focus', focusAdress);

location1.addEventListener('focus', focusLocation);

postalcode.addEventListener('focus', focusPostalCode);

email.addEventListener('focus', focusEmail);

pass.addEventListener('focus', focusPass);

passrepeat.addEventListener('focus', focusPassRepeat);

function focusFirstName() {
    var b = document.getElementById('firstname-div');
    b.textContent = '';
}

function focusLastName() {
    var b = document.getElementById('lastname-div');
    b.textContent = '';
}

function focusDni() {
    var b = document.getElementById('dni-div');
    b.textContent = '';
}

function focusBirthdate() {
    var b = document.getElementById('birthday-div');
    b.textContent = '';
}

function focusPhone() {
    var b = document.getElementById('phonenumber-div');
    b.textContent = '';
}

function focusAdress() {
    var b = document.getElementById('adress-div');
    b.textContent = '';
}

function focusLocation() {
    var b = document.getElementById('location-div');
    b.textContent = '';
}

function focusPostalCode() {
    var b = document.getElementById('postalcode-div');
    b.textContent = '';
}

function focusEmail() {
    var b = document.getElementById('email-div');
    b.textContent = '';
}

function focusPass() {
    var b = document.getElementById('pass-div');
    b.textContent = '';
}

function focusPassRepeat() {
    var b = document.getElementById('passrepeat-div');
    b.textContent = '';
}


function signupsubmit(event) {
    event.preventDefault();
    var form = new FormData(signup);
    var formFirstName = form.get('firstname');
    var formLastName = form.get('lastname');
    var formdni = form.get('dni');
    var formbirthday = form.get('birthdate');
    var formtel = form.get('phonenumber');
    var formadress = form.get('adress');
    var formlocation = form.get('location1');
    var formcp = form.get('postalcode');
    var formEmail = form.get('email');
    var formPassword = form.get('pass');
    var formRepeatPass = form.get('passrepeat');
    console.log(form, !formFirstName);
    console.log(form, formLastName);
    console.log(form, formdni);

    if (formFirstName.match(nameRegex) && formdni.match(numericRegex) && formbirthday && formtel.match(numericRegex) && formadress.match(adressRegex) && formlocation.match(locationRegex) && formcp.match(numericRegex) && formEmail.match(emailRegex) && formPassword.match(passwordRegex) && formRepeatPass === formPassword) {
        window.alert('Full name: ' + formFirstName + ' ' + formLastName + '\n' + 'DNI: ' + formdni + '\n' + 'Birth date: ' + formbirthday + '\n' +
            'Phone number: ' + formtel + '\n' + 'Adress: ' + formadress + '\n' + 'Location: ' + formlocation + '\n' +
            'Postal code: ' + formcp + '\n' + 'Email: ' + formEmail + '\n' + 'Password: ' + formPassword + '\n' +
            'Confirm password: ' + formRepeatPass);
        // } else if (!(formFirstName.match(nameRegex)) && formdni.match(numericRegex) && formbirthday && formtel.match(numericRegex) && formadress.match(adressRegex) && formlocation.match(locationRegex) && formcp.match(numericRegex) && formEmail.match(emailRegex) && formPassword.match(passwordRegex) && formRepeatPass === formPassword) {
        //     window.alert('Full name: ' + formFirstName + ' ' + formLastName + '\n' + 'DNI is wrong' + formdni + '\n' + 'Birth date: ' + formbirthday + '\n' +
        //         'Phone number: ' + formtel + '\n' + 'Adress: ' + formadress + '\n' + 'Location: ' + formlocation + '\n' +
        //         'Postal code: ' + formcp + '\n' + 'Email: ' + formEmail + '\n' + 'Password: ' + formPassword + '\n' +
        //         'Confirmed password: ' + formRepeatPass);
    } else {
        window.alert('One or more inputs are wrong, please try again.');
    }
}
