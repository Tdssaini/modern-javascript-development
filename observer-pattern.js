class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}

// Observer
class Observer {
    constructor(name) {
        this.name = name;
    }

    update() {
        console.log(`${this.name} received an update.`);
    }
}

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

const subject = new Subject();
subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers();