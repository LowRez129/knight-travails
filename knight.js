import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';

function knightMoves (start = [0, 0], end = [7, 7]) {

}

function moveFactory (root = knightFactory()) {
    root.printAttributes();
}

const knight = knightFactory([7, 7]);
moveFactory(knight);