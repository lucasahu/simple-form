import { checkEmpty } from "./modules/checkEmpty"
import { checkPasswordMatch } from "./modules/checkPasswordMatch"
import { checkRange } from "./modules/checkRange"
import { checkType } from "./modules/checkType"
import { checkValue } from "./modules/checkValue"
import { emptyErrorGenerator } from "./modules/emptyErrorGenerator"
import { typeErrorGenerator } from "./modules/typeErrorGenerator"
import { successTest } from "./modules/successTest"
import { successPromt } from "./components/successPromt"


const form = document.getElementById('form-element');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const submitButton = document.getElementById('submit-button');

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

//Have to figure out how to arrange validation functions into modules and make it work.

email.addEventListener('input', validator);
country.addEventListener('input', validator);
zipCode.addEventListener('input', validator);
password.addEventListener('input', validator);
confirmPassword.addEventListener('input', validator);
confirmPassword.addEventListener('input', checkPasswordMatch);
submitButton.addEventListener('click', finalCheck);
submitButton.addEventListener('click', successTest);