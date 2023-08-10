function f(){
    return 5;
}
function g(){
    return 6;
}

function whichIsLarger(f, g) {
	let res1= f();
	let res2 =g();
	if(res1>res2)
		{
			return ("f");
		}
	else if(res2>res1)
		{
			return ("g");
		}
	else if (res1==res2)
		{
			return "neither"
		}

}

let result1=whichIsLarger(f,g);
console.log(result1)