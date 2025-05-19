import { combineReducers } from "redux";

export const contactsReducer = (state = [], action) => {
    if (action.type === "add") {
        return [...state, action.payload];
    } else if (action.type === "delete") {
        return state.filter(contact => contact.name !== action.payload);
    } else {

        return state;
    }
};

export const filterReducer = (state = "", action) => {
    if (action.type === "FILTER") {
        return action.payload;
    }
    return state;
};

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});