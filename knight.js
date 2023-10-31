import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';

function knightMoves (start = [0, 0], end = [7, 7]) {

}

function moveFactory (root = knightFactory()) {
    root.printAttributes()
    let up_left = knightFactory(root.getUpLeftRight()[0]);
    let up_right = knightFactory(root.getUpLeftRight()[1]);
    let down_left_right;
    let left_up_down;
    let right_up_down;

    console.log(up_left);
    console.log(up_right.printAttributes());
}

const knight = knightFactory([0, 0]);
moveFactory(knight);