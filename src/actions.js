export  const fullTransfers = (payload) => ({type: 'FULL_TRANSFERS', checked: payload});

export  const noTransfers = (payload) => ({type: 'NO_TRANSFER', checked: payload});

export  const oneTransfers = (payload) => ({type: 'ONE_TRANSFER', checked: payload});

export  const twoTransfers = (payload) => ({type: 'TWO_TRANSFER', checked: payload});

export  const threeTransfers = (payload) => ({type: 'THREE_TRANSFER', checked: payload});

export const transfersNoneEffect = () => ({type: 'NO_NONE_EFFECT'});

export const transfersNone = () => ({type: 'NONE_EFFECT'});
