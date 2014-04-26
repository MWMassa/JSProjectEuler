//If we list all the natural numbers below 10 that are multiples of 3 or 5,
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//Problem 1
var numbers = [];
var sum = 0;
var multipleOf3and5 = function(test){
    for (i=(test - 1); i>0; i--){
		if(i%3===0){
			sum += i;
            numbers.push(i);            
		}
		else if(i%5===0){
			sum += i;
            numbers.push(i);
		}
    }
};		
multipleOf3and5(1000);
console.log("The sum of the multiples of 3 or 5 less than 1000 are equal to "+sum+".");

//Each new term in the Fibonacci sequence is generated by adding the previous two terms.
//By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million,
//find the sum of the even-valued terms.

//Problem 2
var fib = [1];
var fibNumber1 = 1;
var fibNumber2 = 2;
var fibNumber3 = 0;
var fibSum = 0;
while(fibNumber2<=4000000){
	fibNumber3 = fibNumber1 + fibNumber2;
	fibNumber1 = fibNumber2;
	fibNumber2 = fibNumber3;
	fib.push(fibNumber1);
}
for(i=0; i<fib.length; i++){
	if(fib[i]%2===0)
		fibSum+=fib[i];
}
console.log("The sum of the even Fibonacci numbers less than 4 Million are equal to "+fibSum+".");

//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

//Problem 3

var factors = [];
var primefactors=[];

var isFactor = function(number1){
    for(i=Math.floor(number1/2);i>0;i--){
        if(number1%i===0){
			factors.push(i);
		}
	}
};
var isPrime = function(number2){
	for(j=Math.floor(number2/2);j>=2;j--){
		if(number2%j ===0){
			return false;
		}
	}
	return true;
};

var isLargestPrimeFactor = function(number){
	isFactor(number);
	for(k=0 ;k<factors.length;k++){
		if (isPrime(factors[k])){
			return console.log("The largest prime factor of "+number+" is "+factors[k]+".");
		}
	}
};
isLargestPrimeFactor(600851475);