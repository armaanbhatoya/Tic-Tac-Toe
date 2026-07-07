// ---------- Element references ----------
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#resetBtn");
const newBtn = document.querySelector("#newBtn");
const msgContainer = document.querySelector("#msgContainer");
const msg = document.querySelector("#msg");
const themeToggle = document.querySelector("#themeToggle");

const scoreXEl = document.querySelector("#scoreX");
const scoreOEl = document.querySelector("#scoreO");
const scoreDrawsEl = document.querySelector("#scoreDraws");
const turnMarkEl = document.querySelector("#turnMark");
const winLineContainer = document.querySelector("#winLineContainer");

// ---------- Game state ----------
let isXTurn = true;
let boardFull = () => [...boxes].every((box) => box.innerText !== "");

const scores = { X: 0, O: 0, Draws: 0 };

// Each pattern is paired with the CSS class used to draw its winning line.
const winPatterns = [
    { cells: [0, 1, 2], line: "row-0" },
    { cells: [0, 3, 6], line: "col-0" },
    { cells: [0, 4, 8], line: "diag-main" },
    { cells: [1, 4, 7], line: "col-1" },
    { cells: [2, 5, 8], line: "col-2" },
    { cells: [2, 4, 6], line: "diag-anti" },
    { cells: [3, 4, 5], line: "row-1" },
    { cells: [6, 7, 8], line: "row-2" },
];

// ---------- Core game actions ----------
const playMove = (box) => {
    box.innerText = isXTurn ? "X" : "O";
    box.classList.add(isXTurn ? "mark-x" : "mark-o");
    box.disabled = true;

    isXTurn = !isXTurn;
    updateTurnIndicator();

    const winPattern = getWinPattern();
    if (winPattern) {
        handleWin(winPattern);
    } else if (boardFull()) {
        handleDraw();
    }
};

const getWinPattern = () => {
    return winPatterns.find(({ cells }) => {
        const [a, b, c] = cells.map((i) => boxes[i].innerText);
        return a !== "" && a === b && b === c;
    });
};

const handleWin = (pattern) => {
    const winner = boxes[pattern.cells[0]].innerText;
    scores[winner] += 1;
    updateScoreboard();

    pattern.cells.forEach((i) => boxes[i].classList.add("win-cell"));
    drawWinLine(pattern.line);

    msg.innerText = `${winner} wins the round!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const handleDraw = () => {
    scores.Draws += 1;
    updateScoreboard();

    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const drawWinLine = (lineClass) => {
    const line = document.createElement("div");
    line.classList.add("win-line", lineClass);
    winLineContainer.appendChild(line);
};

// ---------- Reset helpers ----------
const clearBoard = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("mark-x", "mark-o", "win-cell");
    });
    winLineContainer.innerHTML = "";
};

const disableBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};

const startNewRound = () => {
    isXTurn = true;
    clearBoard();
    updateTurnIndicator();
    msgContainer.classList.add("hide");
};

// ---------- UI updates ----------
const updateTurnIndicator = () => {
    turnMarkEl.innerText = isXTurn ? "X" : "O";
    turnMarkEl.classList.toggle("is-o", !isXTurn);
};

const updateScoreboard = () => {
    scoreXEl.innerText = scores.X;
    scoreOEl.innerText = scores.O;
    scoreDrawsEl.innerText = scores.Draws;
};

// ---------- Event listeners ----------
boxes.forEach((box) => {
    box.addEventListener("click", () => playMove(box));
});

resetBtn.addEventListener("click", startNewRound);
newBtn.addEventListener("click", startNewRound);

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ---------- Init ----------
updateTurnIndicator();
updateScoreboard();