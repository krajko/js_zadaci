class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.inbox = [];

        console.log("Customer created.");
    }

    letterReceived (letter) {
        this.inbox.push(letter);
        console.log(`You've got mail! (${this.firstName} ${this.lastName})`);
        console.log(letter.from, letter.content);
    }
}

export { Customer };