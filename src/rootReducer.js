import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;