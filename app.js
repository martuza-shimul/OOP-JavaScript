
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;   
}




let userOne = new User('sam@offgrid.com', 'Sam');
let userTwo = new User('shimul@offgrid.com', 'Shimul');

console.log(userOne);