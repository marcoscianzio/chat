import { types } from "../components/types/types";

const initialState = {
    displayName: null,
    uid: null,
    profilePic: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                ...action.payload,
            };
        case types.logout:
            return {};
        default:
            return state;
    }
};
