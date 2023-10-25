// userReducer.jsx
import { SAVE_USER_DATA, UPDATE_USER_DATA } from '../actions/actionTypes';

const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '', 
    email: '',
    password: '',
    solde: 0.0
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_DATA:
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
        case UPDATE_USER_DATA:
            console.log('UPDATE_USER_DATA action received:', action);

            return {
                ...state,
                firstName: action.payload.firstName || state.firstName,
                lastName: action.payload.lastName || state.lastName,
                dateOfBirth: action.payload.dateOfBirth || state.dateOfBirth,
                email: action.payload.email || state.email,
                password: action.payload.password || state.password,
                solde: action.payload.solde || state.solde
            };
        default:
            console.log('New state after UPDATE_USER_DATA:', state);

            return state;
    }
};

export default userReducer;
