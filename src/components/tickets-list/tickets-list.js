import React from 'react';

import './tickets-list.css';
import Tickets from '../tickets';

const TicketsList = ({ ticketsList, quantity }) => {
    return ticketsList.map((el, index) => {
        if(index < quantity) {
            return <Tickets tickets={el} key={el.price} />
        }
    })
}

export default TicketsList;
