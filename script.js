const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");
const cell7 = document.getElementById("cell7");
const cell8 = document.getElementById("cell8");
const cell9 = document.getElementById("cell9");
const playerTurn = document.getElementById("playerTurn");

let moves = 0;
let label = "X";
playerTurn.textContent = `Turn player: ${label}`;

cell1.onclick = function () {
    if (cell1.textContent === "X" || cell1.textContent === "O") {
        alert("Full, Choose a different cell!");
        return;
    }
    cell1.textContent = label;
    label = switchTurns(label);
    draw(moves);
}
cell2.onclick = function () {
    if (cell2.textContent === "X" || cell2.textContent === "O") {
        alert("Full, Choose a different cell!");
        return;
    }
    cell2.textContent = label;
    label = switchTurns(label);
    draw(moves);
}
cell3.onclick = function () {
    if (cell3.textContent === "X" || cell3.textContent === "O") {
        alert("Full, Choose a different cell!");
        return;
    }
    cell3.textContent = label;
    label = switchTurns(label);
    draw(moves);
}
cell4.onclick = function () {
    if (cell4.textContent === "X" || cell4.textContent === "O") {
        alert("Full, Choose a different cell!");
        return;
    }
    cell4.textContent = label;
    label = switchTurns(label);
    draw(moves);
}
cell5.onclick = function () {
    if (cell5.textContent === "X" || cell5.textContent === "O") {
        alert("Full, Choose a different cell!");
        return;
    }
    cell5.textContent = label;
    label = switchTurns(label);
    draw(moves);
}
cell6.onclick = function () {
    if (cell6.textContent === "X" || cell6.textContent === "O") {
        alert("Full, Choose a different cell!");
        return;
    }
    cell6.textContent = label;
    label = switchTurns(label);
    draw(moves);
}
cell7.onclick = function () {
    if (cell7.textContent === "X" || cell7.textContent === "O") {
        alert("Full, Choose a different cell!");
        return;
    }
    cell7.textContent = label;
    label = switchTurns(label);
    draw(moves);
}
cell8.onclick = function () {
    if (cell8.textContent === "X" || cell8.textContent === "O") {
        alert("Full, Choose a different cell!");
        return;
    }
    cell8.textContent = label;
    label = switchTurns(label);
    draw(moves);
}
cell9.onclick = function () {
    if (cell9.textContent === "X" || cell9.textContent === "O") {
        alert("Full, Choose a different cell!");
        return;
    }
    cell9.textContent = label;
    label = switchTurns(label);
    draw(moves);
}

function draw(moves) {
    if(moves > 8) {
        alert("game is draw!");
        return true;
    } return false
}


function switchTurns(s) {
    moves++;
    if (s === "X"){
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

