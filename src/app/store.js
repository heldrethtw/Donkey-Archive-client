import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../users/userSlice";
import movieReducer from "./movies/movieSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
    },

});