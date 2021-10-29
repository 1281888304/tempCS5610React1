export default function clickReducer(
    state = 0, action
) {
    if (action.type === 'boardClick') {
        return state + 1;
    }
    return state;
}