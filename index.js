let mainSectionEle = document.getElementById("main-section")

let TTTBoard = document.getElementById("TTTBoard")

let currentPlayer = "x"

let gameBoard = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
];

function clickedCell(event) {
    if (event.target.innerText == ''){
        
        console.log("we good")
    }
    console.log(event.target.innerText)
    console.log("clicked")
}

TTTBoard.addEventListener("click", clickedCell)