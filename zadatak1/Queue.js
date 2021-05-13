class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(letter) {
        this.queue.push(letter);
        console.log("Letter enqueued.");
    }

    dequeue(letter) {
        let q = this.queue.shift();

        if (q) {
            return q;
        } else {
            return false; 
        }
    }

    front() {
        let q = this.queue[0];

        if (!q) {
            return false;
        }

        return q;
    }

    isEmpty() {
        if (this.queue.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

export { Queue };