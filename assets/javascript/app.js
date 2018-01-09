$(document).ready(function() {


	//Click Events for triviaGame function. If not working use vanilla java for now.
	//window.onload = function() {      Not sure why but omit this code for now
		/*$("#answer1").click(function() {
			guessedArray = "a";
			console.log(guessedArray);
		});
		$("#answer2").click(function() {
			guessedArray = "b";
			console.log(guessedArray);
		});
		$("#answer3").click(function() {
			guessedArray = "c";
			console.log(guessedArray);
		});
		$("#answer4").click(function() {
			guessedArray = "d";
			console.log(guessedArray);
		}); */
		$("#startButton").click(mainGame);
	//};
	//these five arrays contains all the questions and answers. The postion within the array must line up with each other. 

	var questionArray = ["Is this the first question?", "Is this the second question?"];
	var answerArrayA = ["a1", "a2"];
	var answerArrayB = ["b1", "b2"];
	var answerArrayC = ["c1", "c2"];
	var answerArrayD = ["d1", "d2"];
	var correctAnswerArray = ["a", "b"];

	var guessedAnswer;


	var gameOn = false;
	var correct = 0;
	var wrong = 0;
	var questionNumber = 0;

	

	//this method is the game.

	//document.onclick(mainGame);


		function mainGame() {
			
			//there is a start screen that appears when variable gameOn = false
			
				
			//if the user clicks the start button then gameOn = true and start button disappears
			$("#startButton").click(function() {
				$(this).hide();
				gameOn = true;
			});	

			//If gameOn = true and questions answered <10 then load a question and start the clock
			

			$("#answer1").click(function() {
				guessedAnswer = "a";
				console.log(guessedAnswer);
				questionNumber++;
				console.log(questionNumber);
				if (guessedAnswer = correctAnswerArray[questionNumber]) {
					correct++;
					console.log(correct+"correct");
				} else {
					wrong++;
					console.log(wrong+"wrong");
				}
			});
			$("#answer2").click(function() {
				guessedAnswer = "b";
				console.log(guessedAnswer);
				questionNumber++;
				console.log(questionNumber);
				if (guessedAnswer = correctAnswerArray[questionNumber]) {
					correct++;
					console.log(correct+"correct");
				} else {
					wrong++;
					console.log(wrong+"wrong");
				}
			});
			$("#answer3").click(function() {
				guessedAnswer = "c";
				console.log(guessedAnswer);
				questionNumber++;
				console.log(questionNumber);
				if (guessedAnswer = correctAnswerArray[questionNumber]) {
					correct++;
					console.log(correct+"correct");
				} else {
					wrong++;
					console.log(wrong+"wrong");
				}
			});
			$("#answer4").click(function() {
				guessedAnswer = "d";
				console.log(guessedAnswer);
				questionNumber++;
				console.log(questionNumber);
				if (guessedAnswer = correctAnswerArray[questionNumber]) {
					correct++;
					console.log(correct+"correct");
				} else {
					wrong++;
					console.log(wrong+"wrong");
				}
			});


			$("#question").text(questionArray[questionNumber]);
			$("#answer1").text(answerArrayA[questionNumber]);
			$("#answer2").text(answerArrayB[questionNumber]);
			$("#answer3").text(answerArrayC[questionNumber]);
			$("#answer4").text(answerArrayD[questionNumber]);
		

			//if the user presses a button before the clock runs out it adds 1 to either the correct or incorrect tally, stops the clock, moves on to next question.

			//if the clock reaches 10 seconds add one to the unanswered tally and move on to the next question 

			//After variable questionsAnswered = 10 then show the final score and show button startOver which allows you to reset the game without reloading the page


		}



});