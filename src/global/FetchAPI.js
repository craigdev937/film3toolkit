import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../config/FilmAPI";

const URL = "https://www.omdbapi.com";
const filmText = "harry";
const FILM_URL = `${URL}?apiKey=${APIKey}&s=${filmText}&type=movie`;
const seriesText = "blacklist";
const SHOW_URL = `${URL}?apiKey=${APIKey}&s=${seriesText}&type=series`;

class FetchClass {
    getFilms = createAsyncThunk("films/getFilms", 
    async () => {
        const res = await fetch(FILM_URL);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    fetchShows = createAsyncThunk("shows/fetchShows", 
    async () => {
        const res = await fetch(SHOW_URL);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });
};

export const API = new FetchClass();


