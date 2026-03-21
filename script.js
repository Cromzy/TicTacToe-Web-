// Selects all elements with class cell and stores them in a list I can loop through.
const cells = document.querySelectorAll(".cell");
const playerTurn = document.getElementById("playerTurn");

let moves = 0;
let label = "X";
playerTurn.textContent = `Turn player: ${label}`;

// For every cell… do this (simple for loop)
cells.forEach(function(cell){
    // When this cell is clicked, run handleClick
    cell.addEventListener("click", handleClick);
});

// when a cell is clicked → run handleClick
function handleClick(event) {
    // This is the thing that was clicked
    const cell = event.target;

    // store index of clicked cell
    const index = cell.dataset.index;

    // If this cell is already X or O?
    if (cell.textContent === "X" || cell.textContent === "O") {
        alert("Full, Choose a different cell!");
        // Stop the function immediately
        return; 
    }
    // Put the current player’s symbol in the clicked cell (X or O)
    cell.textContent = label;
    label = switchTurns(label);
    moves++;
    draw();
}

function draw() {
    if (moves > 8) {
        alert("game is draw!");
        return true;
    } return false
}

function switchTurns(s) {
    if (s === "X") {
        playerTurn.textContent = `Turn player: O`;
        return "O";
    }
    else {
        playerTurn.textContent = `Turn player: X`;
        return "X";
    }

}

function checkGameOver() {

}

function checkRows() {

}
function checkRColumns() {

}
function checkTopLeftToBottomRight() {

}
function checkTopRightToBottomLeft() {

}

