import { Component} from 'react';

export default class Services extends Component {
    async getSearchIdNew() {
        const res = await fetch('https://aviasales-test-api.kata.academy/search', {
            method: 'GET',
        });
        if (!res.ok) {
            console.error('Не возможно создать гостевую сессию');
        }
        return res.json();
    }

    async getSearchId() {
        if (!sessionStorage.getItem('id')) {
            const res = await this.getSearchIdNew();
            sessionStorage.setItem('id', res.searchId);
            return res.searchId;
        }
    }
    async getTickets(id) {
        const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`, {
            method: 'GET',
        });
        if (!res.ok) {
            console.error('Ошибка сторонего сервера');
        }
        return res.json();
    }
}
