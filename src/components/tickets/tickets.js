import React from 'react';
import './tickets.css';
const Tickets = ({tickets }) => {
    let price = String(tickets.price).split('');
    const destination = tickets.segments[0];
    const origin = tickets.segments[1];
    switch (price.length) {
        case 4:
            price = [...price.slice(0, 1), ' ', ...price.slice(1)].join('');
            break;
        case 5:
            price = [...price.slice(0, 2), ' ', ...price.slice(2)].join('');
            break;
        case 6:
            price = [...price.slice(0, 3), ' ', ...price.slice(3)].join('');
            break;
        case 7:
            price = [...price[0], ' ', ...price.slice(0, 3), ' ', ...price.slice(3)].join('');
            break;
    }
    let dataDestination = destination.date.split('');
    dataDestination = [...dataDestination.slice(11, 16)].join('');
    const timeWayDestination = travelTime(destination.duration);
    const timeDifferDestination = timeDiffer(dataDestination, timeWayDestination);
    const transfersDestination = destination.stops.length;
    const stopsCodeDestination = stopsCodeCity(destination.stops);

    let dataOrigin = origin.date.split('');
    dataOrigin = [...dataOrigin.slice(11, 16)].join('');
    const timeWayOrigin = travelTime(origin.duration);
    const timeDifferOrigin = timeDiffer(dataOrigin, timeWayOrigin);
    const transfersOrigin = origin.stops.length;
    const stopsCodeOrigin = stopsCodeCity(origin.stops);
    //const height = transfersOrigin === 3 && transfersDestination === 3 ?
    return (
       <div className="tickets">
          <div className="tickets_header">
              <span className="tickets_price">{price} Р </span>
              <span className="tickets_logo"><img src={`http://pics.avs.io/130/70/${tickets.carrier}.png`} alt='logo compania'/></span>
          </div>


          <div className="destination">
              <div className="content_info">
                  <span className="info_head info">{destination.origin} – {destination.destination}</span>
                  <span className="destination_info info">{dataDestination} – {timeDifferDestination[0]}:{timeDifferDestination[1]}</span>
              </div>
              <div className="content_info">
                  <span className="info_head info">В пути</span>
                  <span className="destination_info info">{timeWayDestination[0]}ч {timeWayDestination[1]}м</span>
              </div>
              <div className="content_info">
                  <span className="info_head info">{transfersDestination} пересадки</span>
                  <span className="destination_info info">{stopsCodeDestination}</span>
              </div>
          </div>


          <div className="origin">
              <div className="content_info">
                  <span className="info_head info">{origin.origin} – {origin.destination}</span>
                  <span className="destination_info info">{dataOrigin} – {timeDifferOrigin[0]}:{timeDifferOrigin[1]}</span>
              </div>
              <div className="content_info">
                  <span className="info_head info">В пути</span>
                  <span className="destination_info info">{timeWayOrigin[0]}ч {timeWayOrigin[1]}м</span>
              </div>
              <div className="content_info">
                  <span className="info_head info">{transfersOrigin} пересадки</span>
                  <span className="destination_info info">{stopsCodeOrigin}</span>
              </div>
          </div>
       </div>
   )
}
const travelTime = (time) => {
    const hours = Math.floor(time / 60);
    let min = Math.round((time / 60 - hours) * 60);
    min = min < 10 ? `0${min}` : min;
    return [hours, min];
}

const timeDiffer = (distanceTime, arrTime) => {
    const hoursDistance = distanceTime.split('').slice(0, 2).join('');
    const minDistance = distanceTime.split('').slice(3).join('');
    let hours = Number(hoursDistance) + arrTime[0];
    let min = Number(minDistance) + Number(arrTime[1]);
    switch (true) {
        case hours === 24:
            hours = 0;
            break;
        case hours > 24:
            hours = hours - 24;
            break;
    }
    switch (true) {
        case min === 60:
            hours = Number(hours) + 1;
            min = 0;
            break;
        case min > 60:
            let a = Math.floor(min / 60);
            hours = Number(hours) + a;
            min = min - Math.floor(60 * a);
            break;
    }
    hours =  Number(hours) < 10 ? `0${hours}` : hours;
    min = min < 10 ? `0${min}` : min;
   return [hours, min];
}

const stopsCodeCity = (arr) => {
    const codes = arr.map((el, index) => {
        if (arr.length - 1 !== index){
            return el + ',';
        }
        return el;
    })
    return codes.join(' ');
}

export default Tickets;
