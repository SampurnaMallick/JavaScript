/*console.log("helllo coders");
//variables, constants and comments

var score = 34;
var score = 56; //redeclare
console.log(score);

let points = 20;// doesnt allow redeclaration
console.log(points);

const value = 10;
console.log(value);

//datatypes

//7 datatypes: numbers, Strings, Boolean, Null, Undefined, Object(it is a complex datastructure), Symbol

//STRINGS 

console.log("Hello coders");
let firstName = "Wow";
let lastName = "programmer";
console.log(firstName,lastName);// Wow programmer

//String concatinate
//Method1 using + operator

let fullName1 = firstName + lastName;
console.log(fullName1); // Wowprogrammer

let fullName2 = firstName +" "+ lastName;
console.log(fullName2); // Wow programmer

//Method2 using template literals
let fullName3 = `I want to become ${firstName} ${lastName}`
console.log(fullName3);

//Getting String character
console.log(firstName[0]);
console.log(firstName[1]);
console.log(firstName[2]);

//String Methods
console.log(firstName.toLocaleLowerCase());
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(lastName.indexOf("m"));// first index of m will be returned


let hobbies = '  coding reading running'  ;
//trim method
let result = hobbies.trim();
console.log(result);
console.log(hobbies);
console.log(result.indexOf("coding"));
console.log(result.lastIndexOf("running"));// if it doesnt exist then -1 will be returned

//include method
console.log(result.includes("readings"));//case sensitive 

//slice method
let fullNameNew = "wowprogrammer";
console.log(fullNameNew.slice(0,5));//it will return the string excluding the last boundary i.e 0-4

//Imp note: it doesnt mutate original array
let result = fullNameNew.slice(0,5);
console.log("Original String = ",fullNameNew);
console.log("Extracted String = ",result);

//Split method
let favColors = "Brown Blue Black Gray";
let arrColors = favColors.split(` `);
console.log(arrColors);*/

//JavaScript strings are Immutable
let str = "Hello";
/*str[o] = "p";
str[1] = "q";
console.log(str);*/
str = str + "Programmers";
console.log(str);

//numbers
let score = 50;
//console.log(score, typeof score);

//Mathmatical Operators
let result = score % 2;
console.log(result);

let result1 = score *2 + (4 * 3) - 8 / 2 % 4;
/*Using priority and precedence
1() Brackets
2 ** power operator
3 * / %(from left to right)
4 + - (from left to right)
console.log(result1);*/

//Concatination of numbers
let resultLine = "My total score is = "+ result1;
console.log(resultLine);

//Loose equality (==) vs Strict equality(===)
let age = 22;
console.log(age == "22"); //focus only on value but not type
console.log(age === "22"); //focus on both value and type
console.log(age != "22");//loose not equality
console.log(age !== "22");//Strict not equality

//Type conversion
let stringType = "54";
console.log(stringType, typeof stringType);

//Number Method
let numberType = Number(stringType);
console.log(numberType, typeof numberType);

//In Number method passing String must be of numeric values

//String method
let stringType1 = String(numberType);
console.log(stringType1, typeof stringType);

//boolean method
let age1 = 32;
let booleanValueOfAge = Boolean(age);
console.log("Boolean value of age is ",booleanValueOfAge);//everything will result in true except from 0 and empty string

//Arrays
//let dish1 = "Biryani";
//let dish2 = "Icecream";
     //or,
let dishes = ['Biryani','Icecream','Chat'];
console.log(dishes[0]);
console.log(dishes[1]);
console.log(dishes[2]);
console.log(dishes[3]);

//modify the array
dishes[0] = "fried rice";
console.log(dishes);

//Join method of array of strings
//console.log(dishes.join('-'));

//indexOf method
console.log(dishes.indexOf("Chat")); //Case sensitive

//concat method
let newDishes = ["SweetDish","panipuri"];
console.log(dishes.concat(newDishes));

//length method
console.log(dishes.length);
console.log(newDishes.length);
let updatedDishes = dishes.concat(newDishes);
console.log(updatedDishes.length);

//push method ,it is a mutator
console.log(updatedDishes.push("Chowmin"));//push returns the new length of the array
console.log(updatedDishes);

//pop method
console.log(dishes.pop());
console.log(dishes);

//Boolean values and comparisons
let booleanType = true;
let stringType2 = "true";
console.log(typeof booleanType, typeof stringType2);

//Methods returns Boolean Values
let email = "wowcoder@example.com";
let booleanValue = email.includes("@");
console.log(booleanValue);

//comparison operators always returns boolean value
// ==, ===, !=, !==
// > , >=
// < , <=






















