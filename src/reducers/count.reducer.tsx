const initialState = {
    count: 0
};

// Reducer function
export const reducerFunction = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: (state.count > 0) ? (state.count - action.decrementBy) : state.count
            };
        default:
            return state;
    }
}