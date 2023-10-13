import React from 'react';
import './footer-but.css';
import {connect} from "react-redux";
import { addQuantity } from '../../actions';
import store from "../../store";

const FooterBut = ({ error, loading, ticketsList }) => {
    const { dispatch } = store;
    if (!error && !loading && ticketsList.length !== 0) {
        return (<div className="footer">
                <button className="footer_but" onClick={() => dispatch(addQuantity())}>Показать еще 5 билетов!</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const tickets = state.addTicketsReducer;
    const filter = state.tabsFilterReducer;
    return {
        error: tickets.error,
        loading: tickets.loading,
        price: filter.price,
        speed: filter.speed,
        optimal: filter.optimal,
        ticketsList: tickets.arrFilter,
    };
};

export default connect(mapStateToProps)(FooterBut);
