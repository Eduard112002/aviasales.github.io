import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import Server from './components/server';
import Header from './components/header';
import Transfers from './components/transfers';
import Tabs from './components/tabs';
import TicketsList from './components/tickets-list';
import FoterBut from './components/foter-but';

function App() {
    const server = new Server();
    const [ticketsList, setTickets] = useState([]);
    const [quantity, setQuantity] = useState(5);
    const addItem = (arr) => {
        setTickets(() => {
            return arr;
        })
    }
    const addQuantity = () => {
        setQuantity((s) => s + 5);
    }
    const getID = (idTickets) => {
        if (!idTickets) {
            server.getTickets(sessionStorage.getItem('id'))
                  .then((res) => addItem(res.tickets));
        } else {
            server.getTickets(idTickets)
                  .then((res) => addItem(res.tickets));
        }
    };
    useEffect(() => {
        server.getSearchId().then((res) => getID(res));
    }, []);
    return <>
        <Header />
        <main className="info_tickets">
            <Transfers />
            <div>
              <Tabs />
              <TicketsList ticketsList={ticketsList} quantity={quantity}/>
                <FoterBut addQuantity={addQuantity} />
            </div>
        </main>
    </>
}

const container = createRoot(document.getElementById('root'));

container.render(<App />);

