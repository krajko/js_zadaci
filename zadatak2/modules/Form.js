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
            this[key] = null;
        })

        if (this.errors) {
            this.errors.clear();
        }

        console.log("Form reset.");
    }

    submit(requestType, url) {
        return new Promise((res, rej) => {
            setTimeout(async () => {
                
                if (requestType.toUpperCase() === 'GET') {
                    res(this.data());
                }
                
                if (requestType.toUpperCase() === 'POST') {

                    Object.keys(url.data).forEach((key) => {
                        if (key = "message") {
                            return;
                        }
                        
                        if (!this[key]) {
                            rej(`Bad POST request. (${key} does not exist.)`);
                        }
                    });

                    let chance = Math.floor(Math.random() * 2);
                    if (chance === 1) {
                        
                        let rand = Math.floor(Math.random() * this.data().length);

                        let formErrors = {};
                        formErrors[this.data()[rand]] = `${this.data()[rand]} is invalid.`;
                        
                        const errors = new Errors();
                        errors.record(formErrors);
                        
                        rej(errors);
                    }

                    res("resolved");
                }

                rej(new Error("Request type not POST or GET."));
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

