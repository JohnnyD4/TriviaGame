$(document).ready(function() {

	$("#ansButton").hide();

	$("#startButton").on("click", function() {
		$("#startButton").hide();


		setTimeout(question1, 100);

		setTimeout(timeUp, 1000 * 5);
	})

	var correctAnswers = 0;
	var wrongAnswers = 0;
	var qAndA = [
		first = {
			'quest1': "What year did the Miami Hurricanes win their first National Championship?",
			'ans1': "<button class='ansButton false'>1911</button>",
			'ans2': "<button class='ansButton true'>1983</button>",
			'ans3': "<button class='ansButton false'>1987</button>",
			'ans4': "<button class='ansButton false'>1999</button>"
		},
	
		second = {
			quest2: "What year did the Miami Hurricanes win their first National Championship?",
			ans2: "<button class='ansButton' value='false'>1911</button>",
			ans2: "<button class='ansButton' value='true'>1983</button>",
			ans2: "<button class='ansButton' value='false'>1987</button>",
			ans2: "<button class='ansButton' value='false'>1999</button>"
	
		},
	]

	$(".false").val("false");
	$(".true").val(1);

	// for (var i = 0; i < qAndA.length; i++) {	

		function question1() {


			$(".questions").html(qAndA[0].quest1);
			 
			$(".answers").html(qAndA[0].ans1);
			$(".answers").append(qAndA[0].ans2);
			$(".answers").append(qAndA[0].ans3);
			$(".answers").append(qAndA[0].ans4);



			$(".ansButton").on("click", function() {
				console.log(this.value);

				// timeUp().hide();

				if (".ansButton".value === 1) {
				$(".answers").html("Correct!");
				} else {
				$(".answers").html("Wrong!");
			}
			})
			

		}

		function timeUp() {
			$(".questions").html("You ran out of time!");
			$(".answers").html("Be faster next time");
		}
	// }
	
})