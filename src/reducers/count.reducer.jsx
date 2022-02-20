// Reducer Function
const countReducer = (state = {count: 0}, action)=> {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        default:
        return state;
    }
};

export default countReducer;