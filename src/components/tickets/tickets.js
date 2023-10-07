import React from 'react';
import './tickets.css';
const Tickets = ({tickets}) => {
   return (
       <div className="tickets">
          <div className="tickets_header">
              <span className="tickets_price">13 400 Р </span>
              <span className="tickets_logo"><img src={`http://pics.avs.io/130/70/${tickets.carrier}.png`} alt='logo compania'/></span>
          </div>
          <div className="destination">
              <div className="content_info">
                  <span className="info_head info">MOW – HKT</span>
                  <span className="destination_info info">10:45 – 08:00</span>
              </div>
              <div className="content_info">
                  <span className="info_head info">В пути</span>
                  <span className="destination_info info">21ч 15м</span>
              </div>
              <div className="content_info">
                  <span className="info_head info">2 пересадки</span>
                  <span className="destination_info info">HKG, JNB</span>
              </div>
          </div>
          <div className="origin">
              <div className="content_info">
                  <span className="info_head info">HKT - MOW</span>
                  <span className="destination_info info">11:20 – 00:50</span>
              </div>
              <div className="content_info">
                  <span className="info_head info">В пути</span>
                  <span className="destination_info info">13ч 30м</span>
              </div>
              <div className="content_info">
                  <span className="info_head info">1 пересадки</span>
                  <span className="destination_info info">HKG</span>
              </div>
          </div>
       </div>
   )
}

export default Tickets;
