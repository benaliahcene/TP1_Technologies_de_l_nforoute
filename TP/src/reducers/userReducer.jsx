import { SAVE_USER_DATA } from '../actions/actionTypes';

const initialState = {
    email: '',
    password: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_DATA:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            };
        default:
            return state;
    }
};

export default userReducer;
