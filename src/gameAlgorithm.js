import { showMoves } from "./show-moves"

const squareRegistry = new Map()

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

    if (squareRegistry.has(coordName())) {
        return squareRegistry.get(coordName())
    } else {
        const newSquare = { coordName, getPredecessor, setPredecessor, possibleMoves }
        squareRegistry.set(coordName(), newSquare)
        return newSquare
    }
}

const knightTravails = (start, finish) => {
    squareRegistry.clear()

    const origin = chessSquare(...start)
    const target = chessSquare(...finish)

    const queue = [origin]

    while (!queue.includes(target)) {
        const currentSquare = queue.shift();

        const enqueueList = currentSquare.possibleKnightMoves();
        enqueueList.forEach((square) => square.setPredecessor(currentSquare));
        queue.push(...enqueueList);
    }
    const path = [target]
    while (!path.includes(origin)) {
        const prevSquare = path[0].getPredecessor();
        path.unshift(prevSquare);
    }
    let squareCoord = [];
    path.forEach((square) => {
        // console.log(square.name());
        squareCoord.push(square.name());
    });
    // console.log(squareCoord);
    showMoves(path, squareCoord);

}

export { knightTravails }