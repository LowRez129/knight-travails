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

        current_position = [c, r];
        up_left_right = [up, [left + 1, right - 1]];        //{up: (c + 2), left: (r - 1), right: (r + 1)};
        down_left_right = [down, [left + 1, right - 1]];    //{down: (c - 2), left: (r - 1), right: (r + 1)};
        left_up_down = [left, [up - 1, down + 1]];          //{left: (c - 2), up: (r + 1), down: (r - 1)};
        right_up_down = [right, [up - 1, down + 1]];        //{right: (c + 2), up: (r + 1), down: (r - 1)}; 
    } 

    setPosition(column, row);

    const getCurrentPosition = () => {return current_position};
    const getUpLeftRight = () => {return up_left_right};
    const getDownLeftRight = () => {return down_left_right};
    const getLeftUpDown = () => {return left_up_down};
    const getRightUpDown = () => {return right_up_down};

    return {
        getCurrentPosition, setPosition,
        getUpLeftRight, getDownLeftRight, getLeftUpDown, getRightUpDown,
        
    };
}

export {knightFactory};