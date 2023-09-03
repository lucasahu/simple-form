const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');

function checkEmpty () {
    if (email.validity.valueMissing) {
        email.setCustomValidity('Email address is required!');
    } else {
        email.setCustomValidity('');
    }

    if (country.validity.valueMissing) {
        country.setCustomValidity('Country is required!');
    } else {
        country.setCustomValidity('');
    }

    if (zipCode.validity.valueMissing) {
        zipCode.setCustomValidity('Zip code is required!');
    } else {
        zipCode.setCustomValidity('');
    }

    if (password.validity.valueMissing) {
        password.setCustomValidity('Password is required');
    } else {
        password.setCustomValidity('');
    }

    if (confirmPassword.validity.valueMissing) {
        confirmPassword.setCustomValidity('Password is required');
    } else {
        confirmPassword.setCustomValidity('');
    }
}