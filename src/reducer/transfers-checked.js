const defaultState = {
    fullChecked: false,
    noChecked: false,
    oneChecked: false,
    twoChecked: false,
    threeChecked: false,
}

const transfersCheckedReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'FULL_TRANSFERS':
            if (!action.checked) {
                return {
                    ...state,
                    fullChecked: false,
                    noChecked: false,
                    oneChecked: false,
                    twoChecked: false,
                    threeChecked: false,
                }
            } else {
                return {
                    ...state,
                    fullChecked: true,
                    noChecked: true,
                    oneChecked: true,
                    twoChecked: true,
                    threeChecked: true,
                }
            }
        case 'NO_TRANSFER':
            let newStateNo = {noChecked: action.checked};
            if (!action.checked) {
                newStateNo = {
                    ...newStateNo,
                    fullChecked: false,
                }
            }
            return {
                ...state,
                ...newStateNo,
            }
        case 'ONE_TRANSFER':
            let newStateOne = {oneChecked: action.checked};
            if (!action.checked) {
                newStateOne = {
                    ...newStateOne,
                    fullChecked: false,
                }
            }
            return {
                ...state,
                ...newStateOne,
            }
        case 'TWO_TRANSFER':
            let newStateTwo = {twoChecked: action.checked};
            if (!action.checked) {
                newStateTwo = {
                    ...newStateTwo,
                    fullChecked: false,
                }
            }
            return {
                ...state,
                ...newStateTwo,
            }
        case 'THREE_TRANSFER':
            let newStateThree = {threeChecked: action.checked};
            if (!action.checked) {
                newStateThree = {
                    ...newStateThree,
                    fullChecked: false,
                }
            }
            return {
                ...state,
                ...newStateThree,
            }
        default:
            return state;
    }
};

export default transfersCheckedReducer;