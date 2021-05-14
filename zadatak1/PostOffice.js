import { Queue } from "./Queue.js";

class PostOffice {
    constructor() {
        this.letters = new Queue();
        console.log("Post office created.");

        setInterval(async () => {
            try {
                let response = await this.sendLetter();
                console.log(response);
            } catch(err) {
                console.log(err);
            }
        }, 10 * 1000);
    }
    
    sendLetter() {
        if (this.letters.isEmpty()) {
            return new Promise(resolve => resolve("Queue is empty."))
        }
        
        let letter = this.letters.dequeue();
        
        if (letter.to === letter.from) {
            throw new Error("Letter has identical sender and recipient names.");
        }
        
        let chance = Math.floor(Math.random * 10);
        
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (chance === 1) {
                    return rej("Oops. Letter lost.");
                } else {
                    letter.to.letterReceived(letter);
                    return res("Letter successfully delivered.");
                }
        }, 3000)
        });
    }

    addLetter(letter) {
        this.letters.enqueue(letter);
        console.log("Letter enqueued.");
    }
}

export { PostOffice };