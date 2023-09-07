
function emptyErrorGenerator() {
    switch (this) {
        case this.id === 'email':
            this.setCustomValidity('Email address is required!');
            break;
        case this.id === 'country':
            this.setCustomValidity('Country is required!');
            break;
        case this.id === 'zip-code':
            this.setCustomValidity('Zip code is required!');
            break;
        case this.id === 'password':
            this.setCustomValidity('Password is required!');
            break;
        case this.id === 'confirm-password':
            this.setCustomValidity('Confirming your password is required!');
            break;
    }
}

export { emptyErrorGenerator };
