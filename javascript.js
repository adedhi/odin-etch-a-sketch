function createGrid(size) {
    grid_container.innerHTML = "";

    let square_counter = 1;
    for (let i = 0; i < size; i++) {
        const div_row = document.createElement("div");
        div_row.setAttribute("class", "grid_row");
        div_row.setAttribute("id", "r" + (i + 1).toString());

        for (let j = 0; j < size; j++) {
            const div_square = document.createElement("div");
            div_square.setAttribute("class", "grid_square");
            div_square.setAttribute("id", "s" + square_counter.toString());
            square_counter ++;
            div_row.appendChild(div_square);
        }

        grid_container.appendChild(div_row);
    }

    const grid_squares = document.getElementsByClassName("grid_square");
    for (let i = 0; i < grid_squares.length; i++) {
        grid_squares[i].addEventListener("mouseenter", function(){squareEnter(grid_squares[i].id)});
    }
}

function squareEnter(id) {
    console.log("#" + id.toString())
    const square = document.querySelector("#" + id.toString());
    square.style.backgroundColor = "red";
}

function squareLeave(id) {
    console.log("#" + id.toString())
    const square = document.querySelector("#" + id.toString());
    square.style.backgroundColor = "transparent";
}

function resizeGrid() {
    while(true) {
        let response = prompt("Please choose a new grid size between 1 and 100: ");
        if (isNaN(response)) {
            continue;
        }
        let new_size = Number(response);
        if ((1 <= new_size) && (new_size <= 100)) {
            createGrid(new_size);
            return;
        }
    }
}

const grid_container = document.querySelector(".grid_container");
createGrid(16);

const grid_button = document.querySelector(".grid_button");
grid_button.addEventListener("click", function(){resizeGrid()})