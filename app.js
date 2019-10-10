
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;   
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}
User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged  out');
}


let userOne = new User('sam@offgrid.com', 'Sam');
let userTwo = new User('shimul@offgrid.com', 'Shimul');

console.log(userOne);
userTwo.login();
userOne.logout();