import React, {useEffect} from 'react';
import './tabs.css';
import { connect } from 'react-redux';
import * as actions from "../../actions";
import store from "../../store";
import {bindActionCreators} from "redux";
import TransferMobile from '../transfer-mobile';

const Tabs = ({ error, ticketsList, price, speed, optimal, arrFilter }) => {
  const { dispatch } = store;
  const { priceFilter, speedFilter, optimalFilter,addArrFilter } = bindActionCreators(actions, dispatch);
  useEffect(() => {
      if (arrFilter.length) {
          addArrFilter(arrFilter);
      }
  }, [arrFilter]);

  if (!error) {
      return (
          <div className="tabs_head">
              <div className="tabs">
                  <button className={price ? "tabs_but tabs_but__focus" : "tabs_but"} onClick={() => priceFilter(ticketsList)}>Самый дешевый</button>
                  <button className={speed ? "tabs_but tabs_but__focus" : "tabs_but"} onClick={() => speedFilter(ticketsList)}>Самый быстрый</button>
                  <button className={optimal ? "tabs_but tabs_but__focus" : "tabs_but"} onClick={() => optimalFilter(ticketsList)}>Оптимальный</button>
              </div>
              <div className="transfers_burger">
                  <TransferMobile />
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
        ticketsList: tiscets.arrFilter,
        price: filter.price,
        speed: filter.speed,
        optimal: filter.optimal,
        arrFilter: filter.arrFilter,
    };
};

export default connect(mapStateToProps)(Tabs);