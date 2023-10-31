import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';

function knightMoves (start = [0, 0], end = [7, 7]) {
    const board = boardCreate()
    const knight = knightFactory(start);

    knight.printAttributes();
    knight.setPosition();
}

knightMoves();
