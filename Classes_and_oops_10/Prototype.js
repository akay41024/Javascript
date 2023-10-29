// const myName = "Aasif     "
// const myChannel = "Behind the seen"

// console.log(myName.trueLength);


let myHero = ["Thor", "Ironman"]

let heroPower = {
    thor: "Hammer",
    ironman: "Brain",

    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
    }
}

Object.prototype.aasif = function(){
    console.log("Aasif is present in all Object"); //add prototype in object so that any one can who belong to object access the aasif method 
}

Array.prototype.heyaasif = function(){
    console.log("Aasif say hello");
}

heroPower.aasif()
myHero.aasif()

// heroPower.heyaasif()  // we can't access the array define property in object


//Inheritance

const User = {
    name: "Aasif",
    emial: "ak@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeacherSupport, Teacher)


let anotherUsername = "Hello user       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"Aasif    ".trueLength()
"Khan ".trueLength()