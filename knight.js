//import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';

function knightMove (start, end) {
    if (start.toString() == [null].toString()) {return};
    const knight = knightFactory(start);
    const end_string = end.toString();
    const path = [[3, 3]];
    const move_queue = [];

    while (true) {
        move_queue.push(
            knight.getUpLeft(), knight.getUpRight(), knight.getDownLeft(), knight.getDownRight(),
            knight.getLeftUp(), knight.getLeftDown(), knight.getRightUp(), knight.getRightDown()
        );   

        if (end_string == knight.getUpLeft()) {
            path.push(knight.getUpLeft());
            return console.log(path)
        };
        if (end_string == knight.getUpRight()) {
            path.push(knight.getUpRight());
            return console.log(path)
        };
        if (end_string == knight.getDownLeft()) {
            path.push(knight.getDownLeft())
            return console.log(path)
        };
        if (end_string == knight.getDownRight()) {
            path.push(knight.getDownRight())
            return console.log(path)
        };
        if (end_string == knight.getLeftUp()) {
            path.push(knight.getLeftUp());
            return console.log(path)
        };
        if (end_string == knight.getLeftDown()) {
            path.push(knight.getLeftDown())
            return console.log(path)
        };
        if (end_string == knight.getRightUp()) {
            path.push(knight.getRightUp());
            return console.log(path)
        };
        if (end_string == knight.getRightDown()) {
            path.push(knight.getRightDown());
            return console.log(path)
        };
        
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