/*

1. Create default 16x16 grid upon loading page
2. Change background color of page if mouse is hovering over spot on page
3. If user clicks button at top of screen, prompt user for new grid size *how many squares on each side*

*** THINGS TO REMEMBER ***
- Give each square in the grid a class to allow CSS styling
- Set user input limit to 100 squres per side
- New grid should take up same amount of space as old grid, with the only difference being in square density

*/

// Store HTML elements for access
let newGridButton = document.querySelector('#new-grid');
let mainContainer = document.querySelector('#main-container');

// Initial grid size
let initialSize = 16;

// Make initial 16x16 grid
makeGrid(initialSize);

// Listen for a click of 'New Grid' button
newGridButton.addEventListener('click', size => {
    let newSize = 0;
    do {
        newSize = parseInt(prompt('New grid size (limit 100):'), 10);
    } while (newSize > 100 || newSize < 0);

    makeGrid(newSize);
});

function makeGrid(size) {
    document.querySelectorAll('.square').forEach(square => {
        square.remove();
    });

    let gridArea = size * size;
    let containerHeight = 600;
    let containerWidth = 600;
    for (let i = 0; i < gridArea; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        square.style.height = `${containerHeight / size}px`;
        square.style.width = `${containerWidth / size}px`;
        square.addEventListener('mouseover', colorSquare);
        mainContainer.appendChild(square);
    }
}

function colorSquare(e) {
    e.target.style.backgroundColor = `rgb(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()})`;
}

function getRandomColorValue() {
    // Min and max RGB values
    let min = 0;
    let max = 255;

    return Math.floor(Math.random() * (max - min + 1)) + min;
}