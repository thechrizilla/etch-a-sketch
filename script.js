// variables
const DEFAULT_COLOR = "white";
const DEFAULT_PICKER_COLOR = "black";
const DEFAULT_SIZE = 16;



let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;



const grid = document.getElementById('grid');
const colorPicker = document.getElementById('color-picker');
const slider = document.getElementById('slider');

//getting size from user
// slider.addEventListener('input', function(e) {
//     console.log(e.target.value);
//     setupGrid(e.target.value, e.target.value);
// })

// getting color from user
colorPicker.addEventListener('input', function(e) {
    currentColor = e.target.value;
})



// setup grid
function setupGrid(rows, cols) {
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    for (i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.background = currentColor;
        gridItem.addEventListener('mouseover', colorSquare);
        grid.appendChild(gridItem);
    }
}

setupGrid(64, 64);



// change the color of each square
function colorSquare(e) {
    e.target.style.background = currentColor;

}


