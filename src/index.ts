// creating classes in typescript

// private, public, protected - access modifiers

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

//Getters and Setters

class Student {

    private courseCount: number = 1 //private - can only be accessed within the class

    protected courseList: string[] = ["React"] //protected - can be accessed within the class and the child class

    constructor(
       public name: string,
       public email: string,
       public  age: number
    ){}

    get makeEmailSchoolEmail(): string{
        return `techacademy${this.email}`
    } // getter method -use get keyword

    get getCourseCount(): number {
        return this.courseCount
    }

    //setter - A 'set' accessor cannot have a return type annotation.
    set setCourseCount(courseNum: number){
        this.courseCount = courseNum
    }

    //private method

    private deleteStudent(){
        console.log("Student has been deleted")
    }
}

const karen = new Student ("Karen","karen@gmail.com",15)

karen.email = karen.makeEmailSchoolEmail

karen.setCourseCount = 5

//karen.deleteStudent //error - private and only accessible within class 'Student' 


console.log(karen)
console.log('karen courseCount',karen.getCourseCount)

//Inheritance

class SubStudent extends Student { //extends keyword is used to inherit from another class
    isFastLearner: boolean = true
    changeCourseList(){
        //this.courseCount = 3 // error - private and only accessible within class 'Student'
        this.courseList = ["React", "Angular", "Vue"] // works - protected and accessible within the class and the child class
    }
}

const matt = new SubStudent("Matt","matt@gmail.com", 20)

matt.changeCourseList()

console.log(matt)





