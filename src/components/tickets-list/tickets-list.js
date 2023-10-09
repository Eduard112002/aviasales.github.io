import React from 'react';

import './tickets-list.css';
import Tickets from '../tickets';

const TicketsList = ({ ticketsList, quantity, transfers }) => {
    return ticketsList.map((el, index) => {
        if(index < quantity) {
            return <Tickets tickets={el} key={el.price} transfers={transfers}/>
        }
    })
}

export default TicketsList;
