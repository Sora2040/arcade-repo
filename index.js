let mainSectionEle = document.getElementById("main-section")

let counterHeaderEle = document.getElementById("clicker-count")

let gameBoard = [];

let valueOfClickCount = 0;

function increaseClickCount(event) {
    let valueOfCellClicked = parseInt(event.target.classList[1])
    valueOfClickCount = valueOfClickCount + valueOfCellClicked;
    counterHeaderEle.textContent = valueOfClickCount
}

function buildGameBoard() {
    
}