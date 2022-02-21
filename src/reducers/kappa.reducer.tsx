const initialState = {
    count: 0
};

// Reducer function
export const kappaReducerFunction = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'INCREMENT_CLICK':
            return {
                count: state.count + action.incrementBy
            };
        default:
            return state;
    }
}