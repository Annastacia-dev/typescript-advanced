// Interfaces

interface Book {
    title: string;
    author: string;
    pages: number;
} //interface - defines the structure of an object

interface BookFilm {
    createBookFilm(): string;
}

class ChildrenBook implements Book { // implements - implements the interface
    constructor(
        public title: string, // all properties in the interface must be defined in the class
        public author: string,
        public pages: number,
    ){}

    createBookFilm() {
        return (`Creating a book film for ${this.title}...`)
    }
}

class AdultBook implements Book {
    constructor(
        public title: string,
        public author: string,
        public pages: number,
        public price: number //additional property
    ){}
}

const book1 = new ChildrenBook("Harry Potter", "JK Rowling", 300);

console.log(book1.createBookFilm());

console.log(book1)

const book2 = new AdultBook("The Alchemist", "Paulo Coelho", 200, 10);


console.log(book2)