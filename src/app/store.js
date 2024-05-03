import { configureStore } from "@reduxjs/toolkit";
import userReducer from "react";
import movieReducer from "./reducers/movie-reducer";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
});

