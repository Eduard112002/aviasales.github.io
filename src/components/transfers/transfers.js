import React from 'react';

import './transfers.css';

const Transfers = ({
                       classNone,
                       transfersNoneEffect,
                       addOnChangeFull,
                       addOnChangeNo,
                       addOnChangeOne,
                       addOnChangeTwo,
                       addOnChangeThree,
                       checked
}) => {
    const className = `transfers-container ${classNone}`;
    const classNameBurger = `transfers_burger__none ${classNone}`;
  return (
      <div>
          <button className={classNameBurger} onClick={transfersNoneEffect}></button>
          <div className={className}>
              <span className="heading">Количество пересадок</span>
              <form className="transfers" >
                  <label className="transfers_input" htmlFor="full">
                      <input type="checkbox" id="full" onChange={addOnChangeFull} checked={checked[0]}/>
                      <span>Все</span>
                  </label>
                  <label className="transfers_input" htmlFor="no">
                      <input type="checkbox" id="no" onChange={addOnChangeNo} checked={checked[1]}/>
                      <span>Без пересадок</span>
                  </label>
                  <label className="transfers_input" htmlFor="1">
                      <input type="checkbox" id="1" onChange={addOnChangeOne} checked={checked[2]}/>
                      <span>1 пересадка</span>
                  </label>
                  <label className="transfers_input" htmlFor="2">
                      <input type="checkbox" id="2" onChange={addOnChangeTwo} checked={checked[3]}/>
                      <span>2 пересадка</span>
                  </label>
                  <label className="transfers_input" htmlFor="3">
                      <input type="checkbox" id="3" onChange={addOnChangeThree} checked={checked[4]}/>
                      <span>3 пересадка</span>
                  </label>
              </form>
          </div>
      </div>

  );
};

export default Transfers;
