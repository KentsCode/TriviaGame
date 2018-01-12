$(document).ready(function() {

	$("#button1").hide();
	$("#button2").hide();
	$("#button3").hide();
	$("#button4").hide();
	$("#restartButton").hide();
	$("#startButton").click(gameStart); 	

	var arrayOfQuestions = [
		{question: "What is the 1 question?", answerA: "a", answerB: "textB", answerC: "c", answerD: "d", correctAnswer: "textB"},
		{question: "What is the 2 question?", answerA: "a2", answerB: "b2", answerC: "textC", answerD: "d2", correctAnswer: "textC"},
		{question: "What is the 3 question?", answerA: "textA", answerB: "b3", answerC: "c3", answerD: "d3", correctAnswer: "textA"},
		{question: "What is the 4 question?", answerA: "a", answerB: "b", answerC: "textC", answerD: "d", correctAnswer: "textC"},
		{question: "What is the 5 question?", answerA: "a", answerB: "b", answerC: "c", answerD: "textD", correctAnswer: "textD"},
	] 

	var gameClock;
	var clockRunning;
	var howManyQuestionsAnswered = 0;
	var guessedAnswers = [];
	var correctAnswerArray = [];
	var numberCorrect = 0;
	var numberWrong = 0;
	var numberUnanswered = 0;
	var time = 2;

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
		timeCount();
	}

	function loadQuestion() {
		$("#question").text(arrayOfQuestions[howManyQuestionsAnswered].question);
		$("#button1").text(arrayOfQuestions[howManyQuestionsAnswered].answerA);
		$("#button2").text(arrayOfQuestions[howManyQuestionsAnswered].answerB);
		$("#button3").text(arrayOfQuestions[howManyQuestionsAnswered].answerC);
		$("#button4").text(arrayOfQuestions[howManyQuestionsAnswered].answerD);
		time =2;
		startClock();
		console.log(howManyQuestionsAnswered);
	}

	function mainGame() {
		$("#button1").click(function(){
			stopTime();
			guessedAnswers.push(arrayOfQuestions[howManyQuestionsAnswered].answerA);
			howManyQuestionsAnswered++;
			if (howManyQuestionsAnswered === arrayOfQuestions.length) {
				gameOver();
			} else {
				loadQuestion();
			}
		});

		$("#button2").click(function(){
			stopTime();
			guessedAnswers.push(arrayOfQuestions[howManyQuestionsAnswered].answerB);
			howManyQuestionsAnswered++;
			if (howManyQuestionsAnswered === arrayOfQuestions.length) {
				gameOver();
			} else {
				loadQuestion();
			}
		});
		$("#button3").click(function(){
			stopTime();
			guessedAnswers.push(arrayOfQuestions[howManyQuestionsAnswered].answerC);
			howManyQuestionsAnswered++;
			if (howManyQuestionsAnswered === arrayOfQuestions.length) {
				gameOver();
			} else {
				loadQuestion();
			}
		});
		$("#button4").click(function(){
			stopTime();
			guessedAnswers.push(arrayOfQuestions[howManyQuestionsAnswered].answerD);
			howManyQuestionsAnswered++;
			if (howManyQuestionsAnswered === arrayOfQuestions.length) {
				gameOver();
			} else {
				loadQuestion();
			}
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
		if (time === -1 && howManyQuestionsAnswered < 4) {
			howManyQuestionsAnswered++;
			stopTime();
			guessedAnswers.push("timeOutNoAnswer");
			loadQuestion();
		} 
		/*if (time === -1 && howManyQuestionsAnswered > 4) {} {
			stopTime();
			guessedAnswers.push("timeOutNoAnswer");
			howManyQuestionsAnswered++;
			gameOver();
		}*/
	} 

	function stopTime() {
		clockRunning = false;
		clearInterval(gameClock);
	}

	function gameOver() {

		for (var i = 0; i < howManyQuestionsAnswered; i++) {
			if (guessedAnswers[i] === arrayOfQuestions[i].correctAnswer)  {
				numberCorrect++;	
			} else {
				numberWrong++;
			}
		}
		
			console.log(guessedAnswers);

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
		time = 2;
		$(".finalScoreDisplay").remove();
		console.log(time);
	}

	mainGame();
});