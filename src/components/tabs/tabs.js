import React from 'react';
import './tabs.css';

const Tabs = () => {
  return (
      <div className="tabs">
          <button className="tabs_but">Самый дешевый</button>
          <button className="tabs_but">Самый быстрый</button>
          <button className="tabs_but">Оптимальный</button>
      </div>
  )
};

export default Tabs;