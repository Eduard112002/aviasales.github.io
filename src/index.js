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
    const [quantity, setQuantity] = useState(5);
    const addQuantity = () => {
        setQuantity((s) => s + 5);
    }
    useEffect(() => {
        server.getSearchId().then((res) => server.getID(res));
    }, []);

    return <>
        <Provider store={store}>
            <Header />
            <main className="info_tickets">
                <Transfers />
                <div className="content">
                    <Tabs />
                    <TicketsList quantity={quantity} />
                    <FooterBut addQuantity={addQuantity} />
                </div>
            </main>
        </Provider>
    </>
}

const container = createRoot(document.getElementById('root'));

container.render(<App />);

