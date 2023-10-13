import React, { useState } from 'react';
import {  Button, Modal  } from 'antd';
import './transfer-mobile.css';
import {connect} from "react-redux";

const TransferMobile = ({ fullChecked, noChecked, oneChecked, twoChecked, threeChecked }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Количество пересадок
            </Button>
            <Modal title="Количество пересадок" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <form className="transfers" >
                        <label className="transfers_input" htmlFor="full" >
                            <input type="checkbox" id="full" onChange={() => console.log('opp')} checked={fullChecked}/>
                            <span>Все</span>
                        </label>
                        <label className="transfers_input" htmlFor="no" >
                            <input type="checkbox" id="no" onChange={() => console.log('opp')}  checked={noChecked}/>
                            <span>Без пересадок</span>
                        </label>
                        <label className="transfers_input" htmlFor="1" >
                            <input type="checkbox" id="1" onChange={() => console.log('opp')}  checked={oneChecked}/>
                            <span>1 пересадка</span>
                        </label>
                        <label className="transfers_input" htmlFor="2" >
                            <input type="checkbox" id="2" onChange={() => console.log('opp')}  checked={twoChecked}/>
                            <span>2 пересадки</span>
                        </label>
                        <label className="transfers_input" htmlFor="3" >
                            <input type="checkbox" id="3" onChange={() => console.log('opp')}  checked={threeChecked}/>
                            <span>3 пересадки</span>
                        </label>
                    </form>
                </div>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    const transChec = state.transfersCheckedReducer;
    return{
        fullChecked: transChec.fullChecked,
        noChecked: transChec.noChecked,
        oneChecked: transChec.oneChecked,
        twoChecked: transChec.twoChecked,
        threeChecked: transChec.threeChecked,
    }
};
export default connect(mapStateToProps)(TransferMobile);