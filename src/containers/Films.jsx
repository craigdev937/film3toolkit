import React from "react";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";
import { List } from "./List";

export const Films = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(API.getFilms());
    }, [dispatch]);

    return (
        <React.Fragment>
            <List />
        </React.Fragment>
    );
};



