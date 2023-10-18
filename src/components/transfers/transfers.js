import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import './transfers.css';
import * as actions from "../../actions";
import {addArrFilter} from "../../actions";

const Transfers = ({ fullChecked, noChecked, oneChecked, twoChecked, threeChecked, classNone, error, ticketsList, price, speed, optimal }) => {
    const className = `transfers-container ${classNone}`;
    const classNameBurger = `transfers_burger__none ${classNone}`;
    const dispatch = useDispatch();
    const { fullTransfers, noTransfers, oneTransfers, twoTransfers, threeTransfers,
        transfersNoneEffect, addArrFilter, priceFilter, speedFilter, optimalFilter} =
        bindActionCreators(actions, dispatch);
    const checkedFunction = [fullTransfers, noTransfers, oneTransfers, twoTransfers, threeTransfers];
    const checkedName = [fullChecked, noChecked, oneChecked, twoChecked, threeChecked]
    const checkboxEl = ['Все', 'Без пересадок', '1 пересадка', '2 пересадка', '3 пересадка'];
    const transfersBox = checkboxEl.map((el, index) => {
        const fun = checkedFunction[index];
        return (
            <label className="transfers_input" htmlFor={el} key={el}>
                <input type="checkbox" id={el} onChange={(event) => fun(event.target.checked)} checked={checkedName[index]}/>
                <span>{el}</span>
            </label>
        )
    })

    useEffect(() => {
        let resultArr = [];
        const obj = {
            fullChecked,
            noChecked,
            oneChecked,
            twoChecked,
            threeChecked,
        };
        if (oneChecked && twoChecked && threeChecked && noChecked && !fullChecked) {
            fullTransfers(true);
         }
        if (fullChecked) {
            resultArr = ticketsList;
        } else {
            Object.keys(obj).map((el) => {
                if (obj[el]) {
                    switch (el) {
                        case 'noChecked' :
                            ticketsList.forEach((el) => {
                                if (el.segments[0].stops.length === 0) {
                                    resultArr.unshift(el);
                                }
                            })
                            break;
                        case 'oneChecked':
                            ticketsList.forEach((el) => {
                                if (el.segments[0].stops.length === 1) {
                                    resultArr.unshift(el);
                                }
                            })
                            break
                        case 'twoChecked':
                            ticketsList.forEach((el) => {
                                if (el.segments[0].stops.length === 2) {
                                    resultArr.unshift(el);
                                }
                            })
                            break
                        case 'threeChecked':
                            ticketsList.forEach((el) => {
                                if (el.segments[0].stops.length === 3) {
                                    resultArr.unshift(el);
                                }
                            })
                            break
                    }
                }
            })
        }
        addArrFilter(resultArr);
        switch (true) {
            case price === true:
                priceFilter(resultArr)
               break;
            case speed === true:
                speedFilter(resultArr)
                break;
            case optimal === true:
                optimalFilter(resultArr)
                break;
        }
        },[ fullChecked, noChecked, oneChecked, twoChecked, threeChecked ]);
  if (!error) {
      return (
          <div>
              <button className={classNameBurger} onClick={transfersNoneEffect}></button>
              <div className={className}>
                  <span className="heading">Количество пересадок</span>
                  <form className="transfers" >
                      {transfersBox}
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
    const filter = state.tabsFilterReducer;
    return{
        fullChecked: transChec.fullChecked,
        noChecked: transChec.noChecked,
        oneChecked: transChec.oneChecked,
        twoChecked: transChec.twoChecked,
        threeChecked: transChec.threeChecked,
        classNone: transEffect.classNone,
        error: tiscets.error,
        ticketsList: tiscets.ticketsList,
        price: filter.price,
        speed: filter.speed,
        optimal: filter.optimal,
    }
};

export default connect(mapStateToProps)(Transfers);
