let container = document.querySelector('#container');

for (i = 0; i < 256; i++) {
    const gridUnit = document.createElement('div');
    gridUnit.classList.add('gridUnit');
    gridUnit.setAttribute('id', 'grid' + i);
    container.appendChild(gridUnit);
    let gridNo = document.getElementById('grid' + i);
    gridNo.addEventListener("mouseenter", function( event ) {
        console.log("test")
        event.target.style.backgroundColor = "black";
    });
}

let reset = document.getElementById("reset"); // Find the paragraph element in the page
reset.onclick = showAlert; // Add onclick function to element

function showAlert(event) {
    for (n = 0; n < 256; n++) {
        let gridNo = document.getElementById('grid' + n);
        gridNo.style.backgroundColor = "white";

    }
    let newGridX = prompt("Size of new grid (16 - 100", "16");
    if (newGridX < 101 && newGridX > 15){
        let newGrid = newGridX * newGridX;
        document.querySelectorAll('.gridUnit').forEach(e => e.remove());
        container = document.getElementById('container');
        container.style.gridTemplateColumns = `repeat(${newGridX}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${newGridX}, 1fr)`;

        for (i = 0; i < newGrid; i++) {
            const gridUnit = document.createElement('div');
            gridUnit.classList.add('gridUnit');
            gridUnit.setAttribute('id', 'grid' + i);
            container.appendChild(gridUnit);
            let gridNo = document.getElementById('grid' + i);
            gridNo.addEventListener("mouseenter", function( event ) {
                console.log("test")
                event.target.style.backgroundColor = "black";
        });
        }
    }   else {alert("Wrong size, please try again.");}
}

let colors = document.getElementById("colors"); // Find the paragraph element in the page
colors.onclick = colorShowAlert; // Add onclick function to element

function colorShowAlert(event) {
    for (n = 0; n < 256; n++) {
        let gridNo = document.getElementById('grid' + n);
        gridNo.style.backgroundColor = "white";

    }
    let newGridX = prompt("Size of new grid (16 - 100", "16");
    if (newGridX < 101 && newGridX > 15){
        let newGrid = newGridX * newGridX;
        document.querySelectorAll('.gridUnit').forEach(e => e.remove());
        container = document.getElementById('container');
        container.style.gridTemplateColumns = `repeat(${newGridX}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${newGridX}, 1fr)`;

        for (i = 0; i < newGrid; i++) {
            const gridUnit = document.createElement('div');
            gridUnit.classList.add('gridUnit');
            gridUnit.setAttribute('id', 'grid' + i);
            container.appendChild(gridUnit);
            let gridNo = document.getElementById('grid' + i);
            gridNo.addEventListener("mouseenter", function( event ) {
            let colors = ['#b676b1',
                '#82caaf',
                '#75c0e0',
                '#fecf6a',
                '#39a275',
                '#df1c44',
                '#8F3985',
                '#194a8d'];
            let random_color = colors[Math.floor(Math.random() * colors.length)];
                
            event.target.style.backgroundColor = random_color;
        });
        }
    }   else {alert("Wrong size, please try again.");}
}