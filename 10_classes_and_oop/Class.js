class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password

    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}

let user = new User("babita", "baita@gmail.com", "2r34fewds")
//console.log(user.changeUsername());
//console.log(user. changeUsername());

// behind the scene

function Userinfo(username, email, password){
    this.username = username
    this.email = email
    this.password = password
    return this

}

Userinfo.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
Userinfo.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

let user1 = new Userinfo("adn", "abc@gmai.com", "123456qwe")
user1.changeUsername()
console.log(user1.changeUsername());
