import { combineReducers } from 'redux';
import userReducer from './userReducer';
import roomReducer from './roomReducer';
import volReducer from './volReducer';

const rootReducer = combineReducers({
    user: userReducer,
    vol: volReducer,
    room: roomReducer
    // ... Vos autres reducers
});

export default rootReducer;
