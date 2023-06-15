//Get grid size
const slider = document.querySelector(".slider");

let numOfDivs = slider.value;

function resetGrid(element) {
  while(element.firstElementChild) {
     element.firstElementChild.remove();
  }
}

slider.oninput = () => {
  numOfDivs = slider.value;
  resetGrid(gridContainer);
  createRows(numOfDivs);
  createDivs(numOfDivs);
};


//Create grid
const gridContainer = document.querySelector(".grid-container");

let row;

function createRows(numRows) {
  for (i = 1; i <= numRows; i++) {
    row = document.createElement("div");
    row.classList.add("row", "row" + i); //"row" added to style everything without needing to style each cell individually
    gridContainer.appendChild(row);
  }
}

let newDiv;

function createDivs(divs) {
  for (g = 1; g <= divs; g++) {
    for (i = 1; i <= divs; i++) {
      newDiv = document.createElement("div");
      newDiv.classList.add("cell", "cell" + g); //create 1 cell at a time, and adds that same cell to each row once
      row = document.querySelector(".row" + i);
      row.appendChild(newDiv);
    }
  }
}

//Add hover effect
const cells = document.querySelectorAll(".cell");

function colorCell(cell) {
  cell.target.style.backgroundColor = "black";
}

gridContainer.addEventListener("mousedown", () => {
  gridContainer.addEventListener("mouseover", colorCell);
});

gridContainer.addEventListener("mouseup", () => {
  gridContainer.removeEventListener("mouseover", colorCell);
});


//Clear colouring from grid
const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
  for (let i = 1; i <= numOfDivs; i++) {
    let numberedCells = document.querySelectorAll(".cell" + i); //Needed to can access to the individual cells
    numberedCells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  }
});

createRows(numOfDivs);
createDivs(numOfDivs);