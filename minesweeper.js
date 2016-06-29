document.addEventListener('DOMContentLoaded', startGame)


function startGame () {
  var theCells = document.getElementsByClassName('board')[0].children
  for (var i=0; i<theCells.length; i++) {
  addListeners(theCells[i])
  addCellsToBoard(theCells[i])
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

var board = { cells: [] }

function getRow(element){
  for (var i =0; i<element.length; i++) {
    if (className[i].includes('row')) {
      var rowArray = className[i].split('-')
      var rowNum = parseInt(rowArray[1], 10)
      console.log(rowNum)
      return rowNum
    }
  }
}

function getCol(element){
  for (var i =0; i<element.length; i++){
    if (className[i].includes('col')){
      var colArray = className[i].split('-')
      var colNum = parseInt(colArray[1], 10)
      console.log(colNum);
      return colNum;
    }
  }
}

function addCellsToBoard (element) {
  var newCell = {};
    newCell.row = getRow(element);
    newCell.col = getCol(element);
    if (element.classList.contains('mine')) {
      newCell.isMine = true;
    }
    else {
      newCell.isMine = false;
    }
  board.cells.push(newCell);  
};


