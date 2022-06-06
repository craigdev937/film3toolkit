import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../config/FilmAPI";

const filmText = "harry";
const URL = "https://www.omdbapi.com";
class FetchClass {
    getFilms = createAsyncThunk("films/getFilms", 
    async () => {
        const res = await fetch(
            `${URL}?apiKey=${APIKey}&s=${filmText}&type=movie`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        console.log(data);
        return data;
    });
};

export const API = new FetchClass();


