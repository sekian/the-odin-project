const container = document.getElementById("container");

function hover(event) {
    const cell = event.target;
    cell.style.backgroundColor = 'black';
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  const width = container.offsetWidth;
  const cellSize = width/rows;
  console.log(cellSize);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.setAttribute("style", `width:${cellSize}px 
                                height:${cellSize}px`);
    cell.addEventListener('mouseover', hover);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

function clearCells() {
    Array.prototype.forEach.call(container.children, function(child, index){
        child.style.backgroundColor = 'white';
    });
}

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener('click', clearCells);

function changeSize() {
    let x = prompt("Enter a Value (min=4, max=100)", "16");
    if (x === null) return;
    if (x < 4) x = 4;
    if (x > 100) x = 100;
    makeRows(x, x);
    clearCells();
}

const sizeBtn = document.getElementById("sizeBtn");
sizeBtn.addEventListener('click', changeSize);

