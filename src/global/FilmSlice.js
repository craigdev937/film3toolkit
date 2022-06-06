import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: [],
    loading: false,
    error: null
};

const FilmSlice = createSlice({
    name: "films",
    initialState: initialState,
    reducers: {
        addFilms: (state, action) => {
            state.films = action.payload
        },
    },
});

export const FilmActions = FilmSlice.actions;
export const FilmReducer = FilmSlice.reducer;



