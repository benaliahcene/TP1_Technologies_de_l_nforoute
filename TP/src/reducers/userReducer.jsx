import { SAVE_USER_DATA } from '../actions/actionTypes';

const initialState = {
    user: {}
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_USER_DATA:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;
