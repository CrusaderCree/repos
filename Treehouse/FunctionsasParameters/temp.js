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

// alert to credit the author when copy data from page
document.addEventListener('copy', (event) => {
    alert('Please be sure to credit the author')
});