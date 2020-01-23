import * as ActionTypes from "../constants/ActionTypes";
export const addItem = item => ({
    type: ActionTypes.ADD_ITEM,
    payload: item
});
export const deleteItem = id=> ({
    type: ActionTypes.DELETE_ITEM,
    payload: id
})

export const test = ()=> ({
    type: ActionTypes.TEST
})

