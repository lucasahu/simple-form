function emptyErrorGenerator() {
    switch (this) {
        case email:
            this.setCustomValidity('Email address is required!');
            break;
        case country:
            this.setCustomValidity('Country is required!');
            break;
        case zipCode:
            this.setCustomValidity('Zip code is required!');
            break;
        case password:
            this.setCustomValidity('Password is required!');
            break;
        case confirmPassword:
            this.setCustomValidity('Confirming your password is required!');
            break;
    }
}

export { emptyErrorGenerator };
