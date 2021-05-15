import { Form } from "./modules/Form.js";

// const errors = new Errors();

// const testErrors = {
//     field1: {
//         message: "message1"
//     },
//     field2: {
//         message:"message2"
//     },
//     field3: {
//         message: "message2"
//     }
// }

// errors.record(testErrors);
// console.log(errors.errors);

// console.log(errors.has("field1"));
// console.log(errors.has("field2"));

// console.log(errors.get("field1"));

const data = ["firstName", "lastName", "email"];

const form = new Form(data);

// console.log(form.data());    

// form.onSuccess(data);

// form.onFail(testErrors);

// // console.log(form.errors);

// console.log(form.errors.has('field1'));
// console.log(form.errors.get('field1'));

// console.log(form.errors.clear('field1'));
// console.log(form.errors.has('field1'));

// form.errors.clear();
// console.log(form.errors.any());

// form.reset();
// console.log(form);

const url = {
    location: 'www.url.com',
    data: {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@doe.com",
        message: "Form submitted."
    }
};

const getRequest = 'get';
const postRequest = 'post';

const trySubmit = async (requestType, url) => {
    try {
        let response = await form.submit(requestType, url); 
        // console.log(response);

        if (response === "Sent.") {
            form.onSuccess(url.data);
        }
        return response;
        
    } catch(error) {
        console.log(error);
    }
}

const getForm = trySubmit(getRequest, url);
console.log(getForm);

const postForm = trySubmit(postRequest, url);
console.log(postForm);