const defaultStateTickets = {
    ticketsList: [],
    loading: true,
    error: false,
}

const addTicketsReducer = (state = defaultStateTickets, action) => {
    switch(action.type) {
        case 'ADD_TICKETS':
            return {...state, ticketsList: [...state.ticketsList, ...action.tickets], loading: false};
        case "ADD_ERROR":
            return {...state, loading: false, error: true};
        default:
            return state;
    }
};

export default addTicketsReducer;