import React from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FilmActions } from "../global/FilmSlice";
import { API } from "../global/FetchAPI";

export const Details = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(
        (state) =>state.films.filmsOrShows);
    
    React.useEffect(() => {
        dispatch(API.fetchFilmOrShow(imdbID));
        return () => {
            dispatch(FilmActions.removeFOS());
        };
    }, [dispatch, imdbID]);

    return (
        <main className="film-section">
            {Object.keys(data).length === 0 ? (
                <section>Loading...</section>
            ) : (
                <React.Fragment>
                    <section className="section-left">
                        <aside className="film-title">
                            {data.Title}
                        </aside>
                        <aside className="film-rating">
                            <span>IMDB Rating
                                <i className="fa fa-star"> : {data.imdbRating}</i>
                            </span>
                            <span>IMDB Votes
                                <i className="fa fa-thumbs-up"> : {data.imdbRating}</i>
                            </span>
                        </aside>
                    </section>
                </React.Fragment>
            )}
        </main>
    );
};



