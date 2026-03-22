// Selects all elements with class cell and stores them in a list I can loop through.
const cells = document.querySelectorAll(".cell");
const playerTurn = document.getElementById("playerTurn");

let moves = 0;
let label = "X";
playerTurn.textContent = `Turn player: ${label}`;

// For every cell… do this (simple for loop)
cells.forEach(function (cell) {
    // When this cell is clicked, run handleClick
    cell.addEventListener("click", handleClick);
});

// when a cell is clicked → run handleClick
function handleClick(event) {
    // This is the cell that was clicked
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
    moves++;
    cell.textContent = label;
    // intialize board with current cells
    let board = createArray(cells);
    if (checkGameOver(board)) return;
    label = switchTurns(label);
}

function createArray(cells) {
    let num = [];
    cells.forEach(function (cell) {
        num.push(cell.textContent);
    });
    return num;
}

function checkDraw() {
    if (moves > 8) 
        return true
    else
        return false
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

function checkGameOver(board) {
    let winner = false;
    let draw = false;
    console.log("CHECK 1!");

    if (checkRows(board)) winner = true;
    else if (checkColumns(board)) winner = true;
    else if (checkTopLeftToBottomRight(board)) winner = true;
    else if (checkTopRightToBottomLeft(board)) winner = true;
    else if (checkDraw()) draw = true;

    if (winner) {
        playerTurn.textContent = `Winner: ${label}`;
        console.log("CHECK 2!");
        cellDisabled(cells, true);
        return true;
    }

    if (draw) {
        playerTurn.textContent = `Game is a draw`;
        console.log("CHECK 3!");
        cellDisabled(cells, true);
        return true;
    }
    return false;
}

function cellDisabled(cells, boolValue) {
    cells.forEach(function (cell) {
        cell.disabled = boolValue; // disable all cells when game is ended
    });
}

function checkRows(board) {
    if (board[0] === "X" && board[1] === "X" && board[2] === "X" ||
        board[0] === "O" && board[1] === "O" && board[2] === "O") {
        return true;
    }
    else if (board[3] === "X" && board[4] === "X" && board[5] === "X" ||
        board[3] === "O" && board[4] === "O" && board[5] === "O") {
        return true;
    }
    else if (board[6] === "X" && board[7] === "X" && board[8] === "X" ||
        board[6] === "O" && board[7] === "O" && board[8] === "O") {
        return true;
    }
    return false;
}
function checkColumns(board) {
    if (board[0] === "X" && board[3] === "X" && board[6] === "X" ||
        board[0] === "O" && board[3] === "O" && board[6] === "O") {
        return true;
    }
    else if (board[1] === "X" && board[4] === "X" && board[7] === "X" ||
        board[1] === "O" && board[4] === "O" && board[7] === "O") {
        return true;
    }
    else if (board[2] === "X" && board[5] === "X" && board[8] === "X" ||
        board[2] === "O" && board[5] === "O" && board[8] === "O") {
        return true;
    }
    return false;
}
function checkTopLeftToBottomRight(board) {
    if (board[0] === "X" && board[4] === "X" && board[8] === "X" ||
        board[0] === "O" && board[4] === "O" && board[8] === "O") {
        return true;
    }
    return false;
}
function checkTopRightToBottomLeft(board) {
    if (board[2] === "X" && board[4] === "X" && board[6] === "X" ||
        board[2] === "O" && board[4] === "O" && board[6] === "O") {
        return true;
    }
    return false;
}