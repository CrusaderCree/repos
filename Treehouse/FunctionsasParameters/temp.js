function sayHi(){
	console.log("Hello")
}

//passing a function from a function
function hiAndBye (func){
func();
console.log("Bye")
  
}
//annonymous function
hiAndBye( () =>{ 
console.log("Greeting")
})