// volReducer.jsx
import { SAVE_VOL_DATA} from '../actions/actionTypes';

const initialState = {
    AC: '',
    From : '',
    To : '', 
    Number_flight: '',
    Price: ''
   
};

const volReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_VOL_DATA:
            console.log("Payload reçu:", action.payload);
           
            return {
                ...state,
                AC: action.payload.AC,
                From: action.payload.From,
                To: action.payload.To,
                Number_flight: action.payload.Number_flight,
                Price: action.payload.Price 
               
            };
        default:
            return state;
    }
};

export default volReducer;
