function boardCreate () {
    const board_coordinate = [0, 1, 2, 3, 4, 5, 6, 7];
    const board = [];

    board_coordinate.forEach((column) => {
        const coordinate = [];
        board_coordinate.forEach((row) => {
            const XY = [column , row];
            coordinate.push(XY);
        })

        board.push(coordinate);
    });

    return board;
}

export {boardCreate};