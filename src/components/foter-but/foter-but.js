import React from 'react';
import './foter-but.css';

const FoterBut = ({ addQuantity }) => {
    return (<div className="foter">
            <button className="foter_but" onClick={addQuantity}>Показать еще 5 билетов!</button>
        </div>
    );
};

export default FoterBut;
