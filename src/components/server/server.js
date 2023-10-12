import { Component} from 'react';
import { addError, addTickets} from '../../actions';
import store from '../../store';

export default class Services extends Component {
    dispatch = store.dispatch;
    async getSearchIdNew() {
        const res = await fetch('https://aviasales-test-api.kata.academy/search', {
            method: 'GET',
        });
        if (!res.ok) {
           throw new Error('Сервис временно не доступен')
        }
        return res.json();
    }

    async getSearchId() {
        const res = await this.getSearchIdNew();
        return res.searchId;
    }
    async getTickets(id) {
        const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`, {
            method: 'GET',
        });
        if (!res.ok) {
           return 500;
        }
        return res.json();
    }


    addItem = (arr, idTickets) => {
        let id = null;
        /*if (!arr.stop){
            id = setInterval(() => {
                this.getTickets(idTickets)
                    .then((res) => {
                        if (res.stop){
                            this.addItem(res);
                            clearInterval(id);
                        }
                        this.dispatch(addTicketa(res.tickets));
                    })
                    .catch((error) => console.log(error));
            }, 2000);
        }*/
        if (arr !== 500) {
          this.dispatch(addTickets(arr.tickets));
        } else {
           clearInterval(id);
           this.dispatch(addError());
        }
    }
    getID = (idTickets) => {
        this.getTickets(idTickets)
            .then((res) => this.addItem(res, idTickets));
    };
}
