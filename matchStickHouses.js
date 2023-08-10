function matchHouses(num){
    if(num == 1){
        return num * 6;
    }
    else{
        num = (num * 6) -(num-1);
        return num;
    }
    
}
let result = matchHouses(4);
console.log(result);


