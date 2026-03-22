// Selects all elements with class cell and stores them in a list I can loop through.
const cells = document.querySelectorAll(".cell");
const playerTurn = document.getElementById("playerTurn");
const resetBtn = document.getElementById("resetBtn");

let moves = 0;
let label = "X";
let result = [];
playerTurn.textContent = `Turn player: ${label}`;

resetBtn.addEventListener("click", resetGame);

function resetGame() {
    cells.forEach(function (cell) {
        cell.textContent = ""; // reset all cells
    });
    cellDisabled(cells, false); // enable cells
    moves = 0; // reset moves
    label = "X"; // reset label
    playerTurn.textContent = `Turn player: ${label}`; // reset label text

    // for each cell in result, remove complete css class
        result.forEach(function(index) {
            cells[index].classList.remove("complete");
        });
        result.length = 0; // empty array
}
// For every cell… do this (simple for loop)
cells.forEach(function (cell) {
    // When this cell is clicked, run handleClick
    cell.addEventListener("click", handleClick);
});

// when a cell is clicked → run handleClick
function handleClick(event) {
    // This is the cell that was clicked
    const cell = event.target;

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

// creates an array with the current cell values
function createArray(cells) {
    let num = []; // 
    cells.forEach(function (cell) {
        num.push(cell.textContent);
    });
    return num;
}

function checkDraw() {
    return moves > 8; // returns true or false
}

function switchTurns(s) {

    if (s === "X") {
        playerTurn.textContent = `Turn player: O`;
        return "O";
    }
    // else
        playerTurn.textContent = `Turn player: X`;
        return "X";

}

function checkGameOver(board) {
    let winner = false;
    let draw = false;
    console.log("CHECK 1!");

    // Get return value (either array or false)
    let rowResult = checkRows(board);
    let columnResult = checkColumns(board);
    let topLeftToBottomRightResult = checkTopLeftToBottomRight(board);
    let topRightToBottomLeftResult = checkTopRightToBottomLeft(board);
    let drawResult = checkDraw();

    // if-statement, checks which returned an array/true value(draw or array)
    if (rowResult) {
        winner = true; // set winner flag to true
        result = rowResult; // set result array = returned cell indexes
    }
    else if (columnResult) {
        winner = true; // set winner flag to true
        result = columnResult; // set result array = returned cell indexes
    }
    else if (topLeftToBottomRightResult) {
        winner = true; // set winner flag to true
        result = topLeftToBottomRightResult; // set result array = returned cell indexes
    }
    else if (topRightToBottomLeftResult) {
        winner = true; // set winner flag to true
        result = topRightToBottomLeftResult; // set result array = returned cell indexes
    }
    else if (drawResult) {
        draw = true; // set draw flag to true
    }

    if (winner) {
        playerTurn.textContent = `Winner: ${label}`;
        console.log("CHECK 2!");
        // for each cell in result, add complete css class
        result.forEach(function(index) {
            cells[index].classList.add("complete");
        });
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
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
        return [0, 1, 2];
    }
    else if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
        return [3, 4, 5];
    }
    else if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
        return [6, 7, 8];
    }
    return false;
}
function checkColumns(board) {
    if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
        return [0, 3, 6];
    }
    else if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
        return [1, 4, 7];
    }
    else if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
        return [2, 5, 8];
    }
    return false;
}
function checkTopLeftToBottomRight(board) {
    if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
        return [0, 4, 8];
    }
    return false;
}
function checkTopRightToBottomLeft(board) {
    if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
        return [2, 4, 6];
    }
    return false;
}