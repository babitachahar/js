class User {
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
        return `${this._password}hitesh`
    }
set password(value){
    this._password = value
}

}


let user = new User("babita@gmail.com", "abedscxz")
console.log(user.password, user.email);
/*
call set pass value and then call get  in setter am using _password
*/