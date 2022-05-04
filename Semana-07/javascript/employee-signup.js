var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var dni = document.getElementById('dni');
var birthdate = document.getElementById('birthdate');
var phoneNumber = document.getElementById('phonenumber');
var adress = document.getElementById('adress');
var location1 = document.getElementById('location');
var postalCode = document.getElementById('postalcode');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var passRepeat = document.getElementById('passrepeat');
var signup = document.getElementById('signup-button');

var invalidChars = ['-', '+', 'e', '.']

firstName.addEventListener('blur', firstNameValidation);
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

// FIRST NAME VALIDATION

function validateName(name) {
    var advert = true;
    var i = 0;
    if (name.length > 3) {
        while (i < name.length && advert === true) {
            if (!isNaN(name[i])) {
                advert = false;
            }
            i++;
        }
    } else {
        advert = false;
    }
    return advert;
}

function firstNameValidation(e) {
    var b = document.getElementById('firstname-div');
    if (validateName(firstName.value)) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient characters';
    }
}

// LAST NAME VALIDATION

function lastNameValidation(e) {
    var b = document.getElementById('lastname-div');
    if (validateName(lastName.value)) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient characters';
    }
}

// DNI VALIDATION
function validateDni() {
    var advert = true;
    var i = 0
    if (dni.value.length > 7) {
        while (i < dni.value.length && advert === true) {
            if (isNaN(dni.value[i])) {
                advert = false;
            }
            i++;
        }
    } else {
        advert = false;
    }
    return advert;
}

dni.addEventListener('keydown', function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
})

function dniValidation(e) {
    e.preventDefault();
    var b = document.getElementById('dni-div');
    if (validateDni()) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient characters';
    }
}


//BIRTHDATE VALIDATION

function validateBirthdate() {
    var bdayValidate = birthdate.value;
    var day = bdayValidate.substring(3, 5);
    var month = bdayValidate.substring(0, 2);
    var year = bdayValidate.substring(6, 10);

    if (bdayValidate.length !== 10 || bdayValidate.substring(2, 3) !== '/' || bdayValidate.substring(5, 6) !== '/'
        || day <= 00 || day > 31 || month <= 00 || month > 12 || year <= 1910 || year > 2004) {
        return false;
    }
    else {
        return true;
    }
}

birthdate.addEventListener('keydown', function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
})

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 'ñ', "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

birthdate.addEventListener('keydown', function (e) {
    if (letters.includes(e.key)) {
        e.preventDefault();
    }
})

function birthdateValidation(e) {
    e.preventDefault();
    var b = document.getElementById('birthdate-div');
    if (validateBirthdate()) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else if (!validateBirthdate()) {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid date format';
    }
}


//PHONE VALIDATION
function validatePhone() {
    var advert = true;
    var i = 0
    if (phoneNumber.value.length === 10) {
        while (i < phoneNumber.value.length && advert === true) {
            if (isNaN(phoneNumber.value[i])) {
                advert = false;
            }
            i++;
        }
    } else {
        advert = false;
    }
    return advert;
}

phoneNumber.addEventListener('keydown', function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
})

function phoneValidation(e) {
    e.preventDefault();
    var b = document.getElementById('phonenumber-div');
    if (validatePhone()) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid number of characters';
    }
}


//ADRESS VALIDATION

function validateAdress() {
    indexSpace = adress.value.lastIndexOf(" ");
    if (adress.value.length > 4) {
        if (indexSpace > 0) {
            if (isNaN(adress.value.slice(indexSpace))) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

function adressValidation(e) {
    var b = document.getElementById('adress-div');
    if (!validateAdress()) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient characters';
    }
}

//LOCATION VALIDATION

function validateLocation() {
    if (location1.value.length > 3) {
        return true;
    } else {
        return false;
    }
}

function locationValidation(e) {
    e.preventDefault();
    var b = document.getElementById('location-div');
    if (validateLocation()) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Insufficient number of characters';
    }
}

//POSTAL CODE VALIDATION

function validatePostalCode() {
    var advert = true;
    var i = 0

    if (postalCode.value.length >= 4 && postalCode.value.length <= 5) {
        while (i < postalCode.value.length && advert === true) {
            if (isNaN(postalCode.value[i])) {
                advert = false;
            }
            i++;
        }
    } else {
        advert = false;
    }
    return advert;
}

postalCode.addEventListener('keydown', function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
})

function postalCodeValidation(e) {
    e.preventDefault();
    var b = document.getElementById('postalcode-div');
    if (validatePostalCode()) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
        return true;
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid number of characters';
        return false;
    }
}


//EMAIL VALIDATION

function validateEmail() {
    var mailFormat = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,3}/;
    if (mailFormat.test(email.value)) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(e) {
    e.preventDefault();
    var b = document.getElementById('email-div');
    if (validateEmail()) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid data input';
    }
}

//PASSWORD AND REPEAT PASSWORD VALIDATION

