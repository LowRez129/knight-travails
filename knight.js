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
    /*
    console.log(move_queue);
    console.log(edgelist);
    console.log(move_nodes);
    */

    return {move_queue, edgelist, move_nodes};
}

const start = [0, 0];
const end = [0, 1];
const TREE = knightMove(start, end);

const path = [];
function breadthFirstSearch (node, end, root) {
    if (node == null) {return null};
    const positions = knightFactory(node.value);
    const edges = [
        positions.getUpLeft(), positions.getUpRight(), positions.getDownLeft(), positions.getDownRight(),
        positions.getLeftUp(), positions.getLeftDown(), positions.getRightUp(), positions.getRightDown()
    ]
    for (let i in edges) {
        if (edges[i] == end.toString()) {
            const index = TREE.move_nodes.indexOf(root);
            path.unshift(index);
            return;
        };
    }

    breadthFirstSearch(node.link, end, root);
}

for (let num in TREE.move_queue) {
    breadthFirstSearch(TREE.move_nodes[num], end, TREE.move_nodes[num]);
}

console.log(start)
for (let num in path) {
    const index = path[num];
    const step = TREE.move_queue[index];
    console.log(step);
}
console.log(end);