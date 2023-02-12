let gameBoardTTT = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
]
for (let i = 0; i < gameBoardTTT.length; i++) {
    let currentRow = gameBoardTTT[i]; 
    let xTracker
    let oTracker
    for (let j = 0; j < gameBoardTTT.length; j++) {
        if (currentRow[j] == "X") {
            xTracker = xTracker + 1
        } else {
             oTracker = oTracker + 1
        }
    }
}
