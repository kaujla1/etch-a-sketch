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

//Enable cell coloring 
const cells = document.querySelectorAll(".cell");

let cellColor = "black";

function colorCell(cell) {
  if (chosenColor === "black" || chosenColor === "random") {
    cell.target.style.backgroundColor = cellColor;
  } else if (chosenColor = "multi") {
    cell.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  }
}

gridContainer.addEventListener("mousedown", () => {
  gridContainer.addEventListener("mouseover", colorCell);
});

gridContainer.addEventListener("mouseup", () => {
  gridContainer.removeEventListener("mouseover", colorCell);
});

//Add choose color option
const colorBlackBtn = document.querySelector(".color-black");
const colorRandomBtn = document.querySelector(".color-random");
const colorMultiBtn = document.querySelector(".color-multi");

let chosenColor = "black";

colorBlackBtn.addEventListener("click", () => {
  cellColor = "black";
  chosenColor = "black";
});

colorRandomBtn.addEventListener("click", () => {
  cellColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  chosenColor = "random";
});

colorMultiBtn.addEventListener("click", () => {
  chosenColor = "multi";
});

//Clear coloring from grid
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