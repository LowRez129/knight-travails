const linkedList = (vertices, index = 0) => {
    if (vertices == undefined) {return null};
    if (vertices.length == index) {return null};
    const value = vertices[index];
    const link = linkedList(vertices, index + 1);

    return {value, link};
}

export {linkedList};