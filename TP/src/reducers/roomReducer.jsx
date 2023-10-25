// roomReducer.jsx
import { SAVE_ROOM_DATA} from '../actions/actionTypes';

const initialState = {
    location: '',
    checkIn: '',
    checkOut: '', 
    price: 0.0,
    name: '',
    country: ''
};

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ROOM_DATA:
            console.log("Payload reçu:", action.payload);
           
            return {
                ...state,
                location: action.payload.location,
                checkIn: action.payload.checkIn,
                checkOut: action.payload.checkOut,
                price: action.payload.price || 0.0 ,
                name: action.payload.name,
                country: action.payload.country,
               
            };
        default:
            return state;
    }
};

export default roomReducer;
