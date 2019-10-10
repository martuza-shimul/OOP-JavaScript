
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

function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deletUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
}

let userOne = new User('sam@offgrid.com', 'Sam');
let userTwo = new User('shimul@offgrid.com', 'Shimul');
let admin = new Admin('mart@offgrid.com', 'Martuza');
let users = [userOne, userTwo, admin]

console.log(admin);
userTwo.login();
userOne.logout();