

const chessSquare = (x, y) => {
    const xPosition = x
    const yPosition = y
    let predecessor


    //Possible moves of Knight
    const knightMoves = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]

    const getPredecessor = () => predecessor
    const setPredecessor = (newPredecessor) => {
        predecessor = predecessor || newPredecessor
    }

    const coordName = () => `${x}, ${y}`

    const possibleMoves = () => {
        return knightMoves
            .map((offset) => newSquareForm(offset[0], offset[1]))
            .filter(square => square !== undefined)     //in order to remove cells that extend beyond the boundaries of the chessboard
    }

    const newSquareForm = (xOffset, yOffset) => {
        const [newXPosition, newYPosition] = [xPosition + xOffset, yPosition + yOffset]
        if (0 <= newXPosition && newXPosition < 8 && 0 <= newYPosition && yPosition < 8) {
            return chessSquare(newXPosition, newYPosition)
        }
    }
}


export { chessSquare }