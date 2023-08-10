//Control flow
//For loops
/*for(let i = 1; i <= 10; i++){
    console.log("run the task");
    console.log("run the task",i);
}

//usecase of for loop
let dishes = ['Biryani','Chana-chat','panipuri','friedrice'];
for(let i = 0; i < dishes.length; i++){
    console.log(dishes[i]);
}

console.log("**********************************");

//while loop
let j = 0;
while(j < dishes.length){
    console.log("while loop",j);
    j++;
}

let dishes = ['Biryani','chat','panipuri','friedrice'];
let j = 0;
while(j < dishes.length){
    console.log("dish = ",dishes[j]);
    j++;
}

//do-while loop
let j = 1;
do{
    console.log("Atleast run time = ",j);
    j++;
}while(j <= 1){
    //statements
}

//"if", "else", "else-if"
let budget = 5000;
if(budget > 6000){
    console.log("will do dinner in hotel");
}
else if(budget > 4500){
   console.log("Will do dinner at some 3 star hotel");
}
else{
    console.log("run if all conditions are false");
}

//nested-if ,which is not a good practice
let num = 23;
if(num > 22){
    console.log("run");
    if(num > 25){
        console.log("run1");
    }
}

//break and continue also called jump statements
//Continue used to skip some values of loop
for(let i = 1; i <= 10; i++){
    if(i == 2){
        continue;
    }
    console.log("value of i is ",i);
}

//Break used to terminate the loop and control transfer from outside
for(let i = 1; i <= 10; i++){
    if(i == 5){
        console.log("our desired value is ",i);
        break;
    }
    console.log("val is ",i);
}

//logical operators
let password = "qwerty";
if(password.length > 5 || password.includes('@')){
    console.log("Strong Password");
}
else{
    console.log("Change your password");
}

//Priorities
//Not
//And, Or from left to right
let result = true && true || false && !false;
//evaluation of result is shown below.
//result = true&&true || false && true;
//result = true || false && true;
//result = true && true;
//result = true
console.log(result);

//variable and block scope
//scope-> Area where variable is defined or accessible

let score = 90; //Global scope
if(true){
    let score = 50;//block scope
    console.log(score);//nearest value
}
console.log(score);

//ternary operator
let age = 20;
let result = age > 18?"Qualify" : "Fail";
console.log(result);

let age = 20;
let weight = 50;
let result = age > 18? weight > 55? "Qualify":"weight issue" : "age issue";
console.log(result);*/































































































