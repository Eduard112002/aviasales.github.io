import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import './transfers.css';
import * as actions from "../../actions";

const Transfers = ({ fullChecked, noChecked, oneChecked, twoChecked, threeChecked, classNone, error }) => {
    const className = `transfers-container ${classNone}`;
    const classNameBurger = `transfers_burger__none ${classNone}`;
    const dispatch = useDispatch();
    const { fullTransfers, noTransfers, oneTransfers, twoTransfers, threeTransfers, transfersNoneEffect} =
        bindActionCreators(actions, dispatch);
    useEffect(() => {
        if (oneChecked && twoChecked && threeChecked && noChecked && !fullChecked) {
            fullTransfers(true);
         }
    });
  if (!error) {
      return (
          <div>
              <button className={classNameBurger} onClick={transfersNoneEffect}></button>
              <div className={className}>
                  <span className="heading">Количество пересадок</span>
                  <form className="transfers" >
                      <label className="transfers_input" htmlFor="full">
                          <input type="checkbox" id="full" onChange={(event) => fullTransfers(event.target.checked)} checked={fullChecked}/>
                          <span>Все</span>
                      </label>
                      <label className="transfers_input" htmlFor="no">
                          <input type="checkbox" id="no" onChange={(event) => noTransfers(event.target.checked)} checked={noChecked}/>
                          <span>Без пересадок</span>
                      </label>
                      <label className="transfers_input" htmlFor="1">
                          <input type="checkbox" id="1" onChange={(event) => oneTransfers(event.target.checked)} checked={oneChecked}/>
                          <span>1 пересадка</span>
                      </label>
                      <label className="transfers_input" htmlFor="2">
                          <input type="checkbox" id="2" onChange={(event) => twoTransfers(event.target.checked)} checked={twoChecked}/>
                          <span>2 пересадка</span>
                      </label>
                      <label className="transfers_input" htmlFor="3">
                          <input type="checkbox" id="3" onChange={(event) => threeTransfers(event.target.checked)} checked={threeChecked}/>
                          <span>3 пересадка</span>
                      </label>
                  </form>
              </div>
          </div>
      );
  }
};

const mapStateToProps = (state) => {
    const transChec = state.transfersCheckedReducer;
    const transEffect= state.transfersEffectReducer;
    const tiscets = state.addTicketsReducer;
    return{
        fullChecked: transChec.fullChecked,
        noChecked: transChec.noChecked,
        oneChecked: transChec.oneChecked,
        twoChecked: transChec.twoChecked,
        threeChecked: transChec.threeChecked,
        classNone: transEffect.classNone,
        error: tiscets.error,
    }
};

export default connect(mapStateToProps)(Transfers);
