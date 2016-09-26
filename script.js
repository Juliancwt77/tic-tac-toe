document.addEventListener('DOMContentLoaded', init)

function init() {
  var player = 'X';
  var numPlayer = 2;
  var clickCount = 0;
  var box = [
    [],
    [],
    []
  ];


  // var winning combination = [[][][]]

  function winCondition(arr) {

    for (var i = 0; i < box.length; i++) {
      // Horizontal win condition
      if (box[i][0] === player && box[i][0] === box[i][1] && box[i][1] === box[i][2]) {

        alert('Player ' + player + ' wins this round!')

      }
    }
  }

  var currentPlayer = 1

  var boxes = document.querySelectorAll('.box')

  for (var i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener('click', boxClick)
  }

  function boxClick() {

    // alert('box' + this.id + 'is clicked')
    // this.classList.add('clickx')
    if (currentPlayer === 1) {

      // this.classlist.add('X')
      this.textContent = "X";

    } else {

      this.textContent = "O";


    }

    switchPlayer()

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
