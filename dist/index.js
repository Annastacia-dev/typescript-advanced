"use strict";
// creating classes in typescript
// private, public, protected - access modifiers
class User {
    constructor(age, email) {
        // with a default value
        this.name = 'John Doe'; //initializing the property - default public
        //readonly property
        this.city = 'New York';
        // private property - can only be accessed within the class
        this.phone = '1234567890'; //alternate syntax - #phone: string = '1234567890';
        this.age = age;
        this.email = email;
        this.phone;
        // this.phone = 2345678901; //to access within the class
    }
}
const user = new User(30, "anne@dev.to"); // this is an instance of the class
user.name = "Anne";
//user.phone //error- private and can only be accessed within the class
console.log(user);
// Alternate class syntax
class User2 {
    constructor(name, age, email, phone = '1234567890', city = 'New York') {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }
}
const user2 = new User2("Jane Smith", 30);
user2.email = 'jane@gmail.com';
console.log(user2);
//Getters and Setters
class Student {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.courseCount = 1; //private - can only be accessed within the class
        this.courseList = ["React"]; //protected - can be accessed within the class and the child class
    }
    get makeEmailSchoolEmail() {
        return `techacademy${this.email}`;
    } // getter method -use get keyword
    get getCourseCount() {
        return this.courseCount;
    }
    //setter - A 'set' accessor cannot have a return type annotation.
    set setCourseCount(courseNum) {
        this.courseCount = courseNum;
    }
    //private method
    deleteStudent() {
        console.log("Student has been deleted");
    }
}
const karen = new Student("Karen", "karen@gmail.com", 15);
karen.email = karen.makeEmailSchoolEmail;
karen.setCourseCount = 5;
//karen.deleteStudent //error - private and only accessible within class 'Student' 
console.log(karen);
console.log('karen courseCount', karen.getCourseCount);
//Inheritance
class SubStudent extends Student {
    constructor() {
        super(...arguments);
        this.isFastLearner = true;
    }
    changeCourseList() {
        //this.courseCount = 3 // error - private and only accessible within class 'Student'
        this.courseList = ["React", "Angular", "Vue"]; // works - protected and accessible within the class and the child class
    }
}
const matt = new SubStudent("Matt", "matt@gmail.com", 20);
matt.changeCourseList();
console.log(matt);
