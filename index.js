const form = document.getElementById('form-element');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');

function emptyErrorGenerator() {
    switch (this) {
        case email:
            this.setCustomValidity('Email address is required!');
            break;
        case country:
            this.setCustomValidity('Country is required!');
            break;
        case zipCode:
            this.setCustomValidity('Zip code is required!');
            break;
        case password:
            this.setCustomValidity('Password is required!');
            break;
        case confirmPassword:
            this.setCustomValidity('Confirming your password is required!');
            break;
    }
}

function typeErrorGenerator() {
    switch (this) {
        case email:
            this.setCustomValidity('Please enter a valid email address!');
            break;
        case country:
            this.setCustomValidity('Please enter a valid country!');
            break;
        case zipCode:
            this.setCustomValidity('Please enter a valid zip code!');
            break;
        case password:
            this.setCustomValidity('Please enter a valid password!');
            break;
        case confirmPassword:
            this.setCustomValidity('Please enter a valid password match!');
            break;
    }
}


function checkEmpty() {
    if (this.validity.valueMissing === true) {
        emptyErrorGenerator.bind(this)();
        this.reportValidity();
    } else {
        this.setCustomValidity('');
    }
}

function checkType() {
    if (this.validity.typeMismatch === true) {
        typeErrorGenerator.bind(this)();
        this.reportValidity();
    }
}

function checkRange() {
    if (this.validity.tooLong === true) {
        this.setCustomValidity('Password must be under 10 characters long');
        this.reportValidity();
    } else if (this.validity.tooShort === true) {
        this.setCustomValidity('Password must be atleast 4 characters long');
        this.reportValidity();
    }
}

function checkValue() {
    if (this.validity.rangeOverflow === true) {
        this.setCustomValidity('Enter a valid zip code');
        this.reportValidity();
    }
}

function checkPasswordMatch() {
    if (this.value !== password.value) {
        this.setCustomValidity('Passwords must match!');
        this.reportValidity();
    }
}

function successTest() {
    if (email.validity.valid && country.validity.valid && zipCode.validity.valid && password.validity.valid && confirmPassword.value === password.value) {
        console.log('success');
    }
}

function validator() {
    checkEmpty.bind(this)();
    checkType.bind(this)();
    checkRange.bind(this)();
    checkValue.bind(this)();
}

function validateAll() {
    checkEmpty.bind(confirmPassword)();
    checkType.bind(confirmPassword)();
    checkEmpty.bind(password)();
    checkType.bind(password)();
    checkEmpty.bind(zipCode)();
    checkType.bind(zipCode)();
    checkValue.bind(zipCode)();
    checkEmpty.bind(country)();
    checkType.bind(country)();
    checkEmpty.bind(email)();
    checkType.bind(email)();
    successCheck();
}

function finalCheck() {
    validateAll();
}

//Have to figure out how to arrange validation functions into modules and make it work.

email.addEventListener('input', validator);
country.addEventListener('input', validator);
zipCode.addEventListener('input', validator);
password.addEventListener('input', validator);
confirmPassword.addEventListener('input', validator);
confirmPassword.addEventListener('input', checkPasswordMatch);
submitButton.addEventListener('click', finalCheck);