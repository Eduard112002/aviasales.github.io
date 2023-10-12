import React from 'react';
import './footer-but.css';
import {connect} from "react-redux";

const FooterBut = ({ addQuantity, error, loading, price, speed, optimal }) => {
    if (!error && !loading && price || speed || optimal) {
        return (<div className="footer">
                <button className="footer_but" onClick={addQuantity}>Показать еще 5 билетов!</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const tiscets = state.addTicketsReducer;
    const filter = state.tabsFilterReducer;
    return {
        error: tiscets.error,
        loading: tiscets.loading,
        price: filter.price,
        speed: filter.speed,
        optimal: filter.optimal,
    };
};

export default connect(mapStateToProps)(FooterBut);
