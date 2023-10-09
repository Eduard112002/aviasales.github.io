import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';

import './index.css';
import Server from './components/server';
import Header from './components/header';
import Transfers from './components/transfers';
import Tabs from './components/tabs';
import TicketsList from './components/tickets-list';
import FooterBut from './components/footer-but';
import reducer from './reducer';

const store = configureStore({reducer});

function App() {
    const server = new Server(1);
    const [ticketsList, setTickets] = useState([]);
    const [quantity, setQuantity] = useState(5);
    const [classNone, setClassNone] = useState('none');
    const [fullChecked, setFullChecked] = useState(true);
    const [noChecked, setNoChecked] = useState(false);
    const [oneChecked, setOneChecked] = useState(true);
    const [twoChecked, setTwoChecked] = useState(true);
    const [threeChecked, setThreeChecked] = useState(true);
    const addItem = (arr, idTickets) => {
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
    const transfersNone = () => {
        if (!classNone) {
            setClassNone('none');
        } else {
            setClassNone('');
        }
    }
    const transfersNoneEffect = () => {
        setClassNone('none');
    }
    const addOnChangeFull = (event) => {
        setFullChecked(event.target.checked);
        if (!event.target.checked) {
            setOneChecked(false);
            setTwoChecked(false);
            setThreeChecked(false);
        } else {
            setNoChecked(!event.target.checked);
            setOneChecked(true);
            setTwoChecked(true);
            setThreeChecked(true);
        }
    };
    const addOnChangeNo= (event) => {
        setNoChecked(event.target.checked);
        if (event.target.checked) {
            setFullChecked(!event.target.checked);
            setOneChecked(false);
            setTwoChecked(false);
            setThreeChecked(false);
        }
    };
    const addOnChangeOne = (event) => {
        setOneChecked(event.target.checked);
        if (!event.target.checked) {
            setFullChecked(false);
        } else {
            setNoChecked(false);
        }
    };
    const addOnChangeTwo = (event) => {
        setTwoChecked(event.target.checked);
        if (!event.target.checked) {
            setFullChecked(false);
        } else {
            setNoChecked(false);
        }
    };
    const addOnChangeThree = (event) => {
        setThreeChecked(event.target.checked);
        if (!event.target.checked) {
            setFullChecked(false);
        } else {
            setNoChecked(false);
        }
    };
    useEffect(() => {
        if (oneChecked && twoChecked && threeChecked) {
            setFullChecked(true);
        }
    })
    return <>
        <Header />
        <main className="info_tickets">
            <Transfers
                classNone={classNone}
                transfersNoneEffect={transfersNoneEffect}
                addOnChangeFull={addOnChangeFull}
                addOnChangeNo={addOnChangeNo}
                addOnChangeOne={addOnChangeOne}
                addOnChangeTwo={addOnChangeTwo}
                addOnChangeThree={addOnChangeThree}
                checked={[fullChecked, noChecked, oneChecked, twoChecked, threeChecked]}
            />
            <div className="content">
              <Tabs transfersNone={transfersNone}/>
              <TicketsList ticketsList={ticketsList} quantity={quantity} transfers={[fullChecked, noChecked, oneChecked, twoChecked, threeChecked]}/>
                <FooterBut addQuantity={addQuantity} />
            </div>
        </main>
    </>
}

const container = createRoot(document.getElementById('root'));

container.render(<App />);

