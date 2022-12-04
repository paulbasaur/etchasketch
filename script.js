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
  const idName = "square-" + row + "-" + column;
  square.setAttribute("id", idName);
  container.appendChild(square);
}


function getGridSize(){
  const gridSizeInput = Number(prompt("Please enter grid size (up to 100)"));
  if (gridSizeInput > 100) {
    return 100;
  } else {
    return gridSizeInput;
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
    square.style.backgroundColor = "rgb(255, 255, 255)";
  });
}


function changeGridSize() {
  location.reload();
}


function changeShade(currentColor) {
  if (currentColor === null) {
    return("rgb(225, 225, 225)")
  } else {
    let currentRGB = parseInt(currentColor.substring(22, 25));
    let newRGB = currentRGB - 25;
    return(`rgb(${newRGB}, ${newRGB}, ${newRGB}`)
  }
}


let gridSize = getGridSize();
buildGrid(gridSize);
const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    let newColor = changeShade(square.getAttribute("style"));
    square.style.backgroundColor = newColor;
  });
});
