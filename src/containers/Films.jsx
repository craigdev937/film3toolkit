import React from "react";
import { useDispatch } from "react-redux";
import { APIKey } from "../config/FilmAPI";
import { List } from "./List";
import { FilmActions } from "../global/FilmSlice";

const URL = "https://www.omdbapi.com";
export const Films = () => {
    const filmText = "harry";
    const dispatch = useDispatch();
    React.useEffect(() => {
        const fetchFilms = async () => {
            const res = await fetch(
                `${URL}?apiKey=${APIKey}&s=${filmText}&type=movie`
            );
            if (!res.ok) throw new Error(res.statusText);
            const data = await res.json();
            dispatch(FilmActions.addFilms(data));
            return data;
        };
        fetchFilms();
    }, []);

    return (
        <React.Fragment>
            <List />
        </React.Fragment>
    );
};



