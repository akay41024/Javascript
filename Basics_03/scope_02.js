let a = 10
var b = 20
const c = 30

if (true) {
    let a = 10
    const b = 400
    // console.log("Inner block ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Aasif"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two()
}

// one()


if (true) {
    const username = "Aasif"
    if(username == "Aasif"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);// scope error 
}

// console.log(username);//scope error


addone(6)  // This allowed here we use the function before initialization

function addone(num){
    return num + 1
}




addTwo()   //This not allowed here we can't use the function before initialization

const addTwo = function addone(num){  //expression function  Hosting concept in javascript
    return num + 1
}