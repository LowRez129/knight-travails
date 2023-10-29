import {boardCreate} from './boardCreate.js';

const board = boardCreate()

const moveFactorr = (column, row) => {
    let current_position = {};
    // +2C, -R, +R
    let up_left_right = {};
    // -2C, -R, +R
    let down_left_right = {};
    // -2R, +C, -C
    let left_up_down = {};
    // +2R, +C, -C
    let right_up_down = {};

    const setPosition = (c, r) => {
        current_position = {column: c, row: r};
        up_left_right = {up: (c + 2), left: (r - 1), right: (r + 1)};
        down_left_right = {down: (c - 2), left: (r - 1), right: (r + 1)};
        left_up_down =  {left: (c - 2), up: (r + 1), down: (r - 1)};
        right_up_down = {right: (c + 2), up: (r + 1), down: (r - 1)}; 
    } 

    setPosition(column, row);

    const getCurrentPosition = () => {return current_position};
    const getUpLeftRight = () => {return up_left_right};
    const getDownLeftRight = () => {return down_left_right};
    const getLeftUpDown = () => {return left_up_down};
    const getRightUpDown = () => {return right_up_down};

    return {
        getCurrentPosition, getUpLeftRight, getDownLeftRight, getLeftUpDown, getRightUpDown,
        //setUpLeftRight, setDownLeftRight, setLeftUpDown, setRightUpDown,
    };
}   

function knightMove (column, row) {
    const moves = moveFactorr(column, row);
    console.log(moves.getCurrentPosition());
    console.log(moves.getUpLeftRight());
    console.log(moves.getDownLeftRight());
}

knightMove(3, -1);
knightMove(0 , 1);
//console.log(board[7][7]);