import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
    setSelectedMovie: (state, action) => {
        state.selectedMovie = action.payload;
    },
    clearMovies: (state) => {
        state.movies = [];
        state.selectedMovie = null;
    }
});

export const { setMovies, setSelectedMovie, clearMovies } = movieSlice.actions;

export default movieSlice.reducer;