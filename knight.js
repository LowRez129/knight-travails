//import {boardCreate} from './boardCreate.js';
import {knightFactory} from './knightFactory.js';

function moveTree(value = [0, 0]) {
    if (value == null) {return};
    const knight = knightFactory(value);
    const node_UL = moveTree(knight.getUpLeft());

    const getKnight = () => {return knight};
    const getNode = () => {return node_UL};

    return {getKnight, getNode};
}
const TREE = moveTree([3, 3]);
TREE.getKnight().printAttributes();
console.log();
TREE.getNode().getKnight().printAttributes();
console.log();
TREE.getNode().getNode().getKnight().printAttributes();
