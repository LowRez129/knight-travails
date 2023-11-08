//import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';
import { edgeFactory } from './edgeFactory.js';
import { linkedList } from './linkedList.js';


function knightMove (start, end) {
    if (start == [null].toString()) {return null};
    const knight = knightFactory(start);
    const move_queue = [start];
    const edgelist = [];
    const move_nodes = [];
    
    let count = 0;
    while (true) {
        let exit = false;
        const move = [
            knight.getUpLeft(), knight.getUpRight(), knight.getDownLeft(), knight.getDownRight(),
            knight.getLeftUp(), knight.getLeftDown(), knight.getRightUp(), knight.getRightDown()
        ];

        for (let i in move) {
            if (move[i] == end.toString()) {
                move_queue.splice(edgelist.length, move_queue.length);
                console.log(move_queue);
                console.log(edgelist);
                exit = true;
                break;
            };
        }
        if (exit == true) {break};

        move.forEach((element) => {
            const index = move.indexOf(element);
            for (let i in move_queue) {
                if (move_queue[i] == element.toString()) {
                    move.splice(index, 1);

                    break;
                };
            };

        });

        let positions = [];
        move.forEach((element) => {
            if (element != [null].toString()) {
                //const vertices = edgeFactory(knight.getCurrentPosition(), element);
                //edgelist.push(vertices);
                positions.push(element);
                move_queue.push(element);
            };
        });
        if (positions != [null].toString()) {edgelist.push(positions)};
        

        const move_queue_shift = move_queue[count];
        knight.setPosition(move_queue_shift);
        count++;
    }

    for (let i in move_queue) {
        const node = linkedList(edgelist[i]);
        move_nodes.push(node);
    }

    return {move_queue, edgelist, move_nodes};
}

const start = [0, 0];
const end = [6, 1];
const TREE = knightMove(start, end);
console.log(TREE.move_nodes);
