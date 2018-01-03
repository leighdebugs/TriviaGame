// set variable for each div/element
var showQuiz = $("#quiz");
var countdownStart = 30;

// set questions
var questions = [
 
	{
		question: "Which Broadway musical was written by the same team who also wrote the television show Southpark?",
		answers: {
			a: "Aida",
			b: "The Book of Mormon",
			c: "Hedwig and the Angry Inch",
		},
		correctAnswer: "b"
	},
	{
		question: "What is the longest running Broadway musical to date?",
		answers: {
			a: "Rent",
			b: "Chicago",
			c: "The Phantom of the Opera",
		},
		correctAnswer: "c"
	},
	{
		question: "Which musical holds the world record for fastest rapping on Broadway?",
		answers: {
			a: "Into the Woods",
			b: "Hamilton",
			c: "Spring Awakening",
		},
		correctAnswer: "b"
	},
	{
		question: "What is the highest earning Broadway show?",
		answers: {
			a: "The Lion King",
			b: "The Phantom of the Opera",
			c: "Wicked",
		},
		correctAnswer: "a"
	},
]


// variable holds setInterval
var timer;

// var holds gameplay
var game = {

	// key value pairs
	questions: questions,
	currentQuestion: 0,
	counter: countdownStart,
	correct: 0,
	incorrect: 0,

	// function to decrement game counter
	countdown: function() {
		game.counter--;
		$("#counter-number").text(game.counter);
		if (game.counter === 0) {
			console.log("Time's up!");
			game.timeUp();
		}
	},

	// function to load questions from question array
	loadQuestion: function() {
		timer = setInterval(game.countdown, 1000);
		panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

		for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
			panel.append("<button class='answer-button' id='button' data-name'" + questions[this.currentQuestion].answers[i] + "'>");

		}
	}
}