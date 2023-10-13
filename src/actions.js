export  const fullTransfers = (payload) => ({type: 'FULL_TRANSFERS', checked: payload});

export  const noTransfers = (payload) => ({type: 'NO_TRANSFER', checked: payload});

export  const oneTransfers = (payload) => ({type: 'ONE_TRANSFER', checked: payload});

export  const twoTransfers = (payload) => ({type: 'TWO_TRANSFER', checked: payload});

export  const threeTransfers = (payload) => ({type: 'THREE_TRANSFER', checked: payload});

export const addArrFilter = (arr) => ({type: 'APP_ARR_FILTER', ticketsList: arr});

export const transfersNoneEffect = () => ({type: 'NO_NONE_EFFECT'});

export const addTickets = (payload) => ({type: 'ADD_TICKETS', tickets: payload});

export const addError = () => ({type: 'ADD_ERROR'});

export const priceFilter = (payload) => ({type: 'FILTER_PRICE', ticketsList: payload});

export const speedFilter = (payload) => ({type: 'FILTER_SPEED', ticketsList: payload});

export const optimalFilter = (payload) => ({type: 'FILTER_OPTIMAL', ticketsList: payload});

export const addQuantity = () => ({type: 'ADD_QUANTITY'});
