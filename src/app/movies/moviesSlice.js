// src/features/movies/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
});

export const { setMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
