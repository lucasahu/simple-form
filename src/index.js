import { checkEmpty } from "./modules/checkEmpty";
import { checkPasswordMatch } from "./modules/checkPasswordMatch";
import { checkRange } from "./modules/checkRange";
import { checkType } from "./modules/checkType";
import { checkValue } from "./modules/checkValue";
import { successPrompt } from "./components/successPrompt";
import { foreground } from "./components/foreground";

import "./style.css";

const form = document.getElementById('form-element');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');

function reloadPage() {
    location.reload();
}

function successTest() {
    if (email.validity.valid && country.validity.valid && zipCode.validity.valid && password.validity.valid && confirmPassword.value === password.value) {
        const body = document.querySelector('body');
        body.appendChild(foreground);
        foreground.appendChild(successPrompt);
        const successBtn = document.querySelector('.success-button');
        successBtn.addEventListener('click', reloadPage);
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
}

function finalCheck() {
    validateAll();
}

email.addEventListener('input', validator);
country.addEventListener('input', validator);
zipCode.addEventListener('input', validator);
password.addEventListener('input', validator);
confirmPassword.addEventListener('input', validator);
confirmPassword.addEventListener('input', checkPasswordMatch);
submitButton.addEventListener('click', finalCheck);
submitButton.addEventListener('click', successTest);