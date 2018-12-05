var questions= ["Marshal and Lily's theory on being a happy couple is the _____ theory.", "Robin buried a(n) ______ in the park.", "What did Barney make a chart about based on age and appreciation?", "Who is the last person Ted dates before meeting the mother?", "What did Ted get a tattoo of?", "What is the name of the bar Ted and Barney open?"]
var answers= ["olive", "locket", "ewoks", "jeannette", "butterfly", "puzzles"]
var hint=["Starts with an 'O'", "Rhymes with 'socket'", "Star Wars??", "Crazy Girl", "Wings!", "That's the _______!"]
var count=0
var counter=0
var curTime=10
var tester=true
var hinter=false
var a=0
var div=0
var pic=["Ted.png","Ted1.png","Ted2.png","Ted3.png","Ted4.png","Ted5.png"]
document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key===13){
        if(document.getElementById("holo").value.toLowerCase() == answers[count] && tester==true){
        	var snd = new Audio('Correct.mp3');
    		snd.play();
    		document.getElementById("img").src=pic[counter]
        	counter= counter+1
        	curTime=0

        }
        else{      	
        var snd = new Audio('Incorrect.mp3');
        snd.play();
        if(hinter==false){
        	document.getElementById("holos").value = hint[count]
        	hinter=true
        }
        }

    }
}
		
		function startGame(){
			curTime=10
			hinter=false
			tester=true
			if($('#butt').length){
				butt.remove()
			}
			if(count==0){
				counter=0
			}
			div = document.createElement('div');
			div.className="center"
			document.getElementById("questions").innerHTML = questions[count]
			a= window.setInterval(timeStuff, 1000)
			return;
		}
		function timeStuff(){
			if(curTime>0){
					curTime--;
					document.getElementById("timeLeft").innerHTML = curTime + "s";
				}
				if(curTime==0){
					tester=false
					hinter=true
					document.getElementById("timeLeft").innerHTML = "0s";
					var butt = document.createElement("button");
					document.body.appendChild(div)
					if(count<5){
					var t = document.createTextNode("Next Question"); 
					butt.appendChild(t);
					div.appendChild(butt);
					curTime=-1;
					count=(count+1)%6
					butt.addEventListener ("click", function() {
  						butt.remove();
  						document.getElementById("holos").value = ""
  						document.getElementById("holo").value = ""
  						startGame();
					}); 
					}
					else{
					var t = document.createTextNode("Play Again")
					butt.appendChild(t);
					div.appendChild(butt);
					curTime=-1;
					count=(count+1)%6
					butt.addEventListener ("click", function() {
  						butt.remove();
  						document.getElementById("holos").value = ""
  						document.getElementById("holo").value = ""
  						count=0
  						counter=0
  						document.getElementById("img").src = "Ted0.png"
  						startGame();
  					})
  					document.getElementById("questions").innerHTML = "You got " + counter + " correct"
					}     // Create a text node

					clearInterval(a);
				}
		}