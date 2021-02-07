// if firstPlayer is true draw X else draw O
var firstPlayer = true;
var p1Score = document.getElementById("p1S");
var p2Score = document.getElementById("p2S");

function draw (where) {
  
  if (firstPlayer == true && where.innerHTML == "") {
     where.innerHTML = "X";
     // show turn (does X's or O's play)
     document.getElementById("playerOne").style = "color: black";
    document.getElementById("playerTwo").style = "color: red" ;
     // change player
     firstPlayer = false;
  }
  
  if (firstPlayer == false && where.innerHTML == "") {
    where.innerHTML = "O";
    // show turn (does X's or O's play)
    document.getElementById("playerOne").style = "color: red";
    document.getElementById("playerTwo").style = "color: black" ;
    // change player
    firstPlayer = true;
  }
  
  
  // Check for winner
  var one = document.getElementById("one").innerHTML;
  var two = document.getElementById("two").innerHTML;
  var three = document.getElementById("three").innerHTML;
  var four = document.getElementById("four").innerHTML;
  var five = document.getElementById("five").innerHTML;
  var six = document.getElementById("six").innerHTML;
  var seven = document.getElementById("seven").innerHTML;
  var eight = document.getElementById("eight").innerHTML;
  var nine = document.getElementById("nine").innerHTML;
  
  // first row
  if (one == "X" && four == "X" && seven == "X" ) {
    alert("X is winner");
    p1Score.innerHTML = p1Score.innerHTML*1 + 1;
    restart();
  }
  else if (one == "O" && four == "O" && seven == "O" ) {
    alert("O is winner");
    p2Score.innerHTML = p2Score.innerHTML*1 + 1;
    restart();
  }
  
  // seccond row
  else if (two == "X" && five == "X" && eight == "X" ) {
    alert("X is winner");
    p1Score.innerHTML = p1Score.innerHTML*1 + 1;
    restart();
  }
  else if (two == "O" && five == "O" && eight == "O" ) {
    alert("O is winner");
    p2Score.innerHTML = p2Score.innerHTML*1 + 1;
    restart();
  }
  
  // third row
  else if (three == "X" && six == "X" && nine == "X" ) {
    alert("X is winner");
    p1Score.innerHTML = p1Score.innerHTML*1 + 1;
    restart();
  }
  else if (three == "O" && six == "O" && nine == "O" ) {
    alert("O is winner");
    p2Score.innerHTML = p2Score.innerHTML*1 + 1;
    restart();
  }
  
  // first col
  else if (one == "X" && two == "X" && three == "X" ) {
    alert("X is winner");
    p1Score.innerHTML = p1Score.innerHTML*1 + 1;
    restart();
  }
  else if (one == "O" && two == "O" && three == "O" ) {
    alert("O is winner");
    p2Score.innerHTML = p2Score.innerHTML*1 + 1;
    restart();
  }
  
  // seccond col
  else if (four == "X" && five == "X" && six == "X" ) {
    alert("X is winner");
    p1Score.innerHTML = p1Score.innerHTML*1 + 1;
    restart();
  }
  else if (four == "O" && five == "O" && six == "O" ) {
   alert("O is winner");
   p2Score.innerHTML = p2Score.innerHTML*1 + 1;
   restart();
  }
  
  // third col
  else if (seven == "X" && eight == "X" && nine == "X" ) {
    alert("X is winner");
    p1Score.innerHTML = p1Score.innerHTML*1 + 1;
    restart();
  }
  else if (seven == "O" && eight == "O" && nine == "O" ) {
    alert("O is winner");
    p2Score.innerHTML = p2Score.innerHTML*1 + 1;
    restart();
  }
  
  // diagonal \
  else if (one == "X" && five == "X" && nine == "X" ) {
    alert("X is winner");
    p1Score.innerHTML = p1Score.innerHTML*1 + 1;
    restart();
  }
  else if (one == "O" && five == "O" && nine == "O" ) {
    alert("O is winner");
    p2Score.innerHTML = p2Score.innerHTML*1 + 1;
    restart();
  }
  
  // diagonal /
  else if (seven == "X" && five == "X" && three == "X" ) {
    alert("X is winner");
    p1Score.innerHTML = p1Score.innerHTML*1 + 1;
    restart();
  }
  else if (seven == "O" && five == "O" && three == "O" ) {
    alert("O is winner");
    p2Score.innerHTML = p2Score.innerHTML*1 + 1;
    restart();
  }
}

// Restart curent game
function restart () {
  firstPlayer = true;
  document.getElementById("one").innerHTML = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("four").innerHTML = "";
  document.getElementById("five").innerHTML = "";
  document.getElementById("six").innerHTML = "";
  document.getElementById("seven").innerHTML = "";
  document.getElementById("eight").innerHTML = "";
  document.getElementById("nine").innerHTML = "";
  
  document.getElementById("playerOne").style = "color: red";
  document.getElementById("playerTwo").style = "color: black";
}

// Restart score
function restartScore () {
  document.getElementById("p1S").innerHTML = "0";
  document.getElementById("p2S").innerHTML = "0";
}

