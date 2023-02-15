"use strict";
// creating classes in typescript
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
