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
    const [claassNone, setClaassNone] = useState('none');
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
    const transfersNone = () => {
        if (!claassNone) {
            setClaassNone('none');
        } else {
            setClaassNone('');
        }
    }
    const transfersNoneEfect = () => {
        setClaassNone('none');
    }
    useEffect(() => {
        if (window.innerWidth < 700) {
            setClaassNone('none');
        }
    }, [])
    return <>
        <Header />
        <main className="info_tickets">
            <Transfers claassNone={claassNone} transfersNoneEfect={transfersNoneEfect}/>
            <div className="content">
              <Tabs transfersNone={transfersNone}/>
              <TicketsList ticketsList={ticketsList} quantity={quantity}/>
                <FoterBut addQuantity={addQuantity} />
            </div>
        </main>
    </>
}

const container = createRoot(document.getElementById('root'));

container.render(<App />);

