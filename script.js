function rock(){
	computerChoice=Math.floor(Math.random()*3);
		if (computerChoice==0){
			document.getElementById("result").innerHTML="Tie! Computer chose rock too";
		}			
		else if (computerChoice==1){
			document.getElementById("result").innerHTML="Winner! Computer chose scissors";
		}			
		else{
			document.getElementById("result").innerHTML="Loser! Computer chose paper";
		}
}
		
function paper(){
	computerChoice=Math.floor(Math.random()*3);
		if (computerChoice==0){
			document.getElementById("result").innerHTML="Tie! Computer chose paper too";
		}			
		else if (computerChoice==1){
			document.getElementById("result").innerHTML="Winner! Computer chose rock";
		}			
		else{
			document.getElementById("result").innerHTML="Loser! Computer chose scissors";
		}
}	
		
function scissors(){
	computerChoice=Math.floor(Math.random()*3);
		if (computerChoice==0){
			document.getElementById("result").innerHTML="Tie! Computer chose scissors too";
		}			
		else if (computerChoice==1){
			document.getElementById("result").innerHTML="Winner! Computer chose paper";
		}			
		else{
			document.getElementById("result").innerHTML="Loser! Computer chose rock";
		}
}