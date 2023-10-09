import { Component} from 'react';

export default class Services extends Component {
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
           throw new Error('Сервер временно не доступен. Попррбуйте позже');
        }
        return res.json();
    }
}
