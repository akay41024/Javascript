function setUsername(username) {
    console.log("Called");
    this.username = username
}

function createUser(username, email, password){
    //setUsername(username) // this will not execute because external function clean up after the called so that the data will also cleaned up that's why username not initialised
    setUsername.call(this, username) //call method access the setusername property in this keyword all set now
    this.email = email
    this.password = password
}

const user = new createUser("Aasif", "as@fb.com", "123")

console.log(user);