import {boardCreate} from './boardCreate.js';

const board = boardCreate()

const moveFactory = (column, row) => {
    let current_position = {column, row};
    // +2C, -R, +R
    let up_left_right = {up: (column + 2), left: (row - 1), right: (row + 1)};
    // -2C, -R, +R
    let down_left_right = {down: (column + 2), left: (row - 1), right: (row + 1)};
    // -2R, +C, -C]
    let left_up_down = {left: (column - 2), up: (row + 1), down: (row - 1)};
    // +2R, +C, -C
    let right_up_down = {right: (column + 2), up: (row + 1), down: (row - 1)}; 

    
    const getUpLeftRight = () => {return up_left_right};
    const getDownLeftRight = () => {return down_left_right};
    const getLeftUpDown = () => {return left_up_down};
    const getRightUpDown = () => {return right_up_down};

    return {getUpLeftRight, getDownLeftRight, getLeftUpDown, getRightUpDown};
}   

function knightMove (column, row) {
    const moves = moveFactory(column, row);
    console.log(moves.getUpLeftRight());
    console.log(moves.getDownLeftRight());
}

knightMove(0, 0);
console.log(board[7][7]);