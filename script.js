
function createRow(number){
  const body = document.querySelector('body');
  const row = document.createElement('div');
  const idName = "row-" + number;
  row.setAttribute("id", idName);
  row.classList.toggle("row");
  body.appendChild(row);
}

function makeSquare(row, number){
  const rowId = "#row-" + row;
  const container = document.querySelector(rowId);
  const square = document.createElement('div');
  square.classList.toggle("square");
  const idName = "square-" + row + "-" + number;
  square.setAttribute("id", idName);
  container.appendChild(square);
}

function buildGrid (size) {
  for (let i = 0; i < size; i++) {
    createRow(i);
    for (let j = 0; j < size; j++){
      makeSquare(i, j);
    }
  }
}

buildGrid(3);
