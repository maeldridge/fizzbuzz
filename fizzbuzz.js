function fizzbuzz(){
	for(var i=1;i<=100;i++){
		if(i%5 === 0 && i%3 === 0){
			console.log('FizzBuzz');
		} else if(i%3 === 0){
			console.log('Fizz')
		} else if(i%5 === 0){
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}

fizzbuzz();
// I had assistance for this problem using answers from http://www.w3schools.com/js/js_output.asp and http://ditam.github.io/posts/fizzbuzz/