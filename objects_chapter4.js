//Introduction to object
//let car = {
    //color:"black",
   // model:"2022",
    //company:"honda"
//}
//console.log(car);

//Accessing the javascript object properties
//console.log(car.color);

let date = {
    year:"2023",
    month:"11",
    day:"24"
}

function newDate(date){
    if(date.month == 11 && date.day == 24){
        return true;
    }
    else{
        return false;
    }
}

let result = newDate(date);
console.log(result);


