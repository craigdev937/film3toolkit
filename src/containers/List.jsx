import React from "react";
import "./List.css";
import { useSelector } from "react-redux";
import { FCard } from "../components/FCard";

export const List = () => {
    const films = useSelector((state) => state.films.films);
    const shows = useSelector((state) => state.films.shows);
    let renderFilms, renderShows = "";

    renderFilms = films.Response === "True" ? 
    (
        films.Search.map((film, index) => (
            <FCard key={index} data={film} />
        ))
    ) : (
        <section className="film-error">
            <h3>{films.Error}</h3>
        </section>
    );

    renderShows = shows.Response === "True" ? 
    (
        shows.Search.map((show, index) => (
            <FCard key={index} data={show} />
        ))
    ) : (
        <section className="film-error">
            <h3>{shows.Error}</h3>
        </section>
    );

    return (
        <main>
            <section className="film">
                <h2>Films</h2>
                <aside className="film-container">
                    {renderFilms}
                </aside>
            </section>
            <section className="show">
                <h2>Shows</h2>
                <aside className="show-container">
                    {renderShows}
                </aside>
            </section>
        </main>
    );
};





