const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');
const grid = document.querySelector('#grid');



for (let i = 0; i < 16; i++) {

    // Create a Row
    const gridRow = document.createElement('div');
    gridRow.style.display = 'flex';

    // In each Row, create 16 Grid Cells
    for (let j = 0; j < 16; j++) {
        const gridCell = document.createElement('div');
        gridCell.style.height = '20px';
        gridCell.style.width = '20px';
        gridCell.style.border = '1px solid black';

        gridRow.appendChild(gridCell);
    }

    grid.appendChild(gridRow);
}

