let randomColors = false;
let opaqueColors = true;
let gridSize = 16;

function onCellHover(event) {
    const target = event.target;
    let color;

    if (randomColors) {
        color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        color = "black";
    }

    if (!opaqueColors) {
        target.style.opacity = +target.style.opacity + 0.1;
    }

    target.style.backgroundColor = color;
    console.log(target.style.opacity);
}

function onResize() {
    const newSize = Math.min(+prompt("Insert desired grid side length"), 100);

    removeGrid();
    initGrid(newSize);
}

function initGrid(gridSize) {
    const container = document.querySelector(".container");

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        i
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", onCellHover);
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

function removeGrid() {
    const container = document.querySelector(".container");
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => container.removeChild(row));
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#resize").addEventListener("click", onResize);
    document.querySelector("#random").addEventListener("click", () => {
        randomColors = !randomColors;
    });
    document.querySelector("#opaque").addEventListener("click", () => {
        opaqueColors = !opaqueColors;
    });
    initGrid(gridSize);
})