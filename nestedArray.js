//Create a function that returns true if the first array can be nested inside the second and false otherwise.

//arr1 can be nested inside arr2 if:

//arr1's min is greater than arr2's min.
//arr1's max is less than arr2's max.


let arr1 = [1, 2, 3, 4];
let arr2 = [0, 6];

function canNest(arr1, arr2) {
	let result1 = maxMin(arr1);
    let result2 = maxMin(arr2);

    if(result1[0] < result2[0] && result1[1] > result2[1]){
        return true;
    }
    else {
        return false;
    }

}

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

let res = canNest(arr1, arr2);
console.log(res);