
function successTest() {
    if (email.validity.valid && country.validity.valid && zipCode.validity.valid && password.validity.valid && confirmPassword.value === password.value) {
        console.log('success');
    }
}

export { successTest };