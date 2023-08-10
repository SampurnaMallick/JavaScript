//Declaration
function nameOfFunction(){
    console.log("running...");
}

//function call
nameOfFunction();

//function Expression
let fun = function(){//also called anonymous function
  console.log("hello world");
}
fun();

//passing values (Arguments and parameters)
let invitation = function(name){
    console.log(name);

}
invitation("Sampurna");

//Arrow function
let invitations = name1 => `Welcome ${name1} to this event`
console.log(invitations("coders"));

//passing function as an argument
//Example 1
let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.toLowerCase();
}

let transformer = function(str,fun){
    return fun(str);
}
console.log(transformer("hello", lowerCase))

//Example 2
//Function returning another function
let complement = function(msg){
    return function(name){
        console.log(`${msg} ${name}`)

    }
};
console.log(complement("You are good coder")("lurie"))

//2nd method of example2
let complimented = complement("you are a good coder");
complimented("lurie");
//complement is higher order function

//function immediately invoked function expression and executed only once

//now this is expression
(function(name){
    
    console.log("This function will never execute again", name);

})("IIFE");

//setTimeout and setInterval
//setTimeout-> Runs function "Once" after "Interval" of time;
//setTimeout(func/code, delay, arg1, arg2, arg3,.....)
function greeting(){
    console.log("welcome");
}
 setTimeout(greeting,5000);//5000ms = 5sec

 function greeting1(name){
    console.log(`Welcome ${name} to our company`);
 }
 setTimeout(greeting1,3000,"Sampurna");

 //setInterval
 //setInterval(func/code, delay, arg1, arg2, arg3,.....)
 //setInterval(greeting,5000);

 //Hoisting
 //Variable(var) "declaration" are "hoisted" toward "top" of their scope
 test = 10;
 console.log(test);
 var test;

















