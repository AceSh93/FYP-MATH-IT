var results= new Array(2);
var currentLevel;
function genEquation(sign,level){
	var number1 =new Array(2); //numbers of equation; in the brackets amount of equations  
	var number2 =new Array(2);
	currentLevel=level;
	
	var maxNumber;
	switch (level){
		case 1:
			maxNumber=10;
			break;
		case 2:
			maxNumber=100;
			break;
		case 3:
			maxNumber=1000;
			break;
		default:
			maxNumber=10;
	}
	
	for(var i=0;i<2;i++){
		number1[i]=Math.floor((Math.random() * maxNumber) + 1); //*10 is between 0-9
		number2[i]=Math.floor((Math.random() * maxNumber) + 1);
		currentModule=sign;
		if(sign=="+"){
			results[i]=number1[i]+number2[i];
		}
		else if(sign=="-"){
			if(number1[i]<number2[i]){
				var switcher;
				switcher=number1[i];
				number1[i]=number2[i];
				number2[i]=switcher;
			}
			results[i]=number1[i]-number2[i];
		}
		else if(sign=="*"){
			results[i]=number1[i]*number2[i];
		}
		else if(sign=="/"){
			while((number1[i]%number2[i])!=0){
				number1[i]=Math.floor((Math.random() * maxNumber) + 1); //*10 is between 0-9
				number2[i]=Math.floor((Math.random() * maxNumber) + 1);
				if(number1[i]<number2[i]){
					var switcher;
					switcher=number1[i];
					number1[i]=number2[i];
					number2[i]=switcher;
				}
			}
			results[i]=Math.round(number1[i]/number2[i]);
		}
	}
	
	var questionNumber=0;
	var labelText ="";
	var br="<br>";
	var input = document.createElement("input");
	input.type = "text";
	input.style="width:70px;margin-left:2px;height: 20px;";
	input.maxLength="7";//?????????????for multiply has to be way longer
	var labels = document.createElement("LABEL");
	labels.setAttribute("class","questionLabel");
	for(var i=0;i<2;i++){
		questionNumber++;
		labelText = "<p style='display:inline-block'>Q"+questionNumber+"  "+number1[i]+sign+number2[i]+"=</p>";
		input.setAttribute("id","question"+questionNumber);
		labels.innerHTML=labelText;
		labels.appendChild(input);
		document.getElementById("form").appendChild(labels);
		document.getElementById("form").innerHTML+=br;
	}
}
function verifyAnswers(){
	var numberOfCorrectAnswers=0;
	for(var i=1;i<=2;i++){
		var answer=document.getElementById("question"+i).value;
		if(results[i-1]==answer){
			numberOfCorrectAnswers++;
		}
	}
	if(numberOfCorrectAnswers == 2){
		alert("Well done! You got all the right answers in this level!");
		
		document.getElementById("levelNo").innerHTML = currentLevel + 1;
		document.getElementById("form").innerHTML = "";

		genEquation(currentModule, currentLevel + 1);

		if (currentLevel > 3) {
			document.getElementById("form").innerHTML = "";
			document.getElementById("levelNo").innerHTML = "Well done!!";
			document.getElementById("levelNo").innerHTML = "Give other modules a shot!";
		}
	}
}
function increaseFont(){
	var paragraphs=document.getElementsByTagName("P");
	var headers1=document.getElementsByTagName("H1");
	var headers2=document.getElementsByTagName("H2")
	for(var i=0;i<paragraphs.length;i++){
		paragraphs[i].style.fontSize="xx-large";
	}
	for(var i=0;i<headers1.length;i++){
		headers1[i].style.fontSize="55px";
	}
	for(var i=0;i<headers2.length;i++){
		headers2[i].style.fontSize="55px";
	}
}

function decreaseFont(){
	var paragraphs=document.getElementsByTagName("P");
	var headers1=document.getElementsByTagName("H1");
	var headers2=document.getElementsByTagName("H2")
	for(var i=0;i<paragraphs.length;i++){
		paragraphs[i].style.fontSize="14px";
	}
	for(var i=0;i<headers1.length;i++){
		headers1[i].style.fontSize="36px";
	}
	for(var i=0;i<headers2.length;i++){
		headers2[i].style.fontSize="30px";
	}
}
	