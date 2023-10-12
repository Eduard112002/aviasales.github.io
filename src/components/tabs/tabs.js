import React from 'react';
import './tabs.css';
import { connect } from 'react-redux';
import { transfersNone } from '../../actions';
import * as actions from "../../actions";
import store from "../../store";
import {bindActionCreators} from "redux";

const Tabs = ({ error, ticketsList, price, speed, optimal }) => {
  const { dispatch } = store;
  const { priceFilter, speedFilter, optimalFilter } = bindActionCreators(actions, dispatch);
  if (!error) {
      return (
          <div className="tabs_head">
              <div className="tabs">
                  <button className={price ? "tabs_but tabs_but__focus" : "tabs_but"} onClick={() => priceFilter(ticketsList)}>Самый дешевый</button>
                  <button className={speed ? "tabs_but tabs_but__focus" : "tabs_but"} onClick={() => speedFilter(ticketsList)}>Самый быстрый</button>
                  <button className={optimal ? "tabs_but tabs_but__focus" : "tabs_but"} onClick={() => optimalFilter(ticketsList)}>Оптимальный</button>
              </div>
              <div className="transfers_burger">
                  <button onClick={() => dispatch(transfersNone())}>Количество пересадок</button>
              </div>
          </div>
      )
  }
};

const mapStateToProps = (state) => {
    const tiscets = state.addTicketsReducer;
    const filter = state.tabsFilterReducer;
    return {
        error: tiscets.error,
        ticketsList: tiscets.ticketsList,
        price: filter.price,
        speed: filter.speed,
        optimal: filter.optimal,
    };
};

export default connect(mapStateToProps)(Tabs);