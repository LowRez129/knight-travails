//import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';


function knightMove (start, end) {
    if (start == [null].toString()) {return null};
    const knight = knightFactory(start);
    const move_queue = [];
    const edgelist = [];
    
    let count = 0;
    let current;
    while (current != end.toString()) {
        const move = [
            knight.getUpLeft(), knight.getUpRight(), knight.getDownLeft(), knight.getDownRight(),
            knight.getLeftUp(), knight.getLeftDown(), knight.getRightUp(), knight.getRightDown()
        ];

        move.forEach((element) => {
            if (element != [null].toString()) {
                edgelist.push([count, element]);
                move_queue.push(element);
            };
        });

        const move_queue_shift = move_queue[count];
        knight.setPosition(move_queue_shift);
        current = move_queue_shift;
        count++;
    }

    console.log(move_queue);
    console.log(edgelist);
}

const TREE = knightMove([0, 0], [3, 3]);