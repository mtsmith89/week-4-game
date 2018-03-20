$(document).ready(function() {
  // Variables
  var target = Math.floor(Math.random() * 101 + 19);
  var num1 = Math.floor(Math.random() * 11 + 1);
  var num2 = Math.floor(Math.random() * 11 + 1);
  var num3 = Math.floor(Math.random() * 11 + 1);
  var num4 = Math.floor(Math.random() * 11 + 1);
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  // Set starting containers
  $("#targetNumber").text(target);
  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);
  // Functions
  function reset() {
    target = Math.floor(Math.random() * 101 + 19);
    console.log(target);
    $("#targetNumber").text(target);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    totalScore = 0;
    $("#totalScore").text(totalScore);
  }
  function winner() {
    alert("You won!");
    wins++;
    $("#numberWins").text(wins);
    reset();
  }
  function loser() {
    alert(
      "You lose! Your final score was " +
        totalScore +
        " you went over by " +
        (totalScore - target) +
        "."
    );
    losses++;
    $("#numberLosses").text(losses);
    reset();
  }
  function didTheyWin() {
      if (totalScore == target) {
          winner();}
          else if (totalScore > target) {
              loser();
          }
  }
  // Click Events
  $("#one").on("click", function() {
    totalScore = totalScore + num1;
    $("#totalScore").text(totalScore);
    didTheyWin();
  });
  $("#two").on("click", function() {
    totalScore = totalScore + num2;
    $("#totalScore").text(totalScore);
    didTheyWin();
  });
  $("#three").on("click", function() {
    totalScore = totalScore + num3;
    $("#totalScore").text(totalScore);
    didTheyWin();
  });
  $("#four").on("click", function() {
    totalScore = totalScore + num4;
    $("#totalScore").text(totalScore);
    didTheyWin();
  });
});
