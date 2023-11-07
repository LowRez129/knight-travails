//import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';
import { edgeFactory } from './edgeFactory.js';


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
            const index = move.indexOf(element);
            for (let i in move_queue) {
                if (move_queue[i] == element.toString()) {
                    move.splice(index, 1);
                };
            };

        });

        move.forEach((element) => {
            if (element != [null].toString()) {
                const vertices = edgeFactory(knight.getCurrentPosition(), element);
                edgelist.push(vertices);
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
    return {move_queue, edgelist};
}

const TREE = knightMove([0, 0], [3, 3]);

function breathFirstSearch () {

}
