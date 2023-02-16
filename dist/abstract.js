"use strict";
// abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.
// They act as a blueprint for other classes to extend. Abstract classes are often used to provide a common definition of an object that multiple extensions of the abstract class can share.
// Abstract classes may not be instantiated directly. They can only be used as a base class for other classes that extend the abstract class. Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.
class Movie {
    constructor(title, year, rating) {
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
    getMovieLength() {
        return 120;
    }
}
//const movie = new Movie('The Hangover', 2009, 8.2); //error: Cannot create an instance of an abstract class.
class Comedy extends Movie {
    constructor(title, year, rating) {
        super(title, year, rating);
        this.title = title;
        this.year = year;
        this.rating = rating;
    }
    play() {
        return 'Playing comedy movie';
    }
    //methods in abstract class can be overriden
    getMovieLength() {
        return 100;
    }
} //extends keyword is used to inherit from another class
const movie = new Comedy('The Hangover', 2009, 8.2);
console.log(movie);
console.log(movie.play());
console.log(movie.getMovieLength());
