// Actions valid in the store
const incrementAction = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementAction = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

module.exports = {
    incrementAction,
    decrementAction
};
