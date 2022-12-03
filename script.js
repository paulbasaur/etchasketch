function createRow(number) {
  const grid = document.querySelector("#grid");
  const row = document.createElement("div");
  const idName = "row-" + number;
  row.setAttribute("id", idName);
  row.classList.toggle("row");
  grid.appendChild(row);
}


function makeSquare(row, column, dim) {
  const rowId = "#row-" + row;
  const container = document.querySelector(rowId);
  const square = document.createElement('div');
  square.classList.add("square");
  const pixelSize = Math.floor(960/dim) + "px";
  square.style.height = pixelSize;
  square.style.width = pixelSize;
  square.style.minWidth = pixelSize;
  const idName = "square-" + row + "-" + column;
  square.setAttribute("id", idName);
  container.appendChild(square);
}

// Get grid size from user and resize input
// to a factor of 960 (if necessary).
function getGridSize(){
  const gridSizeInput = Number(prompt("Please enter grid size (<100)"));
  if (gridSizeInput > 96) {
    return 96;
  }

  const pixelFactor = 960 % gridSizeInput;
  if (pixelFactor == 0) {
    return gridSizeInput;
  }

  let i = 0;
  while (true){
    i += 1;
    if ((960 % (gridSizeInput + i)) == 0) {
      return (gridSizeInput + i);
    } else if ((960 % (gridSizeInput - i)) == 0) {
      return (gridSizeInput - i);
    }
  }
}


function buildGrid(size) {
  for (let i = 0; i < size; i++) {
    createRow(i);
    for (let j = 0; j < size; j++) {
      makeSquare(i, j, size);
    }
  }
}


function resetGrid(){
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
}


function changeGridSize() {
  location.reload();
}


let gridSize = getGridSize();
console.log(gridSize);
buildGrid(gridSize);
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = "black";
  });
});
