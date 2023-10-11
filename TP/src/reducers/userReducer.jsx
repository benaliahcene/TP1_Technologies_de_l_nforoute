import { SAVE_USER_DATA } from '../actions/actionTypes';

const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '', // Format yyyy-mm-dd
    email: '',
    password: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                dateOfBirth: action.payload.dateOfBirth,
                email: action.payload.email,
                password: action.payload.password
            };
        default:
            return state;
    }
};

export default userReducer;
