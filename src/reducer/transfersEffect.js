const defaultState = {
    classNone: 'none',
};

const transfersEffectReducer = (state = defaultState, action) => {
    switch (action.type){
        case 'NO_NONE_EFFECT':
            return {
                ...state,
                classNone: 'none',
            };
        case 'NONE_EFFECT':
            if (!state.classNone) {
                return {
                    ...state,
                    classNone: 'none',
                }
            } else {
                return {
                    ...state,
                    classNone: '',
                }
            }
        default:
            return state;
    }
}

export default transfersEffectReducer;