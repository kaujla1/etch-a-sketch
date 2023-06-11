//create a webpage with a 16x16 grid of square divs

//given a number (x)
//create x*x divs 
//format divs so there are only x divs per row 
//then the rest wrap onto the next line
//thus creating a x by x grid 

const gridContainer = document.querySelector(".grid-container")

let numOfDivs = 16;

let row;

function createRows(numRows) {
  for (i = 0; i < numRows; i++) {
    row = document.createElement("div");
    row.classList.add("row", "row" + i);
    gridContainer.appendChild(row);
  }
}

let newDiv;

/*
function createDivs(numDivs) {
  for (i = 0; i < numDivs; i++) {
    newDiv = document.createElement("div");
    row = document.querySelector(".row" + i);
    row.appendChild(newDiv);
  }
}*/

function createDivs(divs) {
  for (g = 0; g < divs; g++) {
    for (i = 0; i < divs; i++) {
      newDiv = document.createElement("div");
      row = document.querySelector(".row" + i);
      row.appendChild(newDiv);
    }
  }
}

createRows(numOfDivs);
createDivs(numOfDivs);

