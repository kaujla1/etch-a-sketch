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
  for (i = 0; i < numRows; i++) {
    row = document.createElement("div");
    row.classList.add("row", "row" + i);
    gridContainer.appendChild(row);
  }
}

let newDiv;

function createDivs(divs) {
  for (g = 0; g < divs; g++) {
    for (i = 0; i < divs; i++) {
      newDiv = document.createElement("div");
      newDiv.classList.add("cell");
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

//mousedown over gridContainer adds mouseover to each cell, then mouse up over gridContainer removes mouseover

/*Works but no mouseup event to stop colouring 
gridContainer.addEventListener("mousedown", () => {
  gridContainer.addEventListener("mouseover", (cell) => {
    cell.target.style.backgroundColor = "black";
  });
});*/

/*adds both but only to the cell that was clicked
gridContainer.addEventListener("mousedown", (cell) => {
  cell.target.addEventListener("mouseover", () => {
    console.log("hi");
  });
});*/

/*
gridContainer.addEventListener("mouseover", (cell) => {
  cell.target.classList.add("clicked");
});*/

/*Working version
gridContainer.addEventListener("mouseover", (cell) => {
  cell.target.style.backgroundColor = "blue";
});*/


createRows(numOfDivs);
createDivs(numOfDivs);

