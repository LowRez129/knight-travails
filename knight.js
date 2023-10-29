import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';

const board = boardCreate()
const knight = knightFactory(7, 7);
console.log(knight.getCurrentPosition());
knight.setPosition(2, 2);
console.log(knight.getCurrentPosition());
//console.log(board[7][7]);