$(document).ready(function() {

	$("#ansButton").hide();

	$("#startButton").on("click", function() {
		$("#startButton").hide();


		setTimeout(question1, 100);

		// setTimeout(timeUp, 1000 * 5);
	})

	var counter = 0;
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var trueAnswers = ["1983", "Mark Richt"];
	var qAndA = [
		first = {
			'quest': "What year did the Miami Hurricanes win their first National Championship?",
			'ans1': "<button class='ansButton>1911</button>",
			'ans2': "<button class='ansButton'>1983</button>",
			'ans3': "<button class='ansButton'>1987</button>",
			'ans4': "<button class='ansButton'>1989</button>",
			// 'div': "#answerDiv"
		},
	
		second = {
			'quest': "Who is the current Head Coach?",
			'ans': "<button class='ansButton'>Antonio Conte</button>",
			'ans': "<button class='ansButton'>Jimmy Johnson</button>",
			'ans': "<button class='ansButton'>Howard Schnellenberger</button>",
			'ans': "<button class='ansButton'>Mark Richt</button>"
	
		},
	]



		function timeUp() {
			$(".questions").html("You ran out of time!");
			$(".answers").html("Be faster next time");
		}

		function inBetween() {
			$(".questions").html(qAndA[counter].quest);
			
			$(".answers").html(qAndA[counter].ans1);
			$(".answers").append(qAndA[counter].ans2);
			$(".answers").append(qAndA[counter].ans3);
			$(".answers").append(qAndA[counter].ans4);
		}

		function question1() {

			for (var i = 0; i < qAndA.length; i++) {

				$(".questions").html(qAndA[counter].quest);
				 
				$(".answers").html(qAndA[counter].ans1);
				$(".answers").append(qAndA[counter].ans2);
				$(".answers").append(qAndA[counter].ans3);
				$(".answers").append(qAndA[counter].ans4);

			};	



				$(".ansButton").on("click", function() {
					
					var userButton = $(this).text();
					// timeUp().hide();

					if (userButton == trueAnswers[0]) {
					$(".answers").html("Correct!");
					correctAnswers++;
					counter++;

					} else {
					$(".answers").html("Wrong!");
					counter++;
					wrongAnswers++;
					}

					setTimeout(inBetween, 1000 * 5);

				})
				

			

		console.log(correctAnswers);
		console.log(wrongAnswers);
	

	}
	
})