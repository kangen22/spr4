
class Book {
    constructor(_title, _author) {
        this._title = _title; // changed from public to protected
        this._author = _author; // protected
    }
    getDescription() { // абстрактний метод (заглушка)
        throw new Error("You must implement the method getDescription()")
    }
    getAuthor() {
        return `${this._author} is author`
    }
}

class FictionBook extends Book {
    #plot; // private
    constructor(title, author,plot) {
        super(title, author); // посилання на батьківський клас
        this.#plot = plot; // private
    }
    getDescription() { // поліморфізм
        return `Fiction: "${this._title}" by ${this._author}. Plot: ${this.#plot}`;
    }
}

class ScienceBook extends Book {
    #topic;
    constructor(title, author, topic) {
        super(title, author); // посилання на батьківський клас
        this.#topic = topic; // private
    }
    getDescription() { // поліморфізм
        return `Science: "${this._title}" by ${this._author}. Topic: ${this.#topic}`
    }
}

let main = () => {
    const books = [
        new FictionBook("The Lord of the Rings", "JRR Tolkien", "About how kill orks"),
        new FictionBook("Harry Potter", "J.K. Rowling", "About Harry Potter magic journey"),
        new ScienceBook("Grokking algoritms", "Aditya Bhargava", "Best book about algorithm"),
        new ScienceBook("Node.js: Novice to Ninja", "Craig Buckler", "The phenomenal Craig Buckler has created a masterclass of practical, fun, and approachable Node.js lessons")
    ]
    for (const bookKey in books) {
        console.log(books[bookKey].getDescription());
        console.log(books[bookKey].getAuthor());
    }
}

main();