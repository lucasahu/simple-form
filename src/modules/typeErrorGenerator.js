
function typeErrorGenerator() {
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

export { typeErrorGenerator };