import React from "react";
import { APIKey } from "../config/FilmAPI";

const URL = "https://www.omdbapi.com";
export const Films = () => {
    React.useEffect(() => {
        const filmText = "harry";
        const fetchFilms = async () => {
            const res = await fetch(
                `${URL}?apiKey=${APIKey}&s=${filmText}&type=movie`
            );
            if (!res.ok) throw new Error(res.statusText);
            const data = await res.json();
            console.log(data);
            return data;
        };
        fetchFilms();
    }, []);

    return (
        <React.Fragment>
            <h1>Films</h1>
        </React.Fragment>
    );
};



