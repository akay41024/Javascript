class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const coffee = new Teacher("coffee", "chai@teacher.com", "123")

coffee.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(coffee instanceof User);
console.log(coffee instanceof Teacher);