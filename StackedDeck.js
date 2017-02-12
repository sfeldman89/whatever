/* First I created a shuffle function; since this could be necessary through multiple functions, I made it as a prototype */

Array.prototype.shuffle = function() {
    var input = this; /* Takes in length of array when entered - will recognize as 52 in this example */
     /* for loop cycles through all items in deck and reassigns them randomly */
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
        
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

/* I created two arrays - one for card values, another for card suits */
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9",
                        "10", "Jack", "Queen", "King"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
/* Below is a blank array to store any "cheat decks" in */
var cheatDeck = [];

/* This code creates the deck... */
var StackedDeck = function(cheatCode) {
  var deck = [];
  for (var i = 0; i < ranks.length; i++ ) {
  for (var j = 0; j < suits.length; j++) {
    deck.push(ranks[i]+ " of " + suits[j]);
    }
  }
    /* ... then calls the shuffle function to randomize the order of cards */
  deck.shuffle();
    /* last, the code checks to see if we are cheating this round. If we are, it pushes the current deck into the cheatDeck array for future use. I added console.log statements here to verify that the code is running properly. They would not be contained in the final code. */
  if(cheatCode == "yes") {
    cheatDeck.push(deck);
    console.log("Cheated!");
  } else {
    console.log("Didn't cheat");
  }
  console.log(deck);
};

/* I added these call fucntions to test my code. Here I called the StackedDeck function with a "yes" for cheating, then called the deck itself to verify that this particular deck was stored in the array */
StackedDeck("yes");
cheatDeck;
