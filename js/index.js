
var quotes=[
  ["Get your facts first, then you can distort them as you please.", "Mark Twain"],
  ["Always borrow money from a pessimist. He won’t expect it back.", "Oscar Wilde"],
  ["Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.", "Robert Bloch"],
  ["Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.", "Miles Kingston"],
  ["The best way to lie is to tell the truth . . . carefully edited truth.", "Anonymous"],
  ["Do not argue with an idiot. He will drag you down to his level and beat you with experience.", "Greg King"]
];

$(document).ready(function() {
  myFunction();
  $("#randq").click(function() {
    myFunction();
  });
});

function myFunction() {
  var rand = Math.floor(Math.random() * quotes.length);
  $("#quote").empty().append(quotes[rand][0]);
  $("#author").empty().append(quotes[rand][1]);
  var quote1 = quotes[rand][0];
  var author1 = quotes[rand][1];
  var tweet = "https://twitter.com/intent/tweet?text=" + quote1 + " " + author1 + "" ;
  $('#twitter').attr("href",tweet);
}