import { SAVE_USER_DATA, UPDATE_USER_DATA } from './actionTypes';

// Votre action existante
export const saveUserData = (userData) => ({
    type: SAVE_USER_DATA,
    payload: userData
});

// La nouvelle action
export const updateUser = (updatedData) => ({
    type: UPDATE_USER_DATA,
    payload: updatedData
});
