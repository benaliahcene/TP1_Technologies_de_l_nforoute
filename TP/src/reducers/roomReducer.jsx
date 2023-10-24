// roomReducer.jsx
import { SAVE_ROOM_DATA} from '../actions/actionTypes';

const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '2001-01-01', // Format yyyy-mm-dd
    email: '',
    password: '',
    solde: 0.0
};

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ROOM_DATA:
            console.log("Payload reçu:", action.payload);
           
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                dateOfBirth: action.payload.dateOfBirth,
                email: action.payload.email,
                password: action.payload.password,
                solde: action.payload.solde || 0.0
               
            };
        default:
            return state;
    }
};

export default roomReducer;
