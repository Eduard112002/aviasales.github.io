import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {composeWithDevTools} from "remotedev-redux-devtools-extension/npm-package";
import transfersCheckedReducer from "../reducer/transfers-checked";
import transfersEffectReducer from "../reducer/transfersEffect";

const reducer = combineReducers(
    {
        transfersCheckedReducer,
        transfersEffectReducer,
    }
)

const store = configureStore({reducer}, composeWithDevTools());
export default store;