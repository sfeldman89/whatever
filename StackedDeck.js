Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9",
                        "10", "Jack", "Queen", "King"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var cheatDeck = [];

var StackedDeck = function(cheatCode) {
  var deck = [];
  for (var i = 0; i < ranks.length; i++ ) {
  for (var j = 0; j < suits.length; j++) {
    deck.push(ranks[i]+ " of " + suits[j]);
    }
  }
  deck.shuffle();
  if(cheatCode == "yes") {
    cheatDeck.push(deck);
    console.log("Cheated!");
  } else {
    console.log("Didn't cheat");
  }
  console.log(deck);
};

StackedDeck("yes");
cheatDeck;