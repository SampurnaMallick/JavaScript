function maxMin(arr){
    let min =  100;
    let max =  0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return [max , min];

}
let arr = [5,6,1,3,4];
let result = maxMin(arr);
console.log(result);