function myName() {
  console.log("A");
  console.log("A");
  console.log("A");
  console.log("A");
  console.log("A");
  console.log("A");
  console.log("A");
}

// myName  //this is the reference of the function
// myName()


// function addTwoNumbers(num1,num2){
//     console.log(num1+ num2);
// }

// addTwoNumbers(3,5)



function addTwoNumbers(num1,num2){
    return num1+ num2;
}

const result = addTwoNumbers(3,6)
// console.log("Result is: ", result);





function loginUserName(username){
    // if(username === undefined){
    //     console.log("Please enter the username");
    //     return
    // }
    if(!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

function loginUserName(username = "Shanu"){  //by default value
    if(!username){
        console.log("Please enter the username");
        return
    }
    return `${username} just logged in`
}

// const user = loginUserName()
const user = loginUserName("Aasif")
console.log(user);