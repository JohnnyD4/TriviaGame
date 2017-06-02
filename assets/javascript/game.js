$(document).ready(function() {
	
    $(".title").hide();
    
    $("#ansButton").hide();

    var timeNumber = 10;

    var inID;

    var counter = 0;

    var correctAnswers = 0;

    var wrongAnswers = 0;

    var unAnswered = 0;
    
    var qAndA = 
    [   
        {
            'quest': "What year did the Miami Hurricanes win their first National Championship?",
            'ans1': "<button class='ansButton'>1911</button>",
            'ans2': "<button class='ansButton'>1983</button>",
            'ans3': "<button class='ansButton'>1987</button>",
            'ans4': "<button class='ansButton'>1989</button>",
            'trueAnswer': "1983"
        },

        {
            'quest': "Who is the current Head Coach?",
            'ans1': "<button class='ansButton'>Antonio Conte</button>",
            'ans2': "<button class='ansButton'>Jimmy Johnson</button>",
            'ans3': "<button class='ansButton'>Howard Schnellenberger</button>",
            'ans4': "<button class='ansButton'>Mark Richt</button>",
            'trueAnswer': "Mark Richt"

        },

        {
            'quest': "How many National Championships have the Miami Hurricanes won?",
            'ans1': "<button class='ansButton'>5</button>",
            'ans2': "<button class='ansButton'>2</button>",
            'ans3': "<button class='ansButton'>7</button>",
            'ans4': "<button class='ansButton'>3</button>",
            'trueAnswer': "5"

        },
 
        {
            'quest': "How many Heisman trophy winners have the Miami Hurricanes had?",
            'ans1': "<button class='ansButton'>1</button>",
            'ans2': "<button class='ansButton'>4</button>",
            'ans3': "<button class='ansButton'>2</button>",
            'ans4': "<button class='ansButton'>0</button>",
            'trueAnswer': "2"

        },
 
         {
            'quest': "What is the longest home win streak in the NCAA that Miami holds?",
            'ans1': "<button class='ansButton'>91</button>",
            'ans2': "<button class='ansButton'>60</button>",
            'ans3': "<button class='ansButton'>42</button>",
            'ans4': "<button class='ansButton'>58</button>",
            'trueAnswer': "58"

        },

        {
            'quest': "Who was the first Head Coach to win a National Championship?",
            'ans1': "<button class='ansButton'>Jimmy Johnson</button>",
            'ans2': "<button class='ansButton'>Mark Richt</button>",
            'ans3': "<button class='ansButton'>Howard Schnellenberger</button>",
            'ans4': "<button class='ansButton'>Dennis Erickson</button>",
            'trueAnswer': "Howard Schnellenberger"

        },

        {
            'quest': "What year did the football program begin?",
            'ans1': "<button class='ansButton'>1931</button>",
            'ans2': "<button class='ansButton'>1926</button>",
            'ans3': "<button class='ansButton'>1944</button>",
            'ans4': "<button class='ansButton'>1940</button>",
            'trueAnswer': "1926"

        },

        {
            'quest': "Who is the Miami Hurricanes mascot?",
            'ans1': "<button class='ansButton'>Sebastian the Ibis</button>",
            'ans2': "<button class='ansButton'>Billy the Bulldog</button>",
            'ans3': "<button class='ansButton'>The Hurricane</button>",
            'ans4': "<button class='ansButton'>Butch Davis</button>",
            'trueAnswer': "Sebastian the Ibis"

        },

        {
            'quest': "Where is the campus located?",
            'ans1': "<button class='ansButton'>North Miami, FL</button>",
            'ans2': "<button class='ansButton'>Miami Beach, FL</button>",
            'ans3': "<button class='ansButton'>Miami Gardens, FL</button>",
            'ans4': "<button class='ansButton'>Coral Gables, FL</button>",
            'trueAnswer': "Coral Gables, FL"

        },

        {
            'quest': "What was Miami Hurricanes home stadium for 70 years?",
            'ans1': "<button class='ansButton'>Hard Rock Staium</button>",
            'ans2': "<button class='ansButton'>Orange Bowl Stadium</button>",
            'ans3': "<button class='ansButton'>Joe Robbie Stadium</button>",
            'ans4': "<button class='ansButton'>Rose Bowl Stadium</button>",
            'trueAnswer': "Orange Bowl Stadium"

        }
    ];

    var clockRunning = false;

    var timesUp;

    var userButton;
    
    // 
    // When the start button clicks, button 
    // hides and calls question1 function
    // 
    $("#startButton").on("click", function() {

        $("#startButton").hide();

        $(".wall").css("background-color", "#364D1D");

        $(".title").show();

        $("nav").hide();

        reset();

        inID = setInterval(dec, 1000);

        askQuestions();
        
    }) // end of start button function 

    //
    // Ask a series of trivia questions 
  	// Change questions based on the player answer or
  	// when the player runs out of time
    //
    function askQuestions() {

        $(".questions").html(qAndA[counter].quest);
        $(".answers").html("<p>" + qAndA[counter].ans1 + "</p>");
        $(".answers").append("<p>" + qAndA[counter].ans2 + "</p>");
        $(".answers").append("<p>" + qAndA[counter].ans3 + "</p>");
        $(".answers").append("<p>" + qAndA[counter].ans4 + "</p>");

		//
		// Set a click event handler on the answer button
		//
        $(".ansButton").on("click", function() {
            
            userButton = $(this).text();

            if (userButton == qAndA[counter].trueAnswer) {
                
                $(".answers").html("<h1>Correct!</h1>");
                
                correctAnswers++;
            } 
            else {
                
                $(".answers").html("<h1>Wrong!</h1>");
                
                $(".answers").append("<h2>The correct answer was: " + qAndA[counter].trueAnswer);
                
                wrongAnswers++;
            }
            
            // Increment game counter and implement end of game logic
            checkCounter();
        
        })
    } // end of Question Function


    //
    // function checks if the counter has reached 10 
    // so there are no more questions left and it shows
    // the game over page, else it calls askQuestions function
    //
	function checkCounter() {
		
        counter++;
	    
	    if (counter == 10) {
	       
            $(".timer").hide();
	       
            $(".questions").html("<h1>Game Over</h1>");
	       
            $(".answers").html("<h2>Your Score: </h2>");
	       
            $(".answers").append("<h3><strong>Correct</strong>: " + correctAnswers + "</h3>");
	       
            $(".answers").append("<h3><strong>Incorrect</strong>: " + wrongAnswers + "</h3>");
	   		
            $(".answers").append("<h3><strong>Unanswered</strong>: " + unAnswered + "</h3>");

            $(".answers").append("<button class='restart' id='startButton'>Restart</button>");

	    }
	    else {
	    	
            inID = setInterval(dec, 1000);
	    	
            askQuestions();    	
	    }
	    reset();
	} // end of check counter function

    // 
    // function decrements a timer for user to see
    // 
    function dec() {
        
        timeNumber--;

        $(".timer").html("Time remaining: " + timeNumber);

        if (timeNumber == 0) {
        
            unAnswered++;
        
        	checkCounter();        
        }
    } // end of dec function

    // 
    // function resets timer for each page
    // 
    function reset() {
       
        timeNumber = 10;
       
        $(".timer").html("Time remaining: " + timeNumber);
       
        clearInterval(inID);
    } // end of reset function

    // 
    // function tells you if you ran out of time
    // 
    function timeUp() {
       
        $(".questions").html("You ran out of time!");
       
        $(".answers").html("You lose a turn");
          
    } // end of timeUp functions


})