function checkEmpty() {
    if (this.validity.valueMissing === true) {
        emptyErrorGenerator.bind(this)();
        this.reportValidity();
    } else {
        this.setCustomValidity('');
    }
}

export { checkEmpty };