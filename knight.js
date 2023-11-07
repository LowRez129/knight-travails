//import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';
import { edgeFactory } from './edgeFactory.js';


function knightMove (start, end) {
    if (start == [null].toString()) {return null};
    const knight = knightFactory(start);
    const move_queue = [start];
    const edgelist = [];
    
    let count = 0;
    let current;
    while (true) {
        const move = [
            knight.getUpLeft(), knight.getUpRight(), knight.getDownLeft(), knight.getDownRight(),
            knight.getLeftUp(), knight.getLeftDown(), knight.getRightUp(), knight.getRightDown()
        ];

        for (let i in move) {
            if (move[i] == end.toString()) {
                move_queue.splice(edgelist.length, move_queue.length);
                console.log(move_queue);
                console.log(edgelist);
                return {move_queue, edgelist};
            };
        }

        move.forEach((element) => {
            const index = move.indexOf(element);
            for (let i in move_queue) {
                if (move_queue[i] == element.toString()) {
                    move.splice(index, 1);
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
        current = move_queue_shift;
        count++;
    }
}

const start = [0, 0];
const end = [6, 1];
const TREE = knightMove(start, end);

function linkedList (vertices, index = 0) {
    //console.log(vertices.length)
    if (vertices.length == index) {return null};
    const value = vertices[index];
    const link = linkedList(vertices, index + 1);

    return {value, link};
}


