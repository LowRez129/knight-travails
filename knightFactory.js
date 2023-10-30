function knightFactory (column, row) {
    let current_position;
    let up_left_right;
    let down_left_right;
    let left_up_down;
    let right_up_down;

    const setPosition = (c, r) => {
        const up = c + 2;
        const down = c - 2;
        const left = r - 2;
        const right = r + 2;
        const x_left = r - 1;
        const x_right = r + 1;
        const y_up = c + 1;
        const y_down = c - 1;

        current_position = [c, r];
        up_left_right = [up, [x_left, x_right]];        //{up: (c + 2), left: (r - 1), right: (r + 1)};
        down_left_right = [down, [x_left, x_right]];    //{down: (c - 2), left: (r - 1), right: (r + 1)};
        left_up_down = [[y_up, y_down], left];          //{left: (c - 2), up: (r + 1), down: (r - 1)};
        right_up_down = [[y_up, y_down], right];        //{right: (c + 2), up: (r + 1), down: (r - 1)}; 
        
        if (up > 7|| x_left < 0 || x_right > 7) {up_left_right = null};
        if (down < 0 || x_left < 0 || x_right > 7) {down_left_right = null};
        if (left < 0 || y_up > 7 || y_down < 0) {left_up_down = null};
        if (right > 7) {right_up_down = null};
    } 

    setPosition(column, row);

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