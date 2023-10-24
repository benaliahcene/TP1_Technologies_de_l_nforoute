import { SAVE_VOL_DATA } from './actionTypes';

// Votre action existante
export const saveVolData = (volData) => ({
    type: SAVE_VOL_DATA,
    payload: volData
});