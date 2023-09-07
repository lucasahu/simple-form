
function checkValue() {
    if (this.validity.rangeOverflow === true) {
        this.setCustomValidity('Enter a valid zip code');
        this.reportValidity();
    }
}

export { checkValue };