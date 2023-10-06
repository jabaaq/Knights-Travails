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


            coordinatesArray.push([rowCoord, columnCoord]);
            cell.dataset.coordinates = JSON.stringify([rowCoord, columnCoord]);


            cell.style.backgroundColor = boxColor
            cell.classList.add('grid-cell')
            board.appendChild(cell)
        }
    }

    const cells = document.querySelectorAll('.grid-cell')
    cells.forEach(cell => {
        let cellNode = JSON.parse(cell.dataset.coordinates);


        if (arraysEqual(startLocation, cellNode)) {

            let knightImg = document.createElement('img');
            cell.style.backgroundColor = '#d2d0d091'
            knightImg.src = '/img/horse-knight-chess-png.webp';
            cell.appendChild(knightImg);
        }
    });

    // Function to compare two arrays for equality
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }


}


export { gameBoard }