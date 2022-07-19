function prova(parolainarr){

	var y = parolainarr.length-1;

	for(var i=0; i<parolainarr.length; i++) {

		 if (parolainarr[i] != parolainarr[y]){
	           return false;
	         }
		y--;
	} 

	return true;
}

var parolainarr = ["a","b", "b", "a"];
writeln(prova(parolainarr));
