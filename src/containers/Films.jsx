import React from "react";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";
import { List } from "./List";

export const Films = () => {
    const dispatch = useDispatch();
    const filmText = "Star Trek";
    const showText = "Scandal";

    React.useEffect(() => {
        dispatch(API.getFilms(filmText));
        dispatch(API.fetchShows(showText));
    }, [dispatch]);

    return (
        <React.Fragment>
            <List />
        </React.Fragment>
    );
};



