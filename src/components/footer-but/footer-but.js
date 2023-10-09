import React from 'react';
import './footer-but.css';

const FooterBut = ({ addQuantity }) => {
    return (<div className="foter">
            <button className="foter_but" onClick={addQuantity}>Показать еще 5 билетов!</button>
        </div>
    );
};

export default FooterBut;
