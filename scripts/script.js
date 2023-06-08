const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.justifyContent = 'center';


const grid = document.createElement('div');
grid.classList.add('grid');

console.log(container);

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('div');
    div.style.display = 'flex';
    
   
    grid.appendChild(div);

    for (let j = 0; j < 16; j++) {
        const divSquare = document.createElement('div');
        divSquare.classList.add('divSquare');
        div.appendChild(divSquare);
    }

    container.appendChild(grid);
}