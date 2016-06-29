document.addEventListener('DOMContentLoaded', startGame)



function startGame () {
  var theCells = document.getElementsByClassName('board')[0].children
  for (var i=0; i<theCells.length; i++){
  addListeners(theCells[i])
  //addCellsToBoard(theCells[i])
  }
}

function addListeners(element){
  addEventListener('click', showCell)
  addEventListener('contextmenu', markCell)
}

function showCell(evt) {
  evt.target.classList.remove('hidden')
}

function markCell(evt) {
  evt.preventDefault()
  evt.target.classList.toggle('marked')
}

startGame()

var myBoard = { cells: [] }

function getRow(element){
  for (var i =0; i<element.length; i++){
    if (element[i].classList.contains('row')){
      var rowString = element[i].classList.split("-")
      var rowNum = parseInt(rowString, 10)
      console.log(rowNum)
      return rowNum
    }
  }
}
function getCol(element){
  for (var i =0; i<element.length; i++){
    if (element[i].classList.contains('col')){
      var colString = element[i].classList.split("-")
      var colNum = parseInt(colString, 10)
      console.log(colNum)
      return colNum
    }
  }

}