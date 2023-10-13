import React, { useEffect } from 'react';
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
    const server = new Server();
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
                    <TicketsList />
                    <FooterBut />
                </div>
            </main>
        </Provider>
    </>
}

const container = createRoot(document.getElementById('root'));

container.render(<App />);

