const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');
const grid = document.querySelector('#grid');

const btnChangeGrid = document.querySelector('#btnChangeGrid');


// Creates new grid with user's chosen size
btnChangeGrid.addEventListener('click', function() {
    let size;
    do {
        size = +prompt("Please enter the desired size of the grid\ne.g Entering '20' will create a 20x20 grid", "");

        if (size > 100) {
            size = +prompt("Sorry, the number must be 100 or under, please enter a valid number", "");
        }
    } while (size > 100);

    // Remove everything from existing Grid
    grid.innerHTML = '';

    
    createGrid(size);

});

function createGrid(size = 16) {
    for (let i = 0; i < size; i++) {

        // Create a Row
        const gridRow = document.createElement('div');
        gridRow.style.display = 'flex';
    
        // In each Row, create 16 Grid Cells
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement('div');
            const dynamicWidth = 600 / size;
            const dynamicHeight = 600 / size;
    
            gridCell.style.width = `${dynamicWidth}px`;
            gridCell.style.height = `${dynamicHeight}px`;
            
            //gridCell.style.flex = '1';
           // gridCell.style.height = '20px';
           // gridCell.style.width = '20px';
            gridCell.style.border = '1px solid black';

            // Add hover effect over each Grid Cell
            gridCell.addEventListener('mouseover', function(e) {
                gridCell.style.backgroundColor = 'grey';
            });
    
            gridRow.appendChild(gridCell);
        }
    
        grid.appendChild(gridRow);
    }
}


function getRGBColor {
    let firstColour = Math.floor(Math.random() * 255);
}

createGrid();


