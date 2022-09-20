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
const normalBtn = document.getElementById('normal-button');

let mode = "normal";


// event listeners
slider.oninput = (e) => updateSize(e.target.value);
colorPicker.oninput = (e) => updateColor(e.target.value);

// extra buttons for fun
clearBtn.onclick = () => updateSize(currentSize);
rainbowBtn.onclick = () => rainbowMode();
normalBtn.onclick = () => normalMode();

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
    if (mode === "normal") {
        e.target.style.background = currentPickerColor;
    }
    else if (mode === "rainbow") {
        let color = rainbowMode();
        e.target.style.background = color;
    }
}


function normalMode() {
    mode = "normal";
}
// rainbow mode
function rainbowMode() {
    mode = "rainbow";
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r},${g},${b})`
    return rgb;
}


// on load
window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}






