import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        films: () => "OMDB Film Database!"
    },
});



