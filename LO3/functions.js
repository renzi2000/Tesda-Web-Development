//Function declaration
//function keyword followed by the name of the function
//function - name of function

function greet(firstName = 'Lawrence', lastName = 'Ong'){
    if(typeof firstName === 'undefined'){
        firstName = 'Nicko';
    }
    if(typeof lastName === 'undefined'){
        lastName = 'Ong';
    }

    console.log('Kamusta?');
    return `Hello ${firstName} ${lastName}`;
} 

console.log(greet());

//Function Expressions
//variable 1st before a function
//variable - function

const square = function(x) {
    return x * x;
}

console.log(square(3));

//Immediately Invokable Function Expresions - IIFES *IPIS hahaha
//has own callback function

(function(name){
    console.log(`Name: ${name}`)
})('Nicko');

//Property methods
const workout = {
    add: function(){
        console.log('Add workout routine')
    },
    extend: function(id){
        console.log(`Extend workout time ${id} mins.`)
    }
}

workout.delete = function(){
console.log('Deleting workout...'); 
}

workout.add();
workout.extend(20);
workout.delete();