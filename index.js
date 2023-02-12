let gameBoardTTT = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
]
for (let i = 0; i < gameBoardTTT.length; i++) {
     let currentElement = gameBoardTTT[i]
     console.log(currentElement)
     for (let nestedI = 0; nestedI < currentElement.length; nestedI++) {
     let nestedElement = currentElement[nestedI];
    console.log(nestedElement)
     }
}