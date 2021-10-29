//provide state of the game
//every reducer take two argument
// state and acion

const defaultState = [
    ['','X',''],
    ['','',''],
    ['X','','X']
];

export default function gameReducer(
    state = defaultState, action
) {
    if (action.type === 'boardClick') {
        const value = state[action.x][action.y];
        if (value === 'X') {
            state[action.x][action.y] = '0';
        } else {
            state[action.x][action.y] = 'X';
        }
        return [...state];
    }
    return state;
}