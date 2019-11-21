import {combineReducers} from 'redux';
import citasreducer from './citasreducer';
import validacionreducer from './validacionreducer';

export default combineReducers({

    citas: citasreducer,
    error : validacionreducer
});