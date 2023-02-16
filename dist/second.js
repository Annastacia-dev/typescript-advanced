"use strict";
// Interfaces
class ChildrenBook {
    constructor(title, // all properties in the interface must be defined in the class
    author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    createBookFilm() {
        return (`Creating a book film for ${this.title}...`);
    }
}
class AdultBook {
    constructor(title, author, pages, price //additional property
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.price = price;
    }
}
const book1 = new ChildrenBook("Harry Potter", "JK Rowling", 300);
console.log(book1.createBookFilm());
console.log(book1);
const book2 = new AdultBook("The Alchemist", "Paulo Coelho", 200, 10);
console.log(book2);
