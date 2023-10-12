import React from 'react';
import './header.css'
import { connect } from 'react-redux';

const Header = ({ error }) => {
  if (!error) {
      return <div className='logo'>
          <span className='logo_img'></span>
      </div>
  }
}

const mapStateToProps = (state) => {
    const tiscets = state.addTicketsReducer;
    return {
        error: tiscets.error,
    };
};

export default connect(mapStateToProps)(Header);