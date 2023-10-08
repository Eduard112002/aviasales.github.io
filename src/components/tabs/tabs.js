import React from 'react';
import './tabs.css';

const Tabs = ({ transfersNone }) => {
  return (
      <div className="tabs_head">
          <div className="tabs">
              <button className="tabs_but">Самый дешевый</button>
              <button className="tabs_but">Самый быстрый</button>
              <button className="tabs_but">Оптимальный</button>
          </div>
          <div className="transfers_burger">
              <button onClick={transfersNone}>Количество пересадок</button>
          </div>
      </div>
  )
};

export default Tabs;