import { typeErrorGenerator } from "./typeErrorGenerator"

function checkType() {
    if (this.validity.typeMismatch === true) {
        typeErrorGenerator.bind(this)();
        this.reportValidity();
    }
}

export { checkType };