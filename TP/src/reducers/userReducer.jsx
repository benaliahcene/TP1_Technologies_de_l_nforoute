// userReducer.jsx
import { SAVE_USER_DATA, UPDATE_USER_DATA } from '../actions/actionTypes';

const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '2001-01-01', // Format yyyy-mm-dd
    email: '',
    password: ''
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
                password: action.payload.password
            };
        case UPDATE_USER_DATA:
            return {
                ...state,
                firstName: action.payload.firstName || state.firstName,
                lastName: action.payload.lastName || state.lastName,
                dateOfBirth: action.payload.dateOfBirth || state.dateOfBirth,
                email: action.payload.email || state.email,
                password: action.payload.password || state.password
            };
        default:
            return state;
    }
};

export default userReducer;
