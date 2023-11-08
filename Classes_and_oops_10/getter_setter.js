class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value 
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}Aasif`
    }

    set password(value){
        this._password = value
    }
}

const aasif = new User("a@khan.ai", "xyz")
console.log(aasif.password);
console.log(aasif.email);