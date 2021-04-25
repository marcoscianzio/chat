import { types } from "../components/types/types";

const initialState = {
    active: null,
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.setActive:
            return {
                ...state,
                active: action.payload,
            };
        default:
            return state;
    }
};
