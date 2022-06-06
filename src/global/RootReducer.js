import { configureStore } from "@reduxjs/toolkit";
import { FilmReducer } from "./FilmSlice";

export const Reducer = configureStore({
    reducer: {
        films: FilmReducer,
    },
});



