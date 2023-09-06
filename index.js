const form = document.getElementById('form-element');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');

function emptyError() {
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

function typeError() {
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
        emptyError.bind(this)();
        this.reportValidity();
    } else {
        this.setCustomValidity('');
    }
}

function checkType() {
    if (this.validity.typeMismatch === true) {
        typeError.bind(this)();
        this.reportValidity();
    }
}

function range() {
    if (this.validity.tooLong === true) {
        this.setCustomValidity('Password must be under 10 characters long');
        this.reportValidity();
    } else if (this.validity.tooShort === true) {
        this.setCustomValidity('Password must be atleast 4 characters long');
        this.reportValidity();
    }
}

function maxValue() {
    if (this.validity.rangeOverflow === true) {
        this.setCustomValidity('Enter a valid zip code');
        this.reportValidity();
    }
}

function validator() {
    checkEmpty.bind(this)();
    checkType.bind(this)();
    range.bind(this)();
    maxValue.bind(this)();
}

function validateAll() {
    checkEmpty.bind(confirmPassword)();
    checkType.bind(confirmPassword)();
    checkEmpty.bind(password)();
    checkType.bind(password)();
    checkEmpty.bind(zipCode)();
    checkType.bind(zipCode)();
    maxValue.bind(zipCode)();
    checkEmpty.bind(country)();
    checkType.bind(country)();
    checkEmpty.bind(email)();
    checkType.bind(email)();
}

function finalCheck() {
    validateAll();
}

//Have to figure out an event that fits best for the intended effect

email.addEventListener('input', validator);
country.addEventListener('input', validator);
zipCode.addEventListener('input', validator);
password.addEventListener('input', validator);
confirmPassword.addEventListener('input', validator);

submitButton.addEventListener('click', finalCheck);