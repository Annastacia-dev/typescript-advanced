// creating classes in typescript

class User {
    // with a default value
    name: string = 'John Doe';  //initializing the property - default public
    // without a default value
    public age: number;
    // optional property
    email?: string;
    //readonly property
    readonly city: string = 'New York';
    // private property - can only be accessed within the class
    private phone: string = '1234567890'; //alternate syntax - #phone: string = '1234567890';
    
    constructor(age: number, email?: string) {
        this.age = age;
        this.email = email;
        this.phone
        // this.phone = 2345678901; //to access within the class
    }
}

const user = new User(30,"anne@dev.to") // this is an instance of the class

user.name = "Anne";

//user.phone //error- private and can only be accessed within the class



console.log(user);

// Alternate class syntax

class User2 {

    constructor(
        public name: string,
        public age: number,
        public email?: string,
        private phone: string = '1234567890',
        readonly city: string = 'New York'
    ) {}

}

const user2 = new User2("Jane Smith", 30);

user2.email = 'jane@gmail.com'

console.log(user2);



