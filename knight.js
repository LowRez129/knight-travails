import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';

function knightMoves (start = [0, 0], end = [7, 7]) {

}

function moveFactory (root = knightFactory()) {
    const ULR = root.getUpLeftRight();
    const DLR = root.getDownLeftRight();
    const LUD = root.getLeftUpDown();
    const RUD = root.getRightUpDown();

    const up_left = knightFactory(ULR.up_left);
    const up_right = knightFactory(ULR.up_right);
    const down_left = knightFactory(DLR.down_left);
    const down_right = knightFactory(DLR.down_right);
    const left_up = knightFactory(LUD.left_up);
    const left_down = knightFactory(LUD.left_down);
    const right_up = knightFactory(RUD.right_up);
    const right_down = knightFactory(RUD.right_down);

    console.log(up_left);
    console.log(up_right.printAttributes());
}

const knight = knightFactory([0, 0]);
knight.printAttributes()
moveFactory(knight);