//Grid creation
function paint() {
    grid.style.backgroundColor = "#99edc3";
}
let mouseCheck = false;
document.addEventListener('mousedown', () => {
    console.log("MouseDOWN-Beforehand: " + mouseCheck)
    let x = document.querySelector('#mousechecker');
    x.textContent = "mousecheck: true";
    mouseCheck = true;
    console.log("MouseDOWN-after: " + mouseCheck);
    console.log("")
})

document.addEventListener('mouseup', () => {
    console.log("MouseUP-Beforehand: " + mouseCheck)
    let x = document.querySelector('#mousechecker');
    x.textContent = "mousecheck: false";
    mouseCheck = false;
    console.log("MouseUP-after: " + mouseCheck);
    console.log("");

});

function grid_creation(width,height) {
    let container = document.querySelector('.container');
    while (container.firstChild !== null) {
      container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < height; i++) {
        let grid_row = document.createElement('div');
        grid_row.classList.add("square-row");
        for (let j = 0; j < width; j++) {
            let grid = document.createElement('div');
            grid.classList.add("square");

            // grid.onmouseenter = () => {
            //     console.log("PaintCheck: " + mouseCheck);
            //     if (mouseCheck) {
            //         let x = document.querySelector('#paintcheck');
            //         // x.textContent = "Paint Check: true";
            //         grid.style.backgroundColor = "#99edc3";
            //     } else {
            //         let x = document.querySelector('#paintchecker');
            //         // x.textContent = "Paint Check: false";
            //     }
            // }

            grid.onmouseover = () => {
                grid.style.backgroundColor = "#99edc3";
            }
            

            grid_row.appendChild(grid);
        }
        container.appendChild(grid_row);
    }
}



//Button Logic

const btn = document.querySelector("#grid-button");

function gridNumberObtainer() {
    while (true) {
        let width_size = prompt("Enter number for grid width: ");
        if (parseInt(width_size) >= 101) {
            alert("Invalid number, highest number is 100");
            continue;
        }
        let height_size = prompt("Enter number for grid height: ");
        if (parseInt(height_size) >= 101) {
            alert("Invalid number, highest number is 100");
            continue;
        } 

        let dimArray = [width_size,height_size];
        return dimArray;
    }
}

btn.addEventListener('click', () => {
    let x = gridNumberObtainer();
    grid_creation(x[0],x[1]);
});