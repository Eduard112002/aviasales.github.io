import React from 'react';

import './transfers.css';

const Transfers = ({ claassNone, transfersNoneEfect }) => {
    const className = `transfers-container ${claassNone}`;
    const classNameBurher = `transfers_burger__none ${claassNone}`;
  return (
      <div>
          <button className={classNameBurher} onClick={transfersNoneEfect}></button>
          <div className={className}>
              <span className="heading">Количество пересадок</span>
              <form className="transfers" >
                  <label className="transfers_input" htmlFor="full">
                      <input type="checkbox" id="full"/>
                      <span>Все</span>
                  </label>
                  <label className="transfers_input" htmlFor="no">
                      <input type="checkbox" id="no"/>
                      <span>Без пересадок</span>
                  </label>
                  <label className="transfers_input" htmlFor="1">
                      <input type="checkbox" id="1"/>
                      <span>1 пересадка</span>
                  </label>
                  <label className="transfers_input" htmlFor="2">
                      <input type="checkbox" id="2"/>
                      <span>2 пересадка</span>
                  </label>
                  <label className="transfers_input" htmlFor="3">
                      <input type="checkbox" id="3"/>
                      <span>3 пересадка</span>
                  </label>
              </form>
          </div>
      </div>

  );
};

export default Transfers;
