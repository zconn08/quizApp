var questionSet = [];
var questionNumber = 0;
var numCorrect = 0;

//sets name for each level of correct scores
var level = function(){
	if (numCorrect === 6) {
		return "basketball genius";
	}
	else if (numCorrect > 3){
		return "basketball aficionado";
	}
	else if(numCorrect > 1){
		return "basketball student";
	}
	else {
		return "basketball amateur";
	}
};

$(document).ready(function(){

	//shows relevant data to question
	var showRelevant = function(){
		if($("input:checked").length>0){
			$("#question").empty();
			$("#question").append(questionSet[questionNumber].questionText);
			$(".answerChoices li").empty();
			$("#questionImage").empty();
			$("#answer1").append(questionSet[questionNumber].answers[0]);
			$("#answer2").append(questionSet[questionNumber].answers[1]);
			$("#answer3").append(questionSet[questionNumber].answers[2]);
			$("#answer4").append(questionSet[questionNumber].answers[3]);
			$("#questionImage").append('<img src="images/' + questionSet[questionNumber].questionImage +'">');
			$(".choice").removeAttr("checked");
			}
		else{
			alert("Please make a selection!");
		}
	};

	//sets correct HTML for circle to be filled
	var selectCircle = function(){
		return '#c' + String(questionNumber+1);
	};

	//Overlay fade in and out
	$(".closeButton").click(function(){
		$(".overlayInstructions").fadeOut(500);
	});
	$("#instructionsButton").click(function(){
		$(".overlayInstructions").fadeIn(500);
	});
	
	//Upon clicking submit, circle color, numCorrect and questionNumber is updated. If quiz is over, final screen is displayed
	$("#submit").click(function(){
		if($("input:checked").length>0){
			if ($("input:checked").val() === questionSet[questionNumber].correctAnswer) {
				numCorrect +=1;
				$(selectCircle()).css("background-color","green");
				}
			else {
				$(selectCircle()).css("background-color","red");
				}
		}
		if(questionNumber<5){
			if($("input:checked").length>0){
				questionNumber +=1;
			}
			showRelevant();
			return false;
			}
			else{
				$("#textCorrect").append(numCorrect);
				$("#level").append(level);
				$(".finalScreen").fadeIn(500);
			}
	});

	//Resets upon clicking restart function
	$("#restart").click(function(){
		questionNumber=0;
		numCorrect=0;
		showRelevant();
		$(".finalScreen").fadeOut(200);
		$(".overlayInstructions").fadeIn(200);
		$("#textCorrect").empty();
		$("#level").empty();
		$("#c1,#c2,#c3,#c4,#c5,#c6").css("background-color","white");
	});
});

//Establishes question function
function Question(questionText,answers,questionImage,correctAnswer) {
	this.questionText = questionText;
	this.answers = answers;
	this.questionImage = questionImage;
	this.correctAnswer = correctAnswer;
}

//data storage

questionSet[0] = new Question(
	"Who holds the NBA record for most career 3-pointers?",
	["Ray Allen","Reggie Miller","Peja Stojakovic","Jason Kidd"],
	"larryBird.jpg",
	"1");
questionSet[1] = new Question(
	"Which player besides Michael Jordan lead the NBA in scoring and won defensive player of the year?",
	["David Robinson","LeBron James","Kobe Bryant","Shaquille O'Neal"],
	"mj.jpg",
	"1");
questionSet[2] = new Question(
	"Which non-Celtic has the most NBA championships?",
	["Kareem Abdul-Jabbar","Robert Horry","Michael Jordan","Steve Kerr"],
	"larryObrien.png",
	"2");
questionSet[3] = new Question(
	"Who is the only NBA player since 1985 to have 0 points and over 20 rebounds in a game?",
	["Reggie Evans","Marcus Camby","Dennis Rodman","Charles Oakley"],
	"rebound.jpg",
	"3");
questionSet[4] = new Question(
	"Which NBA player averaged 38 points and 19 rebounds on weekends, while serving in the U.S. Army Reserve on weekdays?",
	["David Thompson","Elgin Baylor","Moses Malone","Oscar Robertson"],
	"usarmy.jpg",
	"2");
questionSet[5] = new Question(
	"Which of these players has never scored 50 points in an NBA game?",
	["Andre Miller","Corey Brewer","Terrence Ross","Derrick Williams"],
	"wilt.jpg",
	"4");
