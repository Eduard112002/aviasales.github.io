import React from 'react';
import { Space, Spin, Alert } from 'antd';

import './tickets-list.css';
import Tickets from '../tickets';
import { connect } from 'react-redux';

const TicketsList = ({ ticketsList, quantity, loading, error }) => {
    if (loading) {
       return (
       <Space size="middle" className='spin'>
           <Spin tip="Loading" size="large">
               <div className="content" />
           </Spin>
        </Space>
       )
    }
    if (error) {
        return (
           <div className='error'>
                <Space direction="vertical" style={{width: '80%'}}>
                    <Alert
                        message="Error"
                        description="Internal Server Error."
                        type="error"
                        showIcon
                    />
                </Space>
           </div>
        )
    }
    if (ticketsList.length !== 0) {
        return ticketsList.map((el, index) => {
            if(index < quantity) {
                return <Tickets tickets={el} key={Math.floor(Math.random() * 100000)} />
            }
        })
    } else {
        return (
            <Alert
                message="Warning"
                description="Рейсов, подходящих под заданные фильтры, не найдено."
                type="warning"
                showIcon
            />
        )
    }
}

const mapStateToProps = (state) => {
    const tickets = state.addTicketsReducer;
    const tabs = state.tabsFilterReducer;
    return {
        ticketsList: tickets.arrFilter,
        loading: tickets.loading,
        error: tickets.error,
        quantity: tabs.quantity,
    };
};
export default connect(mapStateToProps)(TicketsList);
