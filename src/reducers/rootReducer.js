import { authReducer } from "./authReducer";
import { combineReducers } from "redux";
import { chatReducer } from "./chatReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer
})