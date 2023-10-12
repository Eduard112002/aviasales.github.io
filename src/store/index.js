import {configureStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'remotedev-redux-devtools-extension/npm-package';
import transfersCheckedReducer from '../reducer/transfers-checked';
import transfersEffectReducer from '../reducer/transfersEffect';
import addTicketsReducer from '../reducer/add-tickets';
import thunk from 'redux-thunk';
import tabsFilterReducer from "../reducer/tabs-filte";

const reducer = combineReducers(
    {
        transfersCheckedReducer,
        transfersEffectReducer,
        addTicketsReducer,
        tabsFilterReducer,
    }
)

const store = configureStore({reducer}, composeWithDevTools(applyMiddleware(thunk)));
export default store;