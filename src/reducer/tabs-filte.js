const defaultStateFilter = {
   price: false,
   speed: false,
   optimal: false,
   quantity: 5,
   arrFilter: [],
}

const tabsFilterReducer = (state = defaultStateFilter, action) => {
    switch(action.type) {
        case 'FILTER_PRICE':
         const newArrPrice = action.ticketsList.slice().sort((a, b) => a.price - b.price);
            return {...state, arrFilter: [...newArrPrice], price: true, speed: false, optimal: false};
        case 'FILTER_SPEED':
            const newArrSpeed = action.ticketsList.slice().sort((a, b) => a.segments[0].duration - b.segments[0].duration);
         return {...state, arrFilter: [...newArrSpeed], price: false, speed: true, optimal: false};
        case 'FILTER_OPTIMAL':
            return {...state, arrFilter: [...action.ticketsList], price: false, speed: false, optimal: true}
        case "ADD_QUANTITY":
            return {...state, quantity: state.quantity + 5}
        default:
            return state;
    }
};

export default tabsFilterReducer;