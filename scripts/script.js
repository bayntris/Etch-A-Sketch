const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');
const grid = document.querySelector('#grid');

const btnChangeGrid = document.querySelector('#btnChangeGrid');
const btnRetro = document.querySelector('#btnRetro');
const btnLSD = document.querySelector('#btnLSD');
const btnModern = document.querySelector('#btnModern');




function createGrid(size = 16) {
    for (let i = 0; i < size; i++) {

        // Create a Row
        const gridRow = document.createElement('div');
        gridRow.classList.add('row');
        gridRow.style.display = 'flex';
    
        // In each Row, create 16 Grid Cells
        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add('cell');
            const dynamicWidth = 600 / size;
            const dynamicHeight = 600 / size;
    
            gridCell.style.width = `${dynamicWidth}px`;
            gridCell.style.height = `${dynamicHeight}px`;
            gridCell.style.border = '1px solid black';
            

            
            gridCell.addEventListener('mouseover', changeColourRetro);
        
    
            gridRow.appendChild(gridCell);
        }
    
        grid.appendChild(gridRow);
    }
}

function createNewGrid() {
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
}


function changeColourRGB(e) {
    e.target.style.opacity = '';
    e.target.style.backgroundColor = `rgb(${getRGBColor()})`;
    

    
}

function changeColourRetro(e) {
    e.target.style.opacity = '';
    e.target.style.backgroundColor = 'grey';
    
}

function changeColourModern(e) {
    e.target.style.backgroundColor = 'grey';
    const currentOpacity = e.target.style.opacity;

    if (currentOpacity) {
        e.target.style.opacity = Number(currentOpacity) + .1;
    }
    else {
        e.target.style.opacity = '0.1';
    }
    

}



function getRGBColor() {
    let firstColour = Math.floor(Math.random() * 256);
    let secondColour = Math.floor(Math.random() * 256);
    let thirdColour = Math.floor(Math.random() * 256);
    

    return `${firstColour}, ${secondColour}, ${thirdColour}`;
}



btnLSD.addEventListener('click', function() {
    const gridCells = document.querySelectorAll('.cell');
    gridCells.forEach((element) => {
        element.removeEventListener('mouseover', changeColourRetro);
        element.removeEventListener('mouseover', changeColourModern);
        element.addEventListener('mouseover', changeColourRGB);
    });
});

btnRetro.addEventListener('click', function() {
    const gridCells = document.querySelectorAll('.cell');
    gridCells.forEach((element) => {
        element.removeEventListener('mouseover', changeColourRGB);
        element.removeEventListener('mouseover', changeColourModern);
        element.addEventListener('mouseover', changeColourRetro);
        
    });
});

btnModern.addEventListener('click', function() {
    const gridCells = document.querySelectorAll('.cell');
    gridCells.forEach((element) => {
        element.removeEventListener('mouseover', changeColourRGB);
        element.removeEventListener('mouseover', changeColourRetro);
        element.addEventListener('mouseover', changeColourModern);
    });
});



// Creates new grid with user's chosen size
btnChangeGrid.addEventListener('click', createNewGrid);



createGrid();




