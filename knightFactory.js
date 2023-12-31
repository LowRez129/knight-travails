function knightFactory (position = [null]) {
    if (position == [null]) {return [null]};

    let current_position = [null];
    let up_left = [null];
    let up_right = [null];
    let down_left = [null];
    let down_right = [null];
    let left_up = [null];
    let left_down = [null];
    let right_up = [null];
    let right_down = [null];

    const setPosition = (array = [0, 0]) => {
        if (array == [null]) {return console.log("Invalid Input")};

        const c = array[0];
        const r = array[1];
        const up = c + 2;
        const down = c - 2;
        const left = r - 2;
        const right = r + 2;
        const x_left = ((r - 1) < 0) ? [null] : r - 1;
        const x_right = ((r + 1) > 7) ? [null] : r + 1;
        const y_up = ((c + 1) > 7) ? [null] : c + 1;
        const y_down = ((c - 1) < 0) ? [null] : c - 1;
        const null_string = [null].toString();

        current_position = [c, r];
        up_left = (x_left.toString() == null_string) ? [null] : [up, x_left]; 
        up_right = (x_right.toString() == null_string) ? [null] : [up, x_right];
        down_left = (x_left.toString() == null_string) ? [null] : [down, x_left];
        down_right = (x_right.toString() == null_string) ? [null] : [down, x_right];
        left_up = (y_up.toString() == null_string) ? [null] : [y_up, left];
        left_down = (y_down.toString() == null_string) ? [null] : [y_down, left];        
        right_up = (y_up.toString() == null_string) ? [null] : [y_up, right];    
        right_down = (y_down.toString() == null_string) ? [null] : [y_down, right];

        if (up > 7) {up_left = [null]; up_right = [null]};
        if (down < 0) {down_left = [null]; down_right = [null];};
        if (left < 0) {left_up = [null]; left_down = [null];};
        if (right > 7) {right_up = [null]; right_down = [null];};
    } 

    setPosition(position);

    const getCurrentPosition = () => {return current_position};
    const getUpLeft = () => {return up_left};
    const getUpRight = () => {return up_right};
    const getDownLeft = () => {return down_left};
    const getDownRight = () => {return down_right};
    const getLeftUp = () => {return left_up};
    const getLeftDown = () => {return left_down};
    const getRightUp = () => {return right_up};
    const getRightDown = () => {return right_down};

    const printAttributes = () => {
        console.log("Current Position    :", current_position);
        console.log("Up    - Left : Right:", up_left, up_right);
        console.log("Down  - Left : Right:", down_left, down_right);
        console.log("Left  - Up   : Down :",left_up, left_down);
        console.log("Right - Up   : Down :", right_up, right_down);
    }

    return {
        getCurrentPosition, setPosition, printAttributes,
        getUpLeft, getUpRight, getDownLeft, getDownRight,
        getLeftUp, getLeftDown, getRightUp, getRightDown,
        
    };
}

export {knightFactory};