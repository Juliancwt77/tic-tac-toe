document.addEventListener('DOMContentLoaded', init)

function init () {
  var player = 'X';
  var numPlayer = 2;
  var clickCount = 0;
  var gameBoard = [
    [],
    [],
    []
  ];


  // var winning combination = [[][][]]
  var td1 = document.getElementById("td1");
  var td2 = document.getElementById("td2");
  var td3 = document.getElementById("td3");
  var td4 = document.getElementById("td4");
  var td5 = document.getElementById("td5");
  var td6 = document.getElementById("td6");
  var td7 = document.getElementById("td7");
  var td8 = document.getElementById("td8");
  var td9 = document.getElementById("td9");

  function winCondition(arr) {

// X is winner
    if ( td1.textContent === "X" && td2.textContent === "X" && td3.textContent === "X" ) {

      alert('X is the Winner')

    }

    else if (td4.textContent === "X" && td5.textContent === "X" && td6.textContent === "X") {

      alert('X is the Winner')

    }

    else if (td7.textContent === "X" && td8.textContent === "X" && td9.textContent === "X") {

      alert('X is the Winner')

    }


    else if (td1.textContent === "X" && td4.textContent === "X" && td7.textContent === "X") {

              alert('X is the Winner')

      }

    else if (td2.textContent === "X" && td5.textContent === "X" && td8.textContent === "X") {

        alert('X is the Winner')

    }

    else if (td3.textContent === "X" && td6.textContent === "X" && td9.textContent === "X") {

            alert('X is the Winner')

    }

    else if (td1.textContent === "X" && td5.textContent === "X" && td9.textContent === "X") {

              alert('X is the Winner')

      }

    else if (td3.textContent === "X" && td5.textContent === "X" && td7.textContent === "X") {

        alert('X is the Winner')

    }

// Y is winner

if ( td1.textContent === "O" && td2.textContent === "O" && td3.textContent === "O" ) {

  alert('O is the Winner')

}

else if (td4.textContent === "O" && td5.textContent === "O" && td6.textContent === "O") {

  alert('O is the Winner')

}

else if (td7.textContent === "O" && td8.textContent === "O" && td9.textContent === "O") {

  alert('O is the Winner')

}


else if (td1.textContent === "O" && td4.textContent === "O" && td7.textContent === "O") {

          alert('O is the Winner')

  }

else if (td2.textContent === "O" && td5.textContent === "O" && td8.textContent === "O") {

    alert('O is the Winner')

}

else if (td3.textContent === "O" && td6.textContent === "O" && td9.textContent === "O") {

        alert('O is the Winner')

}

else if (td1.textContent === "O" && td5.textContent === "O" && td9.textContent === "O") {

          alert('O is the Winner')
  }

else if (td3.textContent === "O" && td5.textContent === "O" && td7.textContent === "O") {

    alert('O is the Winner')

}



}
  //
  //  }

  var currentPlayer = 1

  var boxes = document.querySelectorAll('.box')

  for (var i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', boxClick)
  }

  function boxClick() {

    // alert('box' + this.id + 'is clicked')
    // this.classList.add('clickx')
    if (currentPlayer === 1) {

      // this.classList.add('X');
      this.textContent = "X";



    } else {

      this.textContent = "O";


    }
    winCondition();
    switchPlayer();


  }

  function switchPlayer() {
    if (currentPlayer === 1) {

      currentPlayer = 2


    } else {

      currentPlayer = 1
    }

  }

}

// function winCondition(arr) {
//   for (var i = 0; i < gameBoard.length; i++) {
//     // Horizontal win condition
//     if (gameBoard[i][0] === player && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
//
//       alert('Player ' + player + ' wins this round!')
//
//     }
//   }









// Function winner () {
// if document.getElementById("td1").textContent = "X" {
//     alert("win")








// document.getElementById("td1").onclick = click;
// document.getElementById("td2").onclick = click;
// document.getElementById("td3").onclick = click;
// document.getElementById("td4").onclick = click;
// document.getElementById("td5").onclick = click;
// document.getElementById("td6").onclick = click;
// document.getElementById("td7").onclick = click;
// document.getElementById("td8").onclick = click;
// document.getElementById("td9").onclick = click;
//
// function click() {
//     if (this.id == "td1") {
//         document.getElementById("td1").textContent = "X";
//     } else if (this.id == "td2") {
//         document.getElementById("td2").textContent = "X";
//     } else if (this.id == "td3") {
//         document.getElementById("td3").textContent = "X";
//
//     } else if (this.id == "td4") {
//         document.getElementById("td4").textContent = "X";
//     } else if (this.id == "td5") {
//         document.getElementById("td5").textContent= "X";
//     } else if (this.id == "td6") {
//         document.getElementById("td6").textContent = "X";
//
//     } else if (this.id == "td7") {
//         document.getElementById("td7").textContent = "X";
//     } else if (this.id == "td8") {
//         document.getElementById("td8").textContent = "X";
//     } else if (this.id == "td9") {
//         document.getElementById("td9").textContent = "X";
//
//     }
// }
