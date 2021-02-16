//PROTOTYPE EXPLAINED
//object.prototype
//Person.prototype

//Person Constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
//     this.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
};


//Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//Get full Name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
    // return this.firstName + ' ' + this.lastName;
};

//Gets Married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
};

const lawrence = new Person('Lawrence', 'Ong', '03/20/90');

Lawrence.getsMarried('aby');

console.log(lawrence);
console.log(lawrence.birthday);
console.log(lawrence.getFullName());
console.log(lawrence.hasOwnProperty('age'));