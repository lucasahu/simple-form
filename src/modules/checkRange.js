
function checkRange() {
    if (this.validity.tooLong === true) {
        this.setCustomValidity('Password must be under 10 characters long');
        this.reportValidity();
    } else if (this.validity.tooShort === true) {
        this.setCustomValidity('Password must be atleast 4 characters long');
        this.reportValidity();
    }
}

export { checkRange };