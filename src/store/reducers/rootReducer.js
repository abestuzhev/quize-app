import {combineReducers} from 'redux';
import quizeReducer from './quiz';

export default combineReducers({
    quize: quizeReducer
})