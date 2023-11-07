const edgeFactory = (a, array) => {
    const start_vertex = a;
    const end_vertex = array;

    return {start_vertex, end_vertex};
 }

function linkList (array) {
    const node = array;

    return {node}
}

 export {edgeFactory};