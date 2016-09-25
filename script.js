document.addEventListener('DOMContentLoaded', init)


 document.getElementById('td1').textContent= "X";
 document.getElementById('td2').textContent = "O";


 td1.addEventListener("click", display)

function display() {

  document.getElementById('td1').textContent = "X";

}

td2.addEventListener("click", display1)

  function display1() {

   document.getElementById('td2').textContent= "O";


  // change colour of player when start game
}



// function init () {
//   var addX = document.getElementById('box1')
//
//   addX.addEventListener('click', display () )
//
//   function display () {
//
//     document.getElementById('box1').innerHTML = "X";
//
//   }
// }
