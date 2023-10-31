import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';

function knightMoves (start = [0, 0], end = [0, 0]) {
    const board = boardCreate()
    const knight = knightFactory(start[0], start[1]);

    knight.printAttributes();
    //knight.setPosition(knight.getUpLeftRight()[0], knight.getUpLeftRight()[1][1]);
    //knight.printAttributes();
    //console.log(board[7][7]);
}

knightMoves([0, 2], [3, 5]);
