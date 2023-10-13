const defaultStateTickets = {
    ticketsList: [],
    loading: true,
    error: false,
    arrFilter: [],
}

const addTicketsReducer = (state = defaultStateTickets, action) => {
    switch(action.type) {
        case 'ADD_TICKETS':
            return {...state, ticketsList: [...state.ticketsList, ...action.tickets], loading: false};
        case "ADD_ERROR":
            return {...state, loading: false, error: true};
        case 'APP_ARR_FILTER':
            return {
                ...state,
                arrFilter: [...action.ticketsList],
            }
        default:
            return state;
    }
};

export default addTicketsReducer;