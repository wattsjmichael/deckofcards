const suitArray = ["Clubs", "Spades", "Hearts" , "Diamonds"]
const typeArray = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

$(document).ready(function() {
  suitArray.forEach(function(suit){
      typeArray.forEach(function(type){
          $("#deckOfCards").append("<li>" + type + " of " + suit + "</li>");   
      });
  });
});