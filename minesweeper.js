document.addEventListener('DOMContentLoaded', startGame)



function startGame () {
  var stuff = document.getElementsByClassName('board')[0].children
  console.log("Argh")
  //console.log(stuff)
  addListeners(stuff)
}

function addListeners(element){
    for (var i = 0; i<element.length; i++){
    element[i].addEventListener('click', showCell)
    element[i].addEventListener('contextmenu', markCell)
    }
}

function showCell(evt) {
  evt.target.classList.remove('hidden')
}

function markCell(evt) {
  evt.preventDefault()
  evt.target.classList.toggle('marked')
}

startGame()
