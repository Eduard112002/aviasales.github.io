const reducer = (state = 0, action) => {
    switch(action.type) {
        case 'FULL_TRANSFERS':
            return state = 3;
        case 'NO_TRANSFER':
            return state = 0;
        case 'ONE_TRANSFER':
            return state = 1;
        case 'TWO_TRANSFER':
            return state = 2;
        case 'THREE_TRANSFER':
            return state = 3;
        default:
            return state;
    }
};

export default reducer;