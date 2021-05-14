import { Queue } from "./Queue.js";

class PostOffice {
    constructor() {
        this.letters = new Queue();
        console.log("Post office created.");

        setInterval(async () => {
            try {
                let response = await this.sendLetter();
                console.log(response);
            } catch(error) {
                console.log(error);
            }
        }, 10 * 1000);
    }
    
    sendLetter() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (this.letters.isEmpty()) {
                    return rej("Queue is empty.");
                }
                
                let letter = this.letters.dequeue();
                
                if (letter.to === letter.from) {
                    return rej(new Error("Letter has identical sender and recipient names."));
                }
                
                let chance = Math.floor(Math.random * 10);

                if (chance === 1) {
                    return rej("Oops. Letter lost.");
                }

                letter.to.letterReceived(letter);
                return res("Letter successfully delivered.");
        }, 3000)
        });
    }

    addLetter(letter) {
        this.letters.enqueue(letter);
        console.log("Letter enqueued.");
    }
}

export { PostOffice };