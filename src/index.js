import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";

import './index.css';
import Server from './components/server';
import Header from './components/header';
import Transfers from './components/transfers';
import Tabs from './components/tabs';
import TicketsList from './components/tickets-list';
import FooterBut from './components/footer-but';
import store from "./store";

function App() {
    const server = new Server(1);
    const [ticketsList, setTickets] = useState([]);
    const [quantity, setQuantity] = useState(5);
    const addItem = (arr) => {
        //idTickets !аргумент
        /*let id = null;

        if (!arr.stop){
            id = setInterval(() => {
                server.getTickets(idTickets)
                    .then((res) => setTickets((state) => {
                        if (res.stop){
                            addItem(res);
                            clearInterval(id);
                        }
                        return [...state, ...res.tickets];
                    }))
                    .catch((error) => console.log(error));
            }, 2000);
        }*/
        setTickets((state) => {
            return [...state, ...arr.tickets];
        });
    }
    const addQuantity = () => {
        setQuantity((s) => s + 5);
    }
    const getID = (idTickets) => {
        server.getTickets(idTickets)
              .then((res) => addItem(res, idTickets));
    };
    useEffect(() => {
        server.getSearchId().then((res) => getID(res));
    }, []);
    return <>
        <Provider store={store}>
            <Header />
            <main className="info_tickets">
                <Transfers />
                <div className="content">
                  <Tabs />
                  <TicketsList ticketsList={ticketsList} quantity={quantity} />
                    <FooterBut addQuantity={addQuantity} />
                </div>
            </main>
        </Provider>
    </>
}

const container = createRoot(document.getElementById('root'));

container.render(<App />);

