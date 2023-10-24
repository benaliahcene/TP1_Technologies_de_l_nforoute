import { SAVE_ROOM_DATA } from './actionTypes';

// Votre action existante
export const saveRoomData = (roomData) => ({
    type: SAVE_ROOM_DATA,
    payload: roomData
});