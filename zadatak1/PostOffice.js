import { Queue } from "./Queue.js";

class PostOffice {
    constructor() {
        this.queue = new Queue();
        console.log("Post office created.");

        setInterval(async () => {
            let response = await this.sendMail();
            console.log(response);
        }, 10 * 1000);
    }

    sendMail = () => {
        if (this.queue.isEmpty()) {
            return new Promise(resolve => resolve("Queue is empty."))
        }

        let letter = this.queue.dequeue();

        if (letter.to === letter.from) {
            throw new Error("Letter has identical sender and recipient names.");
        }

        this.sendLetter(letter);
        return new Promise(resolve => resolve("Letter sent."));
    }

    sendLetter(letter) {
        let chance = Math.floor(Math.random * 10);
        if (chance === 1) {
            setTimeout(() => { 
                console.log("Oops. Letter lost.") 
            }, 3000);
        } else {
            setTimeout(()  => {  
                letter.to.letterReceived(letter);
            }, 3000);
        }
    }
}

export { PostOffice };