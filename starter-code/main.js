console.log("JS file is connected to HTML! Woo!")

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";
//cardOne == cardTwo
//cardThree == cardFour
//
//
//if (cardOne === cardTwo) {
//	alert('You found a match!');	
//} else {
//  alert('Sorry, try again.');
//}
//
//if (cardThree === cardFour) {
//	alert('You found a match!');	
//} else {
//  alert('Sorry, try again.');
//}


var createCards = function(){
	//create gameboard variable
	var gameBoard = document.getElementById('game-board');

	//create for loop that creates cards
		for (i = 0; i<4; i++) {
			
			//create card element
			var newCard = document.createElement('div');

			//add class to card
			newCard.className = "card";

			//add card to board
			gameBoard.appendChild(newCard);
		}
	}

createCards();

