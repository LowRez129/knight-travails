function knightFactory (position = [0, 0]) {
    let current_position = null;
    let up_left_right = null;
    let down_left_right = null;
    let left_up_down = null;
    let right_up_down = null;

    const setPosition = (array) => {
        if (array == null) {return console.log("Invalid Input")};

        const c = array[0];
        const r = array[1];
        const up = c + 2;
        const down = c - 2;
        const left = r - 2;
        const right = r + 2;
        const x_left = ((r - 1) < 0) ? null : r - 1;
        const x_right = ((r + 1) > 7) ? null : r + 1;
        const y_up = ((c + 1) > 7) ? null : c + 1;
        const y_down = ((c - 1) < 0) ? null : c - 1;

        current_position = [c, r];
        up_left_right = [[up, x_left], [up, x_right]];        //{up: (c + 2), left: (r - 1), right: (r + 1)};
        down_left_right = [[down, x_left], [down, x_right]];    //{down: (c - 2), left: (r - 1), right: (r + 1)};
        left_up_down = [[y_up, left], [y_down, left]];          //{left: (c - 2), up: (r + 1), down: (r - 1)};
        right_up_down = [[y_up, right], [y_down, right]];        //{right: (c + 2), up: (r + 1), down: (r - 1)}; 
        
        if (up > 7) {up_left_right = null};
        if (down < 0) {down_left_right = null};
        if (left < 0) {left_up_down = null};
        if (right > 7) {right_up_down = null};
        
        const moves = [up_left_right, down_left_right, left_up_down, right_up_down];
        moves.forEach((child) => {
            if (child == null) {return};
            child.forEach((element) => {
                element.forEach((index) => {
                    if (index == null) {
                        const num_index = child.indexOf(element)
                        child[num_index] = null;
                        //console.log();
                        console.log(element);
                        return;
                    }
                });
            });
        });
        
    } 

    setPosition(position);

    const getCurrentPosition = () => {return current_position};
    const getUpLeftRight = () => {return up_left_right};
    const getDownLeftRight = () => {return down_left_right};
    const getLeftUpDown = () => {return left_up_down};
    const getRightUpDown = () => {return right_up_down};

    const printAttributes = () => {
        console.log("Current Position: ", current_position);
        console.log("UpLeftRight: ", up_left_right);
        console.log("DownLeftRight:", down_left_right);
        console.log("LeftUpDown: ",left_up_down);
        console.log("RightUpDown: ", right_up_down);
    }

    return {
        getCurrentPosition, setPosition, printAttributes,
        getUpLeftRight, getDownLeftRight, getLeftUpDown, getRightUpDown,
        
    };
}

export {knightFactory};