const form = document.getElementById('form-element');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');

function checkEmpty() {
    console.log(this);
    if (this.validity.valueMissing === true) {
        this.setCustomValidity('');
        this.setCustomValidity(`${this.id} is required`);
        this.reportValidity();
    }
}

//Type check is not finished (email formatting error)

function checkType() {
    console.log(this);
    if (this.validity.typeMismatch === true) {
        this.setCustomValidity('');
        this.setCustomValidity(`${this.id} is not valid`);
        this.reportValidity();
    }
}

//This has to be added to zipcode, password and confirmPassword

function range() {
    //this.validity.rangeOverflow && this.validity.rangesomething
}

function validator() {
    checkEmpty.bind(this)();
    checkType.bind(this)();
    range.bind(this)();
}

//Have to figure out an event that fits best for the intended effect

email.addEventListener('input', validator);
country.addEventListener('input', validator);
zipCode.addEventListener('input', validator);
password.addEventListener('input', validator);
confirmPassword.addEventListener('input', validator);