// variables
const DEFAULT_COLOR = "white";
const DEFAULT_PICKER_COLOR = "black";
const DEFAULT_SIZE = 16;

let currentPickerColor = DEFAULT_PICKER_COLOR;
let currentSize = DEFAULT_SIZE;

const grid = document.getElementById('grid');
const slider = document.getElementById('slider');
const colorPicker = document.getElementById('color-picker');
const sliderValue = document.getElementById('slider-value');
const rainbowBtn = document.getElementById('rainbow-button');
const clearBtn = document.getElementById('clear-button');


// event listeners
slider.oninput = (e) => updateSize(e.target.value);
colorPicker.oninput = (e) => updateColor(e.target.value);


// update size
function updateSize(newSize) {
    currentSize = newSize;
    sliderValue.innerHTML = `${currentSize} x ${currentSize}`
    clearGrid();
    setupGrid(currentSize);
}

// update color
function updateColor(newColor) {
    currentPickerColor = newColor;
}

// clear grid 
function clearGrid() {
    grid.innerHTML = "";
}

// setup grid
function setupGrid(num) {
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`
    for (i = 0; i < num * num; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.background = DEFAULT_COLOR;
        gridItem.addEventListener('mouseover', colorSquare);
        grid.appendChild(gridItem);
    }
}

// change the color of each square
function colorSquare(e) {
    e.target.style.background = currentPickerColor;
}


// on load
window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}






