class Errors {
    constructor() {
        this.errors = [];
    }

    has(field) {
        return !!this.errors[field];
    }

    any() {
        return !!this.errors.length;
    }

    get(field) {
        return this.errors[field];
    }

    record(errors) {
        this.errors = this.errors.concat(errors);
    }

    clear(field = null) {
        if (field) {
            delete this.errors[field];
            console.log(`Errors for ${field} cleared.`);
        } else {
            this.errors = [];
            console.log("All errors cleared (Field not specified).");
        }
    }
}

export { Errors };