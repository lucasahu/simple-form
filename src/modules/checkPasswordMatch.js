
function checkPasswordMatch() {
    if (this.value !== password.value) {
        this.setCustomValidity('Passwords must match!');
        this.reportValidity();
    }
}

export { checkPasswordMatch };