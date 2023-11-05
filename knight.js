//import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';

function knightMove (start, end) {
    if (start.toString() == [null].toString()) {return};
    const knight = knightFactory(start);
    const end_string = end.toString();
    const path = [[3, 3]];
    const move_queue = [];

    while (true) {
        const move_check = [];
        move_check.push(
            knight.getUpLeft(), knight.getUpRight(), knight.getDownLeft(), knight.getDownRight(),
            knight.getLeftUp(), knight.getLeftDown(), knight.getRightUp(), knight.getRightDown()
        );

        for (let i = 0; i < 7; i++) {
            if (move_check[i] == end.toString()) {
                path.push(move_check[i]);
                console.log(path);
                return;
            }
        }

        move_queue.push(
            knight.getUpLeft(), knight.getUpRight(), knight.getDownLeft(), knight.getDownRight(),
            knight.getLeftUp(), knight.getLeftDown(), knight.getRightUp(), knight.getRightDown()
        );
        
        const move_queue_pop = move_queue.shift();
        
        if (move_queue_pop.toString() != [null].toString()) {
            knight.setPosition(move_queue_pop);
            if (knight.getCurrentPosition().toString() != [null]) {
                path.push(knight.getCurrentPosition());
            };
        };
    }
}

knightMove([3, 3], [7, 2]);