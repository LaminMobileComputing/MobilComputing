// @author : Lamin Gassama
// @date : 23 October 2016
// @Course : Mobile .. 
// All custom javascript fot this assignment should be here

//As specified in the assignment, this functions generates numbers from ( 0 - 4 )
function getRandomNumber(){
 return Math.floor((Math.random() * 4) + 0);
}

//Upon clicking the answer compare the results. 
function calculateAnswer(){
	//get first generated random number
	var val1 = $('#val1').text();
	//get second generated random number
	var val2 = $('#val2').text();

	var results = +val1 + +val2;

	return results;
}

//Reset the application with new question. 
//This is done by reloading the page. 
function restartGame(){
	//window.location('');
}

function moveToCongratulationPage(){

}

function buttonClicked(buttonId){
	$('#'+buttonId).click(function(){
		var clickedAnswer = $('#'+buttonId).text();
		var actualAnswer = calculateAnswer();

		if(clickedAnswer==actualAnswer){
			$.confirm({
			    title: 'Confirm!',
			    content: 'Simple confirm!',
			    confirm: function(){
			        window.location.href = 'congrats.html';
			    },
			    cancel: function(){
			        $.alert('Canceled!')
			    }
			});
		}else{
			alert("Wrong Answer : Try again");
		}
		
	});
}

