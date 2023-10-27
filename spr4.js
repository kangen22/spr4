
class Book {
    constructor(title, _author) {
        this.title = title; // public
        this._author = _author; // protected
    }
    getDescription() { // абстрактний метод (заглушка)
        throw new Error("You must implement the method getDescription()")
    }
}

class FictionBook extends Book {
    #plot; // private
    constructor(title, _author,plot) {
        super(title, _author); // посилання на батьківський клас
        this.#plot = plot; // private
    }
    getDescription() { // поліморфізм
        return `Fiction: "${this.title}" by ${this._author}. Plot: ${this.#plot}`;
    }
    getAuthor() {
        return `${this._author} is author`
    }

}

class ScienceBook extends Book {
    #topic;
    constructor(title,_author, topic) {
        super(title, _author); // посилання на батьківський клас
        this.#topic = topic; // private
    }
    getDescription() { // поліморфізм
        return `Science: "${this.title}" by ${this._author}. Topic: ${this.#topic}`
    }
    getAuthor() {
        return `${this._author} is author`
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