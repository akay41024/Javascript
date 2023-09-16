// const instaUser = new Object() //single ton object 

const instaUser = {}

instaUser.id = 1,
instaUser.email = "a@gmail.com",
instaUser.name = "Aasif",
instaUser.isLoggedIn = false

// console.log(instaUser)

const  regularUser = {
    email: "abc@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Aasif",
            lastname: "Khan"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); // this is for extra protection if fullname is not exist
console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)  //this is first way to merge to or more objects 
// console.log(obj3);

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "hd@gmail.com",
    },
    {
        id: 1,
        email: "hd@gmail.com",
    },
    {
        id: 1,
        email: "hd@gmail.com",
    },
]

// console.log(users[1].email);
// console.log(instaUser);

// console.log(Object.keys(instaUser)); //In this we assign the object in array so that we modify easily
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser)); //In this we assign every key in array by doing this entries keyword

// console.log(instaUser.hasOwnProperty("isLoggedIn")); //that's give us true or false if the proprty exist give us true otherwise false
// de structure in objects


const course = {
    coursename: "Full stack",
    price: "999",
    courseInstructure: "Aasif khan"
}

// const {courseInstructure,coursename,price} = course

// console.log(courseInstructure);

const {courseInstructure: instructor} = course // In this we change the courseInstructure name to instructor
console.log(instructor);



// JSON formate example
// {
//     "name": "Aasif",
//     "coursename": "JS",
//     "price": "free"
// }

[
    {},
    {},
    {}
]






