//Object literal
// const person = {
//     name: 'lawrence'
// };

// console.log(person);


//Person constructor
// function Person(){
//     this.name = 'renz'
// };

// const renz = new Person();

// console.log(renz);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// };

// const cardo = new Person('paolo', 29);
// const dalisay = new Person('chi', 28);

// console.log(paolo);
// console.log(chi);


//Constructor and This Keyword
//Person constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

const lawrence = new Person('Lawrence', '03/20/90');
const renz = new Person('renz', '01/20/92');

console.log(lawrence);
console.log(renz);
console.log(lawrence.calculateAge());
console.log(renz.calculateAge());