function validatePassword(pass) {
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

function passValidation(e) {
    e.preventDefault();
    var b = document.getElementById('pass-div');
    if (validatePassword(pass.value)) {
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
    if (validatePassword(passRepeat.value)) {
        e.target.style.borderColor = '#0F0';
        b.textContent = '';
    } else if (passRepeat.value !== pass.value) {
        e.target.style.borderColor = '#F00';
        b.textContent = 'The passwords do not match';
    } else {
        e.target.style.borderColor = '#F00';
        b.textContent = 'Invalid data input';
    }
}

firstName.addEventListener('focus', focusFirstName);

function focusFirstName() {
    var b = document.getElementById('firstname-div');
    b.textContent = '';
}

lastName.addEventListener('focus', focusLastName);

function focusLastName() {
    var b = document.getElementById('lastname-div');
    b.textContent = '';
}

dni.addEventListener('focus', focusDni);

function focusDni() {
    var b = document.getElementById('dni-div');
    b.textContent = '';
}

birthdate.addEventListener('focus', focusBirthdate);

function focusBirthdate() {
    var b = document.getElementById('birthdate-div');
    b.textContent = '';
}

phoneNumber.addEventListener('focus', focusPhone);

function focusPhone() {
    var b = document.getElementById('phonenumber-div');
    b.textContent = '';
}

adress.addEventListener('focus', focusAdress);

function focusAdress() {
    var b = document.getElementById('adress-div');
    b.textContent = '';
}

location1.addEventListener('focus', focusLocation);

function focusLocation() {
    var b = document.getElementById('location-div');
    b.textContent = '';
}

postalCode.addEventListener('focus', focusPostalCode);

function focusPostalCode() {
    var b = document.getElementById('postalcode-div');
    b.textContent = '';
}

email.addEventListener('focus', focusEmail);

function focusEmail() {
    var b = document.getElementById('email-div');
    b.textContent = '';
}

pass.addEventListener('focus', focusPass);

function focusPass() {
    var b = document.getElementById('pass-div');
    b.textContent = '';
}
passRepeat.addEventListener('focus', focusPassRepeat);

function focusPassRepeat() {
    var b = document.getElementById('passrepeat-div');
    b.textContent = '';
}

//ALL VALIDATION

function validateAll() {
    return (validateName(firstName.value) &&
        validateName(lastName.value) &&
        validateDni() && validateBirthdate() &&
        validatePhone() && validateAdress() &&
        validateLocation() && validatePostalCode() &&
        validateEmail() &&
        validatePassword(pass.value) &&
        validatePassword(passRepeat.value) &&
        (passRepeat.value === pass.value))
}

// SIGNUP EVENT

signup.addEventListener('click', signUpSubmit);

function signUpSubmit(e) {
    e.preventDefault();
    var url = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${firstName.value}
&lastName=${lastName.value}&dni=${dni.value}&dob=${birthdate.value}&phone=${phoneNumber.value}
&address=${adress.value}&city=${location1.value}&zip=${postalCode.value}&email=${email.value}
&password=${pass.value}`
    if (!validateName(firstName.value)) {
        alert(firstName.value + ": Incorrect first name format");
    } else if (!validateName(lastName.value)) {
        alert(lastName.value + ": Incorrect last name format");
    } else if (!validateDni()) {
        alert(dni.value + ": Incorrect DNI format");
    } else if (!validateBirthdate()) {
        alert(birthdate.value + ": Incorrect birthdate format");
    } else if (!validatePhone()) {
        alert(phoneNumber.value + ": Incorrect phone number format");
    } else if (validateAdress()) {
        alert(adress.value + ": Incorrect adress format");
    } else if (!validateLocation()) {
        alert(location1.value + ': Incorrect location format');
    } else if (!validatePostalCode()) {
        alert(postalCode.value + ': Incorrect postal code format');
    } else if (!validateEmail()) {
        alert(email.value + ": Email incorrect");
    } else if (!validatePassword(pass.value)) {
        alert(pass.value + ": Password incorrect");
    } else if (!validatePassword(passRepeat.value)) {
        alert(passRepeat.value + ": Repeated password incorrect");
    } else if (passRepeat.value !== pass.value) {
        alert(pass.value + ": The passwords do not match");
    } else {
        fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then((response) => {
                if (response.success) {
                    console.log("Entra", response.msg);
                    alert(`${response.msg}
              Employee ID: ${response.data.id}
              First Name: ${response.data.name}
              Last Name: ${response.data.lastName}
              DNI: ${response.data.dni}
              Birthdate: ${response.data.dob}
              Phone Number: ${response.data.phone}
              Adress: ${response.data.address}
              Location: ${response.data.city}
              Postal Code: ${response.data.zip}
              Email: ${response.data.email}
              Password: ${response.data.password}`);
                    setLocalStorage();
                }
                else {
                    console.log("It access, and then error", response);
                    alert(response.errors[0].msg);
                }
            })
            .catch((err) => {
                console.log("Catch error");
                alert(err);
            })
    }
}

//LOCAL STORAGE

if (localStorage.length > 0) {
    setAttributesStorage();
}

function setLocalStorage() {
    localStorage.setItem('name', firstName.value)
    localStorage.setItem('lastName', lastName.value)
    localStorage.setItem('dni', dni.value)
    localStorage.setItem('birthdate', birthdate.value)
    localStorage.setItem('phone', phoneNumber.value)
    localStorage.setItem('adress', adress.value)
    localStorage.setItem('location', location1.value)
    localStorage.setItem('postalcode', postalCode.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('password', pass.value)
    localStorage.setItem('passwordrepeat', pass.value)
}

function setAttributesStorage() {
    firstName.setAttribute('value', localStorage.getItem('name'));
    lastName.setAttribute('value', localStorage.getItem('lastName'));
    dni.setAttribute('value', localStorage.getItem('dni'));
    birthdate.setAttribute('value', localStorage.getItem('birthdate'));
    phoneNumber.setAttribute('value', localStorage.getItem('phone'));
    adress.setAttribute('value', localStorage.getItem('adress'));
    location1.setAttribute('value', localStorage.getItem('location'));
    postalCode.setAttribute('value', localStorage.getItem('postalcode'));
    email.setAttribute('value', localStorage.getItem('email'));
    pass.setAttribute('value', localStorage.getItem('password'));
    passRepeat.setAttribute('value', localStorage.getItem('passwordrepeat'));
}
