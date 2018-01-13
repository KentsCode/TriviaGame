$(document).ready(function() {

	$("#button1").hide();
	$("#button2").hide();
	$("#button3").hide();
	$("#button4").hide();
	$("#restartButton").hide();
	$("#startButton").click(gameStart); 	

	var arrayOfQuestions = [
		{question: "Which planet has the most moons?", answerA: "Mercury", answerB: "Jupiter", answerC: "Saturn", answerD: "Venus", correctAnswer: "Jupiter"},
		{question: "At what temperature are Celcius and Fahreheit equal?", answerA: "100", answerB: "26", answerC: "-17", answerD: "-40", correctAnswer: "-40"},
		{question: "Which of the following elements on the periodic table are liquids at room temperature?", answerA: "Bromine", answerB: "Galium", answerC: "Iodine", answerD: "Indium", correctAnswer: "Bromine"},
		{question: "What is the medical term for bad breath?", answerA: "Gastrointenstinal Dystopia", answerB: "Flatulence", answerC: "Halitosis", answerD: "Emesis", correctAnswer: "Halitosis"},
		{question: "In what month is the Earth closest to the Sun?", answerA: "January", answerB: "April", answerC: "July", answerD: "October", correctAnswer: "January"},
	] 

	var gameClock;
	var clockRunning;
	var howManyQuestionsAnswered = 0;
	var guessedAnswers = [];
	var correctAnswerArray = [];
	var numberCorrect = 0;
	var numberWrong = 0;
	var numberUnanswered = 0;
	var time = 10;

	function gameStart(){
		$(this).hide();
		$("#button1").show();
		$("#button2").show();
		$("#button3").show();
		$("#button4").show();
		$("#timer").show();
		howManyQuestionsAnswered = 0;
		guessedAnswers = [];
		correctAnswerArray = [];
		numberCorrect = 0;
		numberWrong = 0;
		numberUnanswered = 0; 
		loadQuestion();		
	}

	function loadQuestion() {
		if (howManyQuestionsAnswered === arrayOfQuestions.length) {
				gameOver();
			} else {
		$("#question").text(arrayOfQuestions[howManyQuestionsAnswered].question);
		$("#button1").text(arrayOfQuestions[howManyQuestionsAnswered].answerA);
		$("#button2").text(arrayOfQuestions[howManyQuestionsAnswered].answerB);
		$("#button3").text(arrayOfQuestions[howManyQuestionsAnswered].answerC);
		$("#button4").text(arrayOfQuestions[howManyQuestionsAnswered].answerD);
		time = 10;
		startClock();
			}
	}

	function mainGame() {
		$("#button1").click(function(){
			stopTime();
			guessedAnswers.push(arrayOfQuestions[howManyQuestionsAnswered].answerA);
			howManyQuestionsAnswered++;
				loadQuestion();
		});

		$("#button2").click(function(){
			stopTime();
			guessedAnswers.push(arrayOfQuestions[howManyQuestionsAnswered].answerB);
			howManyQuestionsAnswered++;
				loadQuestion();
		});
		$("#button3").click(function(){
			stopTime();
			guessedAnswers.push(arrayOfQuestions[howManyQuestionsAnswered].answerC);
			howManyQuestionsAnswered++;
				loadQuestion();
		});
		$("#button4").click(function(){
			stopTime();
			guessedAnswers.push(arrayOfQuestions[howManyQuestionsAnswered].answerD);
			howManyQuestionsAnswered++;
				loadQuestion();
		});
	}

	function startClock() {
		if (!clockRunning) {
        clockRunning = true;
        gameClock = setInterval(timeCount, 1000);
		}
	}

	function timeCount() {
		
		$("#timer").text(time);
		time--; //counts down
		if (time === -1) {
			howManyQuestionsAnswered++;
			stopTime();
			guessedAnswers.push("timeOutNoAnswer");
			loadQuestion();
		} 
	} 

	function stopTime() {
		clockRunning = false;
		clearInterval(gameClock);
	}

	function gameOver() {
		stopTime();

		for (var i = 0; i < howManyQuestionsAnswered; i++) {
			if (guessedAnswers[i] === arrayOfQuestions[i].correctAnswer)  {
				numberCorrect++;	
			} else {
				numberWrong++;
			}
		}

		var displayCorrect = $("<p>Number Correct: " + numberCorrect + "</p>");
		displayCorrect.attr("class", "finalScoreDisplay");
		$("#questionArea").append(displayCorrect);

		var displayWrong = $("<p>Number Wrong: " + numberWrong + "</p>");
		displayWrong.attr("class", "finalScoreDisplay");
		$("#questionArea").append(displayWrong);

		$("#question").text("Game Over!");
		$("#button1").hide();
		$("#button2").hide();
		$("#button3").hide();
		$("#button4").hide();
		$("#timer").hide();
		$("#restartButton").show();
		$("#restartButton").click(restartGame);
	}

	function restartGame() {
		$("#startButton").show();
		$("#restartButton").hide();
		time = 10;
		$(".finalScoreDisplay").remove();
	}

	mainGame();
});