class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        let item = this.front();
        this.items.shift();

        return item;
    }

    front() {
        let item = this.items[0];

        if (!item) {
            return false;
        }

        return item;
    }

    isEmpty() {
        return !this.items.length;
    }
}

export { Queue };