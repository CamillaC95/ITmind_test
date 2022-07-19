function testnumero (n) {

if (n%3 == 0) 
	return("Fizz");
if(n%5 == 0) 
	return("Buzz");
if(n%3 == 0 && n%5 == 0) 
	return("FizzBuzz");
if(n%4 != 0 || n%5 != 0) 
	return(n);
}

//testa numero inserito da tastiera
var n = readnum();

//test numero 
var n = 15;
writeln("Il risultato è: " + testnumero(n));