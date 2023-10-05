const gameBoard = () => {
    const board = document.querySelector('.main-board')
    let startLocation = [0, 0]          //Default location of Knight
    let coordinatesArray = []


    for (let rows = 0; rows < 8; rows++) {
        let boxColor;
        let boxWhite = rows % 2 === 0 ? true : false
        let rowCoord = rows

        for (let columns = 0; columns < 8; columns++) {
            const cell = document.createElement('div')
            let columnCoord = columns


            if (boxWhite) {
                boxColor = columns % 2 === 0 ? 'black' : 'white'
            } else {
                boxColor = columns % 2 === 0 ? 'white' : 'black'
            }
            coordinatesArray.push(rowCoord, columnCoord);
            // Set coordinates as a dataset attribute on the cell
            cell.dataset.coordinates = JSON.stringify([rowCoord, columnCoord]);

            cell.style.backgroundColor = boxColor
            cell.classList.add('grid-cell')
            board.appendChild(cell)

        }
    }

    const cells = document.querySelectorAll('.grid-cell')
    cells.forEach(cell => {
        if (cell.dataset.color === 'white') {
            console.log('Hello world!')
        }
    })

}


export { gameBoard }