import * as ActionTypes from "../constants/ActionTypes";
import {generateId} from "../constants/Helpers";

const initialState = {
    items: [],
    categories: [{title: "Food", id: 1},
        {title: "Gift", id: 2},
        {title: "Salary", id: 3},
        {title: "Freelance", id: 4}
    ],  // айдишники категорий

};
export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            // eslint-disable-next-line no-case-declarations
            const id = state.items && state.items.length ? state.items[state.items.length - 1].id : 0;
            action.payload.id = generateId(id);
            return {...state, items: [...state.items, action.payload]};
            break;
        case ActionTypes.DELETE_ITEM:
            return {...state, items: [...state.items.filter(el => el.id !== action.payload)]};
        default:
            return state;

    }


    // return{ ...state, items: [...state.items, action.payload]};  // старый стейт + новые items
    // return state;
};    // payload
