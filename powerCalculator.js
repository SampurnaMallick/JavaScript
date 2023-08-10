function powerCalculator(voltage , current){
    let power = voltage * current;
    return power;
}

let result = powerCalculator(230, 10);
console.log(result);
