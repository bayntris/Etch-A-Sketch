const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.justifyContent = 'center';


const grid = document.createElement('div');
grid.classList.add('grid');

console.log(container);

for (let i = 0; i < 16; i++) {
    //Create a Div Row with display of Flex
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    divRow.style.display = 'flex';
   
    
   // Add the Div Row to the grid
    grid.appendChild(divRow);

    // Add 16 Square Divs to each Div Row
    for (let j = 0; j < 16; j++) {
        const divSquare = document.createElement('div');
        divSquare.classList.add('divSquare');

        // Applying 'Hover' effect on each Square Div

        divSquare.addEventListener('mouseover', (e) => {
            // Add 'changeYellow' class to each Div Square
            divSquare.classList.add('changeYellow');
            
        })




        divRow.appendChild(divSquare);
    } 
    // Append the grid to the Container div
    container.appendChild(grid);
}