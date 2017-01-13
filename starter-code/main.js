console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];
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



	//create gameboard variable
	var board = document.getElementById('game-board');

	var createBoard = function(){
		//create for loop that creates cards
			for (i = 0; i<cards.length; i++) {
			
		//create card element
			var cardElement = document.createElement('div');

		//add class to card
			cardElement.className = "card";

		// this will set the card's 'data-card' to be the element of the array
		// data — attributes are meant to store data about an element that is not
		// tied to a style,
		// i.e., 'king'.
		  	cardElement.setAttribute('data-card', cards[i]);

		// when a card is clicked the function isTwoCards will be executed
    		cardElement.addEventListener('click', isTwoCards)

		//add card to board
			board.appendChild(cardElement);
		}
	}

	//checks to see if there are cards in play
	function isTwoCards() {

	  // add card to array of cards in play
	  // 'this' hasn't been covered in this pre-work, but
	  // for now, just know it gives you access to the card the user clicked on
	  cardsInPlay.push(this.getAttribute('data-card'));
	  // show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}

	  // if you have two cards in play, check for a match
	  if (cardsInPlay.length === 2) {

	    // pass the cardsInPlay as an argument to the isMatch function
	    isMatch(cardsInPlay);

	    // clear cards in play array for your next try
	    cardsInPlay = [];

  }

}


function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();

