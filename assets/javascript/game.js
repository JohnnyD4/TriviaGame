$(document).ready(function() {

	$("#ansButton").hide();

	$("#startButton").on("click", function() {
		$("#startButton").hide();

		inID = setInterval(dec, 1000);

		setTimeout(question1, 100);

		// setInterval(timeUp, 1000 * 5);
	})

	var timeNumber = 6;
	var inID;
	var counter = 0;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	// var trueAnswer = ["1983", "Mark Richt"];
	var qAndA = [
		first = {
			'quest': "What year did the Miami Hurricanes win their first National Championship?",
			'ans1': "<button class='ansButton'>1911</button>",
			'ans2': "<button class='ansButton'>1983</button>",
			'ans3': "<button class='ansButton'>1987</button>",
			'ans4': "<button class='ansButton'>1989</button>",
			'trueAnswer': "1983"
		},
	
		second = {
			'quest': "Who is the current Head Coach?",
			'ans1': "<button class='ansButton'>Antonio Conte</button>",
			'ans2': "<button class='ansButton'>Jimmy Johnson</button>",
			'ans3': "<button class='ansButton'>Howard Schnellenberger</button>",
			'ans4': "<button class='ansButton'>Mark Richt</button>",
			'trueAnswer': "Mark Richt"
	
		},

		third = {
			'quest': "How many National Championships have the Miami Hurricanes won?",
			'ans1': "<button class='ansButton'>5</button>",
			'ans2': "<button class='ansButton'>2</button>",
			'ans3': "<button class='ansButton'>7</button>",
			'ans4': "<button class='ansButton'>3</button>",
			'trueAnswer': "5"
	
		},

		fourth = {
			'quest': "How many Heisman trophy winners have the Miami Hurricanes had?",
			'ans1': "<button class='ansButton'>1</button>",
			'ans2': "<button class='ansButton'>4</button>",
			'ans3': "<button class='ansButton'>2</button>",
			'ans4': "<button class='ansButton'>0</button>",
			'trueAnswer': "2"
	
		},

		fifth = {
			'quest': "What is the longest home win streak in the NCAA that Miami holds?",
			'ans1': "<button class='ansButton'>91</button>",
			'ans2': "<button class='ansButton'>60</button>",
			'ans3': "<button class='ansButton'>42</button>",
			'ans4': "<button class='ansButton'>58</button>",
			'trueAnswer': "58"
	
		},

		sixth = {
			'quest': "Who was the first Head Coach to win a National Championship?",
			'ans1': "<button class='ansButton'>Jimmy Johnson</button>",
			'ans2': "<button class='ansButton'>Mark Richt</button>",
			'ans3': "<button class='ansButton'>Howard Schnellenberger</button>",
			'ans4': "<button class='ansButton'>Dennis Erickson</button>",
			'trueAnswer': "Howard Schnellenberger"
	
		},

		seventh = {
			'quest': "What year did the football program begin?",
			'ans1': "<button class='ansButton'>1931</button>",
			'ans2': "<button class='ansButton'>1926</button>",
			'ans3': "<button class='ansButton'>1944</button>",
			'ans4': "<button class='ansButton'>1940</button>",
			'trueAnswer': "1926"
	
		},

		eigth = {
			'quest': "Who is the Miami Hurricanes mascot?",
			'ans1': "<button class='ansButton'>Sebastian the Ibis</button>",
			'ans2': "<button class='ansButton'>Billy the Bulldog</button>",
			'ans3': "<button class='ansButton'>The Hurricane</button>",
			'ans4': "<button class='ansButton'>Butch Davis</button>",
			'trueAnswer': "Sebastian the Ibis"
	
		},

		ninth = {
			'quest': "Where is the campus located?",
			'ans1': "<button class='ansButton'>North Miami, FL</button>",
			'ans2': "<button class='ansButton'>Miami Beach, FL</button>",
			'ans3': "<button class='ansButton'>Miami Gardens, FL</button>",
			'ans4': "<button class='ansButton'>Coral Gables, FL</button>",
			'trueAnswer': "Coral Gables, FL"
	
		},

		tenth = {
			'quest': "What was Miami Hurricanes home stadium for 70 years?",
			'ans1': "<button class='ansButton'>Hard Rock Staium</button>",
			'ans2': "<button class='ansButton'>Orange Bowl Stadium</button>",
			'ans3': "<button class='ansButton'>Joe Robbie Stadium</button>",
			'ans4': "<button class='ansButton'>Rose Bowl Stadium</button>",
			'trueAnswer': "Orange Bowl Stadium"
	
		}

	]

		var clockRunning = false;
		var timesUp;

		function dec() {
			timeNumber--;
			// $(".timer").html("Time remaining: " + timeNumber);

			if (timeNumber === 0) {
				timeUp();
			}

		}

		 function timeUp() {
			$(".questions").html("You ran out of time!");
			$(".answers").html("You lose a turn");
			clearInterval(inID);
			setInterval(question1, 1000 * 2);
		}

		// function inBetween() {
		// 	$(".questions").html(qAndA[counter].quest);
			
		// 	$(".answers").html("<p>" + qAndA[counter].ans1 + "</p>");
		// 	$(".answers").append("<p>" + qAndA[counter].ans2 + "</p>");
		// 	$(".answers").append("<p>" + qAndA[counter].ans3 + "</p>");
		// 	$(".answers").append("<p>" + qAndA[counter].ans4 + "</p>");
		// }

		function question1() {
			

			for (var i = 0; i < qAndA.length; i++) {
				
				$(".questions").html(qAndA[counter].quest);
				 
				$(".answers").html("<p>" + qAndA[counter].ans1 + "</p>");
				$(".answers").append("<p>" + qAndA[counter].ans2 + "</p>");
				$(".answers").append("<p>" + qAndA[counter].ans3 + "</p>");
				$(".answers").append("<p>" + qAndA[counter].ans4 + "</p>");
				 // console.log("the correct answer is " + qAndA[counter].trueAnswer);
			};	



				$(".ansButton").on("click", function() {
					clearInterval(inID);

					// clockRunning = false;
					// dec();

					var userButton = $(this).text();
					
					// for (var i = 0; i < qAndA.length; i++) {

						// console.log("the correct answer is " + qAndA[counter].trueAnswer);
						
						if (userButton == qAndA[counter].trueAnswer) {
							$(".answers").html("<h1>Correct!</h1>");
							correctAnswers++;
							counter++;

						} else {
							$(".answers").html("<h1>Wrong!</h1>");
							$(".answers").append("<h2>The correct answer was: " + qAndA[counter].trueAnswer);
							counter++;
							wrongAnswers++;
						}
					// };
						console.log("user guess " + userButton);
						
					

					setTimeout(question1, 1000 * 2);

				})
				

			

		console.log("Answers Correct: " + correctAnswers);
		console.log("Answers Wrong: " + wrongAnswers);
	

	}
	
})