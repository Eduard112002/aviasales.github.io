import React, { useState } from 'react';
import {  Button, Modal  } from 'antd';
import './transfer-mobile.css';
import {connect, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../../actions";

const TransferMobile = ({ fullChecked, noChecked, oneChecked, twoChecked, threeChecked }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const { fullTransfers, noTransfers, oneTransfers, twoTransfers, threeTransfers } =
        bindActionCreators(actions, dispatch);
    let checkedFunction = [fullTransfers, noTransfers, oneTransfers, twoTransfers, threeTransfers];
    let checkedName = [fullChecked, noChecked, oneChecked, twoChecked, threeChecked];
    const checkboxEl = ['Все', 'Без пересадок', '1 пересадка', '2 пересадка', '3 пересадка'];
    const transfersBox = checkboxEl.map((el, index) => {
        const fun = checkedFunction[index];
        return (
            <label className="transfers_input" htmlFor={el} key={el}>
                <input type="checkbox" id={el} onChange={(event) => fun(event.target.checked)} checked={checkedName[index]}/>
                <span>{el}</span>
            </label>
        )
    })
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Количество пересадок
            </Button>
            <Modal title="Количество пересадок" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <form className="transfers" >
                        {transfersBox}
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