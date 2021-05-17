import { Errors } from "./Errors.js";

class Form {
    constructor(data) {
        this.originalData = data;
        this.errors = new Errors();

        data.forEach((element) => {
            this[element] = "input";
        });
    }   

    data() {
        return this.originalData;
    }

    reset() {
        Object.keys(this).forEach((key) => {
            delete this[key];
        })

        if (this.errors) {
            this.errors.clear();
        }

        console.log("Form reset.");
    }

    submit(requestType, url) {
        return new Promise((res, rej) => {
            setTimeout(async () => {
                let chance = Math.floor(Math.random() * 10);
                
                if (chance < 5) {
                    rej(new Error('Request failed.'));
                }

                res('Request sent.');
            });
        });
    }

    onSuccess(data) {
        alert(data.message);
    }

    onFail(errors) {
        this.errors.record(errors);
    }
}

export { Form };